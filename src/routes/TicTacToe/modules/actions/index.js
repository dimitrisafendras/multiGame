'use strict';

const MARK_TILE = 'MARK_TILE';
const NEW_GAME = 'NEW_GAME';
const UNDO_MOVE = 'UNDO_MOVE';

export const markTile = (player, key)=> ({
    type: MARK_TILE,
    payload: { player: player, key: key }
});

export const newGame = (player, gameStyle)=> ({
    type: NEW_GAME,
    payload: { player: player, gameStyle }
});


