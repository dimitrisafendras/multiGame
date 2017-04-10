'use strict';
import {
  MARK_TILE,
  NEW_GAME,
} from '../../routes/TicTacToe/modules/constants';
import {markTile, newGame} from '../../routes/TicTacToe/modules/utils';

const initialState = { squares: Array(9), victory: false };

export default function(state = initialState, action) {

  switch(action.type) {

    case MARK_TILE:
      return markTile(state, action);

    case NEW_GAME:
      return newGame(state, initialState, action);

    default:
      return state;
  }
}
