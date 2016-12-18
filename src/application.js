import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

type Props = {
  history: Object,
  routes: Object,
  store: Object,
  onUpdate: () => void,
};

const Application = ({ history, routes, store, onUpdate }: Props) => (
  <Provider store={store}>
    <Router history={history} routes={routes} onUpdate={onUpdate} />
  </Provider>
);

export default Application;
