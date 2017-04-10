'use strict';
import { options } from './actions';

//action constants
export const MARK_TILE = 'MARK_TILE';
export const NEW_GAME = 'NEW_GAME';
export const MARK_TILE_ONLINE = 'MARK_TILE_ONLINE';
export const NEW_GAME_ONLINE = 'NEW_GAME_ONLINE';

//action creator constants
export const markTile = options.markTile.offline;
export const newGame = options.newGame.offline;
export const markTileOnline = options.markTile.online;
export const newGameOnline = options.newGame.online;
