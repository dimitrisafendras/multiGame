import axios from 'axios';
import io from 'socket.io-client';

export const userAuthanticate = (processResult, { provider, email, password }) => {
  if (provider === 'local') {
    axios
    .post('/auth', { email, password })
    .then((response) => (response.data.user))
    .then(processResult)
    .catch(processResult);
    return;
  }

  window.open(
    `/auth/${provider}`,
    'AUTH_PROVIDER_WINDOW',
    'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes',
  );
};

export const userUnAuthanticate = (processResult) => {
  axios
  .get('/auth/unAuth')
  .then((response) => (response.data.user))
  .then(processResult)
  .catch(processResult);
};

/*
* Register Listener of the asynchronous changes of the model-service
* user's authentication state.
*/
export const userOnAuthAndOnUnauth = (processResultAuth, processResultUnAuth) => {
  const socket = io('/session');
  socket.on('authUnauth', () => (
    axios
    .get('/auth/checkAuth')
    .then((response) => response.data.user)
    .then((user) => {
      if (user && user.email) {
        console.log('model-service/user/Client authenticated:', user, user.currentLoginAttempt);
        processResultAuth(user);
        return;
      }

      processResultUnAuth(user);
    })
  ));
};
