'use strict';
import { offline } from '../actions';

//action constants
export const MARK_TILE = 'MARK_TILE';
export const NEW_GAME = 'NEW_GAME';
export const UNDO_MOVE = 'UNDO_MOVE';

//action creator constants
export const markTile = offline.markTile;
export const newGame = offline.newGame;
