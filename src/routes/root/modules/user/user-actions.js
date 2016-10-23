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
// signUp
//
import { user as userService } from 'model-services';

import { push } from 'react-router-redux';

export const signIn = (options) => (dispatch, getState) => {
  const { user } = getState();
  if (user && user.email) return;

  userService
  .auth(options)
  .then((user) => {
    dispatch(signedIn(user));
  })
  .catch((error) => {
    console.log('user-actions signIn', error);
  });
};

export const signOut = () => (dispatch) => {
  userService
  .unAuth()
  .catch((error) => {
    console.log('user-actions signOut', error);
  });
};

export const signUp = (userData) => (dispatch) => {
  userService
  .createLocalUser(userData)
  .catch((error) => {
    console.log('user-actions signUp', error);
  });
};

//
// User Asynchronous action creator, triggered from the model-service api.
// Crates a Listener action creator of the changes of the model-service user's
// authentication state. It dispatches a signedIn(user) action when a user
// signes in and a signedOut(null) action when a user signes out.
//
export const onSignInAndOnSignOut = (dispatch) => {
  userService.setOnAuth((user) => {
    dispatch(signedIn(user));
    dispatch(push('/User'));
  });
  userService.setOnUnAuth((user) => {
    dispatch(signedOut({}));
    const pathname = window.location.pathname;
    if (pathname.startsWith('/User')) {
      dispatch(push('/'));
    }
  });
};
