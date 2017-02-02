'use strict';

import { MARK_TILE } from '../constants'
import { NEW_GAME } from '../constants'

export const offline = {
  markTile: (player, key) => ({
    type: MARK_TILE,
    payload: {player: player, key: key}
  }),

  newGame: (player, gameStyle)=> ({
    type: NEW_GAME,
    payload: { player: player, gameStyle }
  })
};




