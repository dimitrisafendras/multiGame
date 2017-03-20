'use strict';
import squares from '../functions/boardInitializer';
import {options} from '../actions';

// action constants
export const NEW_GAME = 'NEW_GAME';
export const RESET_GAME = 'RESET_GAME';
export const SELECT_TILE = 'SELECT_TILE';
export const MOVE_TILE = 'MOVE_TILE';
export const TOGGLE_OFF = 'TOGGLE_OFF';

// action creators
export const newGame = options.newGame.offline;
const selectTile = options.selectTile.offline;
const moveTile = options.moveTile.offline;
const toggleOff = options.toggleOff.offline;

//other consts
export const selectOptions = {
  moveTile,
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

export const PAWN_OPTIONS = {
  b:{
    direction: -1,
    startLine: 6,
  },
  w:{
    direction: 1,
    startLine: 1,
  },
};

//boolean board initializer
export const CREATE_BOOL_BOARD = (()=> {

  const squares = new Array(MAX_ROWS);

  for (let i = 0; i < MAX_ROWS; i++){
    squares[i] = new Array(MAX_COLS);
    for (let j = 0; j < MAX_COLS; j++){
      squares[i][j] = false;
    }
  }
  return squares;
});

//initial state
export const initialState = {
  round: 'white',
  squares,
  selectedTile: DEFAULT_TILE,
  boolBoard: CREATE_BOOL_BOARD(),
  victory: false,
};

