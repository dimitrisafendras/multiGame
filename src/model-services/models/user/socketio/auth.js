import { authSocket } from 'model-services/server-apis';

/*
 * Register Listeners (observers) of the asynchronous changes
 * of the model-service user's authentication state.
 */
export const setOnAuth = (
  onAuth: (user?: {email?: string}) => void,
) => {
  authSocket.on('authorization', onAuth);
};

export const setOnUnAuth = (
  onUnAuth: () => void,
) => {
  authSocket.on('unAuthorization', onUnAuth);
};
