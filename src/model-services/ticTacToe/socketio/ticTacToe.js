import { ticTacToeSocket } from '../../../model-services/server-apis';
import { store } from 'main';

export const onMarkTile = ()=> ({
  onMarkTile: ticTacToeSocket.on('markTile', (action)=> {
    store.dispatch(action);
  })
});

export const onNewGame = ()=> ({
  onNewGame: ticTacToeSocket.on('newGame', (action)=> {
    store.dispatch(action);
  })
});
