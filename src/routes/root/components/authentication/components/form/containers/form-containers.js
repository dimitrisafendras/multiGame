import React from 'react';
import { connect } from 'react-redux';

import { signIn } from 'routes/root/modules/user/user-actions';

import {
  AuthProviders as AuthorizationProviders,
  AuthForm as AuthorizationForm,
} from '../components';

const authConnect = connect(
  (state) => ({}),
  (dispatch) => ({
    authProvider: (options) => { // { provider, email, password}
      dispatch(signIn(options));
    },
  })
);

export const AuthProviders = authConnect(AuthorizationProviders);
export const AuthForm = authConnect(AuthorizationForm);
