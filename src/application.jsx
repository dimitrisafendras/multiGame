import React, { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';

type Props = {
  history: Object,
  routes: Object,
  store: Object,
};

ReactGA.initialize('UA-86819304-1');

const fireTracking = () => {
  ReactGA.pageview(window.location.pathname);
};

class Application extends Component {
  props: Props;

  render() {
    const { history, routes, store } = this.props;

    return (
      <Provider store={store}>
        <Router history={history} children={routes} onUpdate={fireTracking}/>
      </Provider>
    );
  }
}

export default Application;
