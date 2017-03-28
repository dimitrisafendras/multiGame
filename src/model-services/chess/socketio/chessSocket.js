import { chessSocket } from '../../../model-services/server-apis';
import { dispatcher } from '../../../routes/TicTacToe/modules/functions';

export const onMovedTile = ()=> {
  chessSocket.on('movedTile', (action)=> (
    dispatcher(action)
  ))
};

export const onGotReady = ()=> {
 chessSocket.on('gotReady', (payload)=> {
    console.log('aaaaaaaaaaaa');
    dispatcher({
      type: 'CHOOSE_COLOR',
      payload,
    });
  })
};
