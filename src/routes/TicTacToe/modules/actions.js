'use strict';

import {
  MARK_TILE,
  NEW_GAME,
  NEW_GAME_ONLINE
} from './constants'

export const options = {

  markTile:{
    offline: (player, key)=> ({
      type: MARK_TILE,
      payload: {player: player, key: key}
    }),
  },

  newGame:{
    offline: (player, gameStyle)=> ({
      type: NEW_GAME,
      payload: {player: player, gameStyle}
    }),

    online: (player, gameStyle)=> ({
      type: NEW_GAME_ONLINE,
      payload: {player: player, gameStyle}
    })
  }
};




