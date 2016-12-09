import { compose } from 'containers';
import {
  signInAble,
  signUpAble,
} from 'routes/root/containers';

import {
  AuthProviders as AuthorizationProviders,
  AuthForm as AuthorizationForm,
} from '../components';

const authConnect = compose(signInAble, signUpAble);

export const AuthProviders = authConnect(AuthorizationProviders);
export const AuthForm = authConnect(AuthorizationForm);
