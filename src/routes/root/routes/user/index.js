import { goBack } from 'react-router-redux';
import { Dashboard } from './containers';

export default (store) => {
  return {
    path: 'User',
    getComponent(nextState, cb) {
      const { user } = store.getState();
      if (user && user.email) {
        cb(null, Dashboard);
      } else {
        store.dispatch(goBack());
      }
    },
  };
};
