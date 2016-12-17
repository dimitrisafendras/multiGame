import { handleActions } from 'redux-actions';

import {
  signedIn,
  signedOut,
} from './user-actions';

const userReducer = handleActions(
  {
    [signedIn.type]: (state, { payload }) => ({...payload}),
    [signedOut.type]: (state, { payload }) => ({...payload}),
  },
  {} // default user state
);

export default userReducer;
