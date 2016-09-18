import React from 'react';
import { connect } from 'react-redux';

import {
  signIn,
  signUp,
} from 'routes/root/modules/user/user-actions';

import {
  AuthProviders as AuthorizationProviders,
  AuthForm as AuthorizationForm,
} from '../components';

const authConnect = connect(
  (state) => ({}),
  (dispatch) => ({
    signIn: (options) => { // { provider, email, password }
      dispatch(signIn(options));
    },

    signUp: (options) => { // { email, password }
      dispatch(signUp(options));
    },
  })
);

export const AuthProviders = authConnect(AuthorizationProviders);
export const AuthForm = authConnect(AuthorizationForm);
