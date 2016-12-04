import { goBack } from 'react-router-redux';

export default (store) => {
  return {
    path: 'User',
    getComponent(nextState, cb) {
      // Webpack - use 'require.ensure' to create a split point
      // and embed an async module loader (jsonp) when bundling
      require.ensure([], (require) => {
        // Webpack - use require callback to define
        // dependencies for bundling
        const Dashboard = require('./containers').Dashboard;
        // /* const reducer = require('./modules/dashpord').default
        // Add the reducer to the store on key 'counter'
        // /* injectReducer(store, { key: 'dashboard', reducer })

        // Return getComponent
        const { user } = store.getState();
        if (user && user.email) {
          cb(null, Dashboard);
        } else {
          store.dispatch(goBack());
        }

        /* Webpack named bundle   */
      }, 'dashboard');
    },
  };
};
