'use strict';

import {options} from '../actions';
import  squares  from '../functions'

// action constants
export const NEW_GAME = 'NEW_GAME';
export const RESET_GAME = 'RESET_GAME';
export const MOVE_FIGURE = 'MOVE_FIGURE';
export const SELECT_TILE = 'SELECT_TILE';

// action creators
export const newGame = options.newGame.offline;
export const selectTile = options.selectTile.offline;

export const MAX_ROWS = 8;
export const MAX_COLS = 8;


export const INITIAL_BOOL_BOARD = (() => {
  const squares = new Array(8);

  for (let i = 0; i < 8; i++) {
    squares[i] = new Array(8);
    for (let j = 0; j < 8; j++) {
      squares[i][j] = false;
    }
  }
  return squares;
})();
console.log(INITIAL_BOOL_BOARD);
