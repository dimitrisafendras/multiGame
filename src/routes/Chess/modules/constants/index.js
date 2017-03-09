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
