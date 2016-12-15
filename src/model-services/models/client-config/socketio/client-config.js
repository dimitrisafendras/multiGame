import { clientConfigSocket } from 'model-services/server-apis';

/*
 * Register Listeners (observers) of the asynchronous changes
 * of the model-service clientConfig state.
 */
export const setOnClientConfig = (
  onClientConfig: (config?: Object) => void
) => {
  clientConfigSocket.on('clientConfig', onClientConfig);
};
