import { handleActions } from 'redux-actions';
import { clientConfiged } from './client-config-actions';

const clientConfigReducer = handleActions(
  {
    [clientConfiged.type]: (state, { payload }) => ({...state, ...payload}),
  },
  { userSigninEnabled: false }, // default config state
);

export default clientConfigReducer;
