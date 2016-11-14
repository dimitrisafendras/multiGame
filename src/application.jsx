import React, { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
