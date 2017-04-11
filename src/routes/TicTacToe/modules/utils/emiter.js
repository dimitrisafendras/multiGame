import {ticTacToeSocket} from '../../../../model-services/server-apis';
import { markTile, newGame, newGameDummy, markTileDummy} from '../constants';
import {store} from 'main';

export const onlineMode = (event, action)=>{
  ticTacToeSocket.emit(event, action)
};

export const emiterOptions = {

  markTile: (player, key) => {
    onlineMode('markTile', markTile(player, key));
    return markTileDummy();
  },

  newGame: (player, gameStyle) => {
    onlineMode('newGame', newGame(player, gameStyle));
    return newGameDummy();
  },
};
