import { handleActions } from 'redux-actions';
import { contentUpdated } from './content-actions';

const contentReducer = handleActions(
  {
    [contentUpdated.type]: (state, { payload }) => payload,
  },
  [] // default static content state
);

export default contentReducer;
