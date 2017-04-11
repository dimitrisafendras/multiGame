import { chessSocket } from '../../../../model-services/server-apis';
import { store } from 'main';
import {
  moveTileOffline, moveTileDummy,
  iAmReadyDummy, sendChallengeDummy,
  startingMatchDummy, resetChess, declineMatch,
} from '../constants';

export const emiter = (event, action)=> {
  chessSocket.emit(event, action)
};

export const emiterOptions = {

  moveTileOnline: (line, col, selectedTile)=> {
    emiter('moveTile', moveTileOffline(line, col, selectedTile));
    return moveTileDummy();
  },

  getReady: (username)=> {
    emiter('getReady', username);
    return iAmReadyDummy();
  },

  challengePlayer: (player, opponent)=> {
    emiter('challengePlayer', {player, opponent});
    return sendChallengeDummy();
  },

  answerChallenge: (player, opponent, answer)=> {
    emiter('answerChallenge', {player, opponent, answer});
    if(!answer){
      return declineMatch();
    }
    return startingMatchDummy();
  },

  getDisconnected: (username)=> {
    emiter('getDisconnected', username);
    return resetChess();
  },
};
