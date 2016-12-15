import { createAction } from 'redux-actions';
import { setOnClientConfig } from 'model-services';

//
// Client configed synchronous action creators
//
const clientConfiged = createAction('CLIENT_CONFIGED');
clientConfiged.type = 'CLIENT_CONFIGED';

//
// CLIENT_CONFIGED Asynchronous action dispatching, triggered from the
// model-service api. Crates a Listener action creator of the changes of
// the model-service clientConfig state. It dispatches a clientConfiged(config)
// action when client config vars are sent by the server.
//
const onClientConfig = (dispatch) => {
  setOnClientConfig((config) => {
    dispatch(clientConfiged(config));
  });
};

export {
  clientConfiged,
  onClientConfig,
};
