import { push } from 'react-router-redux';
import { Dashboard } from './containers';

// export default {
//   path: 'user',
//   component: Dashboard,
// };

export default (store) => {
  // injectReducer(store, { key: 'user', reducer: userReducer });
  // injectReducer(store, { key: 'content', reducer: contentReducer });

  // store.dispatch(onSignInAndOnSignOut);

  return {
    path: 'User',
    getComponent(nextState, cb) {
      const { user } = store.getState();
      if (user && user.email) {
        cb(null, Dashboard);
      } else {
        store.dispatch(push('/'));
      }
    },
  };
};
