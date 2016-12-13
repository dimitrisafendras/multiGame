import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  signOut,
  signIn,
  signUp,
} from 'routes/root/modules/user/user-actions';

export const contentAble = connect(
  ({ content }) => ({ content })
);

export const userAble = connect(
  ({ user }) => ({ user })
);

export const linkAble = connect(
  null,
  (dispatch) => ({
    link: (path) => {
      path.charAt(0) === '/' ? dispatch(push(path)) : window.open(path, '_newtab');
    },
  }),
);

export const signOutAble = connect(
  null,
  (dispatch) => ({
    signOut: () => dispatch(signOut()),
  }),
);

export const signInAble = connect(
  null,
  (dispatch) => ({
    signIn: (options) => { // { provider, email, password }
      dispatch(signIn(options));
    },
  }),
);

export const signUpAble = connect(
  null,
  (dispatch) => ({
    signUp: (options) => { // { email, password }
      dispatch(signUp(options));
    },
  }),
);
