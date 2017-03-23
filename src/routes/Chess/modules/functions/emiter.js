import { chessSocket } from '../../../../model-services/server-apis';
import { store } from 'main';

export const emiter = (event, action)=> ({
  online: chessSocket.emit(event, action)
});

export const dispatcher = (action)=> (
  store.dispatch(action)
);
