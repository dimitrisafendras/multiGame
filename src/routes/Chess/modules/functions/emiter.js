import { chessSocket } from '../../../../model-services/server-apis';
import { store } from 'main';
import {options} from '../actions';

export const emiter = (event, action)=> {
  chessSocket.emit(event, action)
};

export const dispatcher = (action)=> (
  store.dispatch(action)
);
//FIX TO USE ACTIONS AND NOT WRITE THEM
export const emiterOptions = {

  moveTileOnline : (line, col, selectedTile)=> {
    emiter('moveTile', options.moveTile(line, col, selectedTile));
    return {
      type:'SENT_MOVE'
    }
  },

  getReady: (username)=> {
    emiter('getReady', username);
    return {
      type:'AM_READY'
    }
  },

  challengePlayer: (username, opponent)=> {
    emiter('challengePlayer', {player: username, opponent: opponent});
    return {
      type:'SEND_CHALLENGE'
    }
  },

  readyToPlay: (username, opponent)=> {
    console.log(opponent);
    emiter('readyToPlay', {player:username, opponent: opponent});
    return {
      type:'STARTING_MATCH'
    }
  },
}
