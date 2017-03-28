import { chessSocket } from '../../../../model-services/server-apis';
import { store } from 'main';

export const emiter = (event, action)=> {
  chessSocket.emit(event, action)
};

export const dispatcher = (action)=> (
  store.dispatch(action)
);
//FIX TO USE ACTIONS AND NOT WRITE THEM
export const emiterOptions = {

  moveTileOnline : (line, col, selectedTile)=> {
    emiter('moveTile', {
      type: 'MOVE_TILE',
      payload: {line, col, selectedTile}
    });
    return {
      type:'SENT_MOVE'
    }
  },

  getReady: ()=> {
    emiter('getReady','user');
    console.log('ready???')
    return {
      type:'AM_READY'
    }
  },
}
