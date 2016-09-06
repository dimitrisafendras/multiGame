import { handleActions } from 'redux-actions';
import { contentUpdated } from './content-actions';

const contentReducer = handleActions(
  {
    [contentUpdated.type]: (state, { payload }) => payload,
  },
  null // default static content state
);

export default contentReducer;
