'use strict';
import {
  MARK_TILE,
  MARK_TILE_ONLINE,
  NEW_GAME,
  NEW_GAME_ONLINE
} from '../../routes/TicTacToe/modules/constants';
import {markTile} from '../../routes/TicTacToe/modules/utils/markTile';

const INITIAL_STATE = { squares: Array(9), victory: false };

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {

    case MARK_TILE:
      return markTile(state, action);

    case MARK_TILE_ONLINE:
      return markTile(state, action);

    case NEW_GAME:
      let gameStyle = { gameStyle: action.payload.gameStyle };
      return { ...state, ...INITIAL_STATE , ...gameStyle};

    case NEW_GAME_ONLINE:
      let OnlineGameStyle = { gameStyle: action.payload.gameStyle };
      return { ...state, ...INITIAL_STATE , ...OnlineGameStyle};

    default:
      return state;
  }
}
