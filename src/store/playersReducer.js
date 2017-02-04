'use strict';

import {
  MARK_TILE,
  MARK_TILE_ONLINE,
  NEW_GAME,
  NEW_GAME_ONLINE
} from '../routes/TicTacToe/modules/constants';


const INITIAL_STATE = { current_turn: 'x' };
const OPPONENT = {
  'x': 'o',
  'o': 'x'
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case MARK_TILE: {
      return { ...state, current_turn: OPPONENT[payload.player] }
    }

    case MARK_TILE_ONLINE: {
      return { ...state, current_turn: OPPONENT[payload.player] }
    }

    case NEW_GAME: {
      return { ...state, current_turn: payload.player }
    }

    case NEW_GAME_ONLINE: {
      return { ...state, current_turn: payload.player }
    }

    default:
      return state;
  }
}
