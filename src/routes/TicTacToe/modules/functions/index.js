import { ticTacToeSocket } from '../../../../model-services/server-apis';
import { store } from 'main';

export const onlineMode = (event, action)=> ({
  online: ticTacToeSocket.emit(event, action)
});

export const dispatcher = (a)=> (
  store.dispatch(a)
);
