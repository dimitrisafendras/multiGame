import { clientConfigSocket } from 'model-services/server-apis';

type OnClientConfig = (config?: Object) => void;

/*
 * Register Listeners (observers) of the asynchronous changes
 * of the model-service clientConfig state.
 */
export const setOnClientConfig = (onClientConfig: OnClientConfig) => {
  clientConfigSocket.on('clientConfig', onClientConfig);
};
