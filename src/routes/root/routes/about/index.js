// import About from './components/about';

export default {
  path: 'about',
  // component: About,
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const About = require('./components/about').default;
      cb(null, About);
    }, 'about');
  },
};
