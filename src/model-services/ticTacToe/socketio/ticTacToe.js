import { ticTacToeSocket } from '../../../model-services/server-apis';
import { dispatcher } from '../../../routes/TicTacToe/modules/utils';

export const onMarkTile = ()=> ({
  onMarkTile: ticTacToeSocket.on('markTile', (action)=> (
    dispatcher(action)
  ))
});

export const onNewGame = ()=> ({
  onNewGame: ticTacToeSocket.on('newGame', (action)=> (
    dispatcher(action)
  ))
});
