import { chessSocket } from '../../../model-services/server-apis';
import { dispatcher } from '../../../routes/TicTacToe/modules/functions';

export const onMovedTile = ()=> ({
  onMarkTile: chessSocket.on('movedTile', (action)=> (
    dispatcher(action)
  ))
});
