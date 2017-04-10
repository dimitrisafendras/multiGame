'use strict';

import {
  MARK_TILE,
  NEW_GAME,
} from './constants'

export const options = {

  markTile:{
    offline: (player, key)=> ({
      type: MARK_TILE,

      payload: {
        player,
        key
      }
    }),
  },

  newGame: {
    offline: (player, gameStyle) => ({
      type: NEW_GAME,

      payload: {
        player,
        gameStyle
      }
    }),
  }
};




