// We only need to import the modules necessary for initial render
import { ApplicationLayout } from 'containers';
import CounterRoute from './Counter';
import HomeRoute from './home';
import BecomeAgileActorRoute from './become-agile-actor';
import OrganizationsRoute from './organizations';
import CareersRoute from './careers';
import AboutRoute from './about';
import ContactRoute from './contact';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: ApplicationLayout,
  indexRoute: HomeRoute(store),
  childRoutes: [
    CounterRoute(store),
    BecomeAgileActorRoute,
    OrganizationsRoute,
    CareersRoute,
    AboutRoute,
    ContactRoute,
  ],
});

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
