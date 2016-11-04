import ReactGA from 'react-ga';

// We only need to import the modules necessary for initial render
import {
  HomeRoute,
  OrganizationsRoute,
  CareersRoute,
  AboutRoute,
  ContactRoute,
  TrainingRoute,
  UserRoute,
} from './routes';

import { Layout } from './components';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

import { injectReducer } from 'store/reducers';
import userReducer from './modules/user/user-reducer';
import contentReducer from './modules/content/content-reducer';

import { onSignInAndOnSignOut } from './modules/user/user-actions';
import { contentUpdate } from './modules/content/content-actions';

ReactGA.initialize('UA-86819304-1');

export const rootRoute = (store) => {
  injectReducer(store, { key: 'user', reducer: userReducer });
  injectReducer(store, { key: 'content', reducer: contentReducer });

  //
  // Asynchronous listener of the changes of the user's authentication state.
  // create signedIn and signedOut actions.  When the external model-service
  // user auth state changes from auth to unauth or vise versa, invokes the
  // store dispatcher for the signedIn and signedOut actions respectivelly.
  //
  store.dispatch(onSignInAndOnSignOut);

  //
  // Initialize static content
  //
  store.dispatch(contentUpdate);

  //
  // Subscribe each page view to google analytics
  //
  let pathname = '';
  store.subscribe(() => {
    let previousPathname = pathname;
    const { router } = store.getState();
    pathname = router.locationBeforeTransitions.pathname;
    if (previousPathname !== pathname) {
      ReactGA.pageview(pathname);
    }
  });

  return {
    path: '/',
    component: Layout,
    indexRoute: HomeRoute,
    childRoutes: [
      OrganizationsRoute,
      CareersRoute,
      AboutRoute,
      ContactRoute,
      TrainingRoute,
      UserRoute(store),
    ],
  };
};

export default rootRoute;
