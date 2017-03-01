'use strict';

import {options} from '../actions';

// action constants
export const NEW_GAME = 'NEW_GAME';
export const RESET_GAME = 'RESET_GAME';
export const MOVE_FIGURE = 'MOVE_FIGURE';

// action creators
export const newGame = options.newGame.offline;
export const resetGame = options.resetGame.offline;
//export const moveFigure = options.moveFigure.offline;

// initial state
export const initialState = {
  round: 1,
};
