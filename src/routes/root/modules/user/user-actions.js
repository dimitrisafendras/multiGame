import { createAction } from 'redux-actions';
import { push } from 'react-router-redux';
import { user as userService } from 'model-services';

//
// User synchronous action creators
//
const signedIn = createAction('USER_SIGNED_IN');
signedIn.type = 'USER_SIGNED_IN';

const signedOut = createAction('USER_SIGNED_OUT');
signedOut.type = 'USER_SIGNED_OUT';

//
// User asynchronous action creators
// signIn
// signOut
// signUp
//
const signIn = (options) => (dispatch, getState) => {
  const { user } = getState();
  if (user && user.email) return;

  userService
  .auth(options)
  .catch((error) => {
    console.log('user-actions signIn', error);
  });
};

const signOut = () => (dispatch) => {
  userService
  .unAuth()
  .catch((error) => {
    console.log('user-actions signOut', error);
  });
};

const signUp = (userData) => (dispatch) => {
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
const onSignInAndOnSignOut = (dispatch) => {
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

export {
  signedIn,
  signedOut,
  signIn,
  signOut,
  signUp,
  onSignInAndOnSignOut,
};
