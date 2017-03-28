import { chessSocket } from '../../../../model-services/server-apis';
import { store } from 'main';

export const emiter = (event, action)=> {
  chessSocket.emit(event, action)
};

export const dispatcher = (action)=> (
  store.dispatch(action)
);

export const moveTileOnline = (line, col, selectedTile)=> {
  emiter('moveTile', {
    type: 'MOVE_TILE',
    payload: {line, col, selectedTile}
  });
  console.log('did it')
  return {
    type:'SENT_MOVE'
  }
};
