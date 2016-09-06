import Home from './components/home';
import { injectReducer } from 'store/reducers';
import userReducer from './modules/user/user-reducer';
import contentReducer from './modules/content/content-reducer';

import { onSignInAndOnSignOut } from './modules/user/user-actions';
import { contentUpdate } from './modules/content/content-actions';

export default (store) => {
  injectReducer(store, { key: 'user', userReducer });
  injectReducer(store, { key: 'content', contentReducer });

  //
  // Asynchronous listener of the changes of the user's authentication state.
  // create signedIn and signedOut actions.  When the external model-service
  // user auth state changes from auth to unauth or vise versa, invokes the
  // store dispatcher for the signedIn and signedOut actions respectivelly.
  //
  store.dispatch(onSignInAndOnSignOut());

  //
  // Initialize static content
  //
  store.dispatch(contentUpdate);

  return {
    component: Home,
  };
};
