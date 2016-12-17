import axios from 'axios';

//
// authUserLocalProvider example:
//
// const authorizeUser = authUserLocalProvider({ email, password })
// .then((user) => {
//   onSuccess(user);
// })
// .catch((err) => {
//   onError(user);
// })
//
export const authUserLocalProvider = ({ email, password }) => (
  axios
  .post('/auth', { email, password })
  .then(({ data: { user } }) => user)
);

export const authUserExternalProvider = (provider) => {
  window.open(
    `/auth/${provider}`,
    'AUTH_PROVIDER_WINDOW',
    'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes',
  );
};

export const checkAuth = () => (
  axios
  .get('/auth/checkAuth')
  .then(({ data: { user } }) => user)
);

export const unAuth = () => (
  axios
  .get('/auth/unAuth')
  .then(({ data: { user } }) => user)
);
