// import Careers from './components/careers';

export default {
  path: 'Careers',
  // component: Careers,
  getComponent(nextState, cb) {
    // Webpack - use 'require.ensure' to create a split point
    // and embed an async module loader (jsonp) when bundling
    require.ensure([], (require) => {
      // Webpack - use require callback to define
      // dependencies for bundling
      const Careers = require('./components/careers').default;
      // /* const reducer = require('./modules/dashpord').default
      // Add the reducer to the store on key 'counter'
      // /* injectReducer(store, { key: 'dashboard', reducer })

      // Return getComponent
      cb(null, Careers);

      /* Webpack named bundle   */
    }, 'careers');
  },
};
