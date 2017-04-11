'use strict';
import { options } from './actions';
import { emiterOptions } from '../modules/utils/emiter';

//action constants
export const MARK_TILE = 'MARK_TILE';
export const NEW_GAME = 'NEW_GAME';

//action creator constants
export const markTile = options.markTile.offline;
export const newGame = options.newGame.offline;
export const newGameDummy = options.newGameDummy.offline;
export const markTileDummy = options.markTileDummy.offline;

//event creators
export const markTileEvent = emiterOptions.markTile;
export const newGameEvent = emiterOptions.newGame;
