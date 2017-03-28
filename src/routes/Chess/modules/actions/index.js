import { NEW_GAME, RESET_CHESS, SELECT_TILE, MOVE_TILE, TOGGLE_OFF, SENT_MOVE, CHOOSE_MODE } from '../constants';

export const options = {

  newGame: {
    offline: () => ({
      type: NEW_GAME
    }),
  },

  resetChess: ()=> ({
      type: RESET_CHESS
    }),

  selectTile: (line, col) => ({
    type: SELECT_TILE,
    payload: {line, col}
  }),

  toggleOff: () => ({
    type: TOGGLE_OFF,
  }),

  moveTile: (line, col, selectedTile) => ({
    type: MOVE_TILE,
    payload: {line, col, selectedTile}
  }),
  chooseMode: (mode) => ({
    type: CHOOSE_MODE,
    payload: { mode }
  }),
};
