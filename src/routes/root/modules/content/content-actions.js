import { createAction } from 'redux-actions';

//
// Static content synchronous action creators
//
export const contentUpdated = createAction('CONTENT_UPDATED');
contentUpdated.type = 'CONTENT_UPDATED';

//
// Static content synchronous action
//
import { content } from 'model-services';
export const contentUpdate = contentUpdated(content);
