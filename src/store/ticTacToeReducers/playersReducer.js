'use strict';

import {
  MARK_TILE,
  NEW_GAME,
} from '../../routes/TicTacToe/modules/constants';

const INITIAL_STATE = { current_turn: 'x' };

const OPPONENT = {
  'x': 'o',
  'o': 'x'
};

export default function(state = INITIAL_STATE, action) {
  console.log(action);
  switch(action.type) {

    case MARK_TILE: {
      return { ...state, current_turn: OPPONENT[action.payload.player] }
    }

    case NEW_GAME: {
      return { ...state, current_turn: action.payload.player }
    }

    default:
      return state;
  }
}
