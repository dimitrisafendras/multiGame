import { NEW_GAME, RESET_GAME, SELECT_TILE, MOVE_TILE, TOGGLE_OFF , SENT_MOVE } from '../constants';
import { emiter } from '../functions'

export const options = {

  newGame: {
    offline: () => ({
      type: NEW_GAME
    }),
  },

  resetGame: {
    offline: () => ({
      type: RESET_GAME
    })
  },

  selectTile: (lineId, squareId) => ({
    type: SELECT_TILE,
    payload: {lineId, squareId}
  }),

  toggleOff: () => ({
    type: TOGGLE_OFF,
  }),

  moveTile: (lineId, squareId, selectedTile) => ({
    type: MOVE_TILE,
    payload: {lineId, squareId, selectedTile}
  })
};

