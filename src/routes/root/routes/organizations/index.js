// import Organizations from './components/organizations';

export default {
  path: 'organizations',
  // component: Organizations,
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Organizations = require('./components/organizations').default;
      cb(null, Organizations);
    }, 'organizations');
  },
};
