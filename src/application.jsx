import React, { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

type Props = {
  history: Object,
  routes: Object,
  store: Object,
};


class Application extends Component {
  props: Props;

  render() {
    const { history, routes, store } = this.props;

    return (
      <Provider store={store}>
        <Router history={history} children={routes} />
      </Provider>
    );
  }
}

export default Application;
