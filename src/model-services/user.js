import axios from 'axios';
import io from 'socket.io-client';

import { graphql } from './server-apis';

const authUser = (
  { email, password },
  onSuccess = (() => {}),
  onError = (() => {}),
) => {
  axios
  .post('/auth', { email, password })
  .then((response) => (response.data.user))
  .then(onSuccess)
  .catch(onError);
};

export const userAuthanticate = (processResult, { provider, email, password }) => {
  if (provider === 'local') {
    authUser({ email, password }, processResult, processResult);
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
        processResultAuth(user);
        return;
      }

      processResultUnAuth(user);
    })
  ));
};

export const userRegister = ({
  email,
  password,
  firstName,
  lastName,
  displayName,
}) => {
  graphql
  .mutate(`{
    user: createLocalUser(
      email: "${email}"
      password: "${password}"
    ) {
      email
      firstName
      lastName
      displayName
    }
  }`)
  .then(data => data.user)
  .then(({ email, password }) => {
    authUser(
      { email, password },
      () => {},

      (err) => {
        console.log('model-services/userRegister', err);
      }
    );
  })
  .catch(err => {
    console.log('model-services/userRegister', err);
  });
};
