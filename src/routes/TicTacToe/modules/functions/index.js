import { ticTacToeSocket } from '../../../../model-services/server-apis';
import { store } from 'main';

export const onlineMode = (event, action)=> ({
  online: ticTacToeSocket.emit(event, action)
});

export const dispatcher = (action)=> (
  store.dispatch(action)
);
