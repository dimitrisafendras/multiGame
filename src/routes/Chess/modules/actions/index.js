import { NEW_GAME, RESET_GAME, MOVE_FIGURE, SELECT_TILE, MOVE_TILE, TOGGLE_OFF } from '../constants';

export const options = {

  newGame:{
    offline: ()=>({
      type: NEW_GAME
    }),
  },

  resetGame:{
    offline: ()=> ({
      type: RESET_GAME
    })
  },

  selectTile:{
    offline: (lineId, squareId)=>({
      type: SELECT_TILE,
      payload: {squareId, lineId}
    })
  },
  toggleOff: {
    offline: () => ({
      type: TOGGLE_OFF,
    })
  },

  moveTile:{
    offline: (lineId, squareId)=>({
      type: MOVE_TILE,
      payload: {squareId, lineId}
    })
  },

  moveFigure:{
    offline: (figureId, squareId)=>({
      type: MOVE_FIGURE,
      payload: {figureId, squareId}
    })
  }
};
