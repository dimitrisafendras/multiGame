import { ticTacToeSocket } from '../../../../model-services/server-apis';

export const onlineMode = (a, b)=> ({
  online: ticTacToeSocket.emit(a, b)
});

