import { ticTacToeSocket } from '../../../model-services/server-apis';
import { dispatcher } from '../../../routes/TicTacToe/modules/functions';

  ticTacToeSocket.on('markTile', (action)=> (
    dispatcher(action)
  ));

  ticTacToeSocket.on('newGame', (action)=> (
    dispatcher(action)
  ));
