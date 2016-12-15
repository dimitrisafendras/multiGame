import {
  authUserLocalProvider,
  authUserExternalProvider,
  checkAuth,
  unAuth,
} from './rest/auth';

import {
  auth,
} from './auth';

import {
  createLocalUser,
} from './graphql/user';

import {
  createContactMessage,
} from './graphql/contacts';

import {
  setOnAuth,
  setOnUnAuth,
} from './socketio/auth';

export {
  auth,

  authUserLocalProvider,
  authUserExternalProvider,
  checkAuth,
  unAuth,

  createLocalUser,
  createContactMessage,

  setOnAuth,
  setOnUnAuth,
};
