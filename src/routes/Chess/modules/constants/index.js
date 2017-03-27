'use strict';
import squares from '../../../../lib/chess/boardInitializer';
import {options} from '../actions';
import { moveTileOnline } from '../functions/emiter';

// action constants
export const NEW_GAME = 'NEW_GAME';
export const RESET_GAME = 'RESET_GAME';
export const SELECT_TILE = 'SELECT_TILE';
export const MOVE_TILE = 'MOVE_TILE';
export const TOGGLE_OFF = 'TOGGLE_OFF';
export const SENT_MOVE = 'SENT_MOVE';
// action creators
export const newGame = options.newGame;
export const selectTile = options.selectTile;
export const moveTileOffline = options.moveTile;
export const toggleOff = options.toggleOff;

//other consts
export const selectOptions = {
  moveTileOnline,
  moveTileOffline,
  selectTile,
  toggleOff,
};

export const MAX_ROWS = 8;
export const MAX_COLS = 8;
export const DEFAULT_TILE = {};
export const NEXT_ROUND = {
  white: 'black',
  black: 'white',
};





