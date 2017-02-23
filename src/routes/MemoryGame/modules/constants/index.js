'use strict';
import {options} from '../actions'
import {getCards} from '../functions'

// Action constants
export const FLIP_CARD = 'FLIP_CARD';
export const RESTART_GAME = 'RESTART_GAME';

// Action creators
export const flipCard = options.flipCard.offline;
export const restart = options.restart.offline;

// other constants
export const getCardsOnline = getCards;

// initial state
export const initialState = {
  round: 1,
  guess1: null,
  guess2: null,
  cards: getCardsOnline(),
};
