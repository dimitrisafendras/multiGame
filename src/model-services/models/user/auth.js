import {
  authUserLocalProvider,
  authUserExternalProvider,
} from './rest/auth';

const auth = ({ provider, email, password }) => {
  if (provider === 'local') {
    return authUserLocalProvider({ email, password });
  }
  authUserExternalProvider(provider);
  return Promise.resolve({ provider });
};

export {
  auth,
};
