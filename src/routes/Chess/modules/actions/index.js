import { NEW_GAME, RESET_GAME, MOVE_FIGURE, SELECT_TILE, MOVE_TILE } from '../constants';

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
    offline: (squareId, lineId)=>({
      type: SELECT_TILE,
      payload: {squareId, lineId}
    })
  },

  moveTile:{
    offline: (squareId, lineId)=>({
      type: MOVE_TILE,
      payload: {squareId, lineId}
    })
  },

  moveFigure:{
    offline: (squareID, figureID)=>({
      type: MOVE_FIGURE,
      payload: {squareID, figureID}
    })
  }
};
