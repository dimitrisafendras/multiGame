import { createAction } from 'redux-actions';

//
// User synchronous action creators
//
export const signedIn = createAction('USER_SIGNED_IN');
signedIn.type = 'USER_SIGNED_IN';

export const signedOut = createAction('USER_SIGNED_OUT');
signedOut.type = 'USER_SIGNED_OUT';

//
// User asynchronous action creators
// signIn
// signOut
//
import {
  userAuthanticate,
  userUnAuthanticate,
  userOnAuthAndOnUnauth,
} from 'model-services/user';

import { push } from 'react-router-redux';

export const signIn = (options) => (dispatch, getState) => {
  const { user } = getState();

  if (!user || !user.provider) {
    userAuthanticate(() => null, options);
  }
};

export const signOut = () => (dispatch) => userUnAuthanticate(() => null);

//
// User Asynchronous action creator, triggered from the model-service api.
// Crates a Listener action creator of the changes of the model-service user's
// authentication state. It dispatches a signedIn(user) action when a user
// signes in and a signedOut(null) action when a user signes out.
//
export const onSignInAndOnSignOut = () => (dispatch) => userOnAuthAndOnUnauth(
  (user) => {
    dispatch(signedIn(user));
    dispatch(push('/BecomeAgileActor'));
  },

  (user) => {
    dispatch(signedOut(null));
    dispatch(push('/'));
  },
 );
