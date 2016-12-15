import { handleActions } from 'redux-actions';
import { clientConfiged } from './client-config-actions';

const clientConfigReducer = handleActions(
  {
    [clientConfiged.type]: (state, { payload }) => payload || {},
  },
  {} // default config state
);

export default clientConfigReducer;
