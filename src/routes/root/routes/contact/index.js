// import Contact from './components/contact';

export default {
  path: 'contact',
  // component: Contact,
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Contact = require('./components/contact').default;
      cb(null, Contact);
    }, 'contact');
  },
};
