'use strict';

import TicTac from '../routes/TicTacToe/modules/tictac/index';
import {
  MARK_TILE,
  MARK_TILE_ONLINE,
  NEW_GAME,
  NEW_GAME_ONLINE
} from '../routes/TicTacToe/modules/constants';

const INITIAL_STATE = { squares: Array(9), victory: false };

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {

    case MARK_TILE:
      let squares = [...state.squares.slice(0, action.payload.key), action.payload.player, ...state.squares.slice(action.payload.key + 1)];
      return { ...state, squares: squares, victory: TicTac.checkWinner(squares) };

    case MARK_TILE_ONLINE:
      let onlineSquares = [...state.squares.slice(0, action.payload.key), action.payload.player, ...state.squares.slice(action.payload.key + 1)];
      return { ...state, squares: onlineSquares, victory: TicTac.checkWinner(onlineSquares) };

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
