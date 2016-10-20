import {
  onSignInAble,
  onSignUpAble,
} from 'routes/root/containers';

import {
  AuthProviders as AuthorizationProviders,
  AuthForm as AuthorizationForm,
} from '../components';

export const AuthProviders = onSignInAble(onSignUpAble(AuthorizationProviders));
export const AuthForm = onSignInAble(onSignUpAble(AuthorizationForm));
