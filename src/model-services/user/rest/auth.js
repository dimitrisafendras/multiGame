import axios from 'axios';

//
// authUserLocalProvider example:
//
// const authorizeUserr = authUser({ email, password })
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
  .then((response) => (response.data.user)) // .then(onSuccess).catch(onError);
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
  .then((response) => response.data.user)
);

export const unAuth = () => (
  axios
  .get('/auth/unAuth')
  .then((response) => (response.data.user))
);
