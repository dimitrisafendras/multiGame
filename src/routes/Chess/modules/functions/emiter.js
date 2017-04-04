import { chessSocket } from '../../../../model-services/server-apis';
import { store } from 'main';
import {
  moveTileOffline, moveTileDummy,
  iAmReadyDummy, sendChallengeDummy,
  startingMatchDummy, players
} from '../constants';

export const emiter = (event, action)=> {
  chessSocket.emit(event, action)
};

export const dispatcher = (action)=> (
  store.dispatch(action)
);

//FIX TO USE ACTIONS AND NOT WRITE THEM
export const emiterOptions = {
//FIX MOVETILEOFFLINE
  moveTileOnline: (line, col, selectedTile)=> {
    emiter('moveTile', moveTileOffline(line, col, selectedTile));
    return moveTileDummy();
  },

  getReady: (username)=> {
    emiter('getReady', username);
    return iAmReadyDummy();
  },

  challengePlayer: (username, opponent)=> {
    emiter('challengePlayer', players(username, opponent));
    return sendChallengeDummy();
  },

  readyToPlay: (username, opponent)=> {
    emiter('readyToPlay', players(username, opponent));
    return startingMatchDummy();
  },
};
