import { connect } from 'react-redux';

import { signIn } from 'layouts/application-layout/modules/user/user-actions';

import {
  AuthProviders as AuthorizationProviders,
  AuthForm as AuthorizationForm,
} from 'components/agile-actors/authentication/form';

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
