'use strict';

import {options} from '../actions';

// action constants
export const NEW_GAME = 'NEW_GAME';
export const RESET_GAME = 'RESET_GAME';
export const MOVE_FIGURE = 'MOVE_FIGURE';
export const SELECT_FIGURE = 'SELECT_FIGURE';

// action creators
export const newGame = options.newGame.offline;
export const resetGame = options.resetGame.offline;
//export const moveFigure = options.moveFigure.offline; //FIX

// initial state
export const initialState = {
  round: 1,
  square: Array(64),
};
