import { ticTacToeSocket } from '../../../model-services/server-apis';

export const setOnTicTacToe = (event, onEvent)=> {
  ticTacToeSocket.on(event, onEvent);
};
