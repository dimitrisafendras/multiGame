// import Training from './components/training';

export default {
  path: 'Training',
  // component: Training,
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Training = require('./components/training').default;
      cb(null, Training);
    }, 'training');
  },
};
