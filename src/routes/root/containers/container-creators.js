import { push } from 'react-router-redux';

import {
  stateProp,
  actionProp,
} from 'containers';

import {
  signOut,
  signIn,
  signUp,
} from 'routes/root/modules/user/user-actions';

const contentAble = stateProp(({ content }) => ({ content }));

const userAble = stateProp(({ user }) => ({ user }));

const userSigninEnabledAble = stateProp(({
  clientConfig: {
    userSigninEnabled = false,
  } = {},
}) => ({ userSigninEnabled }));

const linkAble = actionProp((dispatch) => ({
  link: (path) => {
    path.charAt(0) === '/' ? dispatch(push(path)) : window.open(path, '_newtab');
  },
}));

const signOutAble = actionProp((dispatch) => ({
  signOut: () => dispatch(signOut()),
}));

const signInAble = actionProp((dispatch) => ({
  signIn: (options) => { // { provider, email, password }
    dispatch(signIn(options));
  },
}));

const signUpAble = actionProp((dispatch) => ({
  signUp: (options) => { // { email, password }
    dispatch(signUp(options));
  },
}));

export {
  userSigninEnabledAble,
  contentAble,
  linkAble,
  userAble,
  signInAble,
  signUpAble,
  signOutAble,
};
