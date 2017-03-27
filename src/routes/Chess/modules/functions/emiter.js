import { chessSocket } from '../../../../model-services/server-apis';
import { store } from 'main';

export const emiter = (event, action)=> {
  chessSocket.emit(event, action)
};

export const dispatcher = (action)=> (
  store.dispatch(action)
);

export const moveTileOnline = (lineId, squareId, selectedTile)=> {
  emiter('moveTile', {
    type: 'MOVE_TILE',
    payload: {lineId, squareId, selectedTile}
  });
  return {
    type:'SENT_MOVE'
  }
};
