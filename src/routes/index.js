// We only need to import the modules necessary for initial render
import CounterRoute from './counter';
import HomeRoute from './home';
import BecomeAgileActorRoute from './become-agile-actor';
import OrganizationsRoute from './organizations';
import CareersRoute from './careers';
import AboutRoute from './about';
import ContactRoute from './contact';

import { ApplicationLayout } from 'layouts';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

import { injectReducer } from 'store/reducers';
import userReducer from 'layouts/application-layout/modules/user/user-reducer';
import contentReducer from 'layouts/application-layout/modules/content/content-reducer';

import { onSignInAndOnSignOut } from 'layouts/application-layout/modules/user/user-actions';
import { contentUpdate } from 'layouts/application-layout/modules/content/content-actions';

export const createRoutes = (store) => {
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

  return {
    path: '/',
    component: ApplicationLayout,
    indexRoute: HomeRoute,
    childRoutes: [
      CounterRoute(store),
      BecomeAgileActorRoute,
      OrganizationsRoute,
      CareersRoute,
      AboutRoute,
      ContactRoute,
    ],
  };
};

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
