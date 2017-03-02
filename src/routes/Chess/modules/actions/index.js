import { NEW_GAME, RESET_GAME, MOVE_FIGURE, SELECT_FIGURE } from '../constants';

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

  selectFigure:{
    offline: (squareID, figureID)=>({
      type: SELECT_FIGURE,
      payload: {squareID, figureID}
    })
  },

  moveFigure:{
    offline: (squareID, figureID)=>({
      type: MOVE_FIGURE,
      payload: {squareID, figureID}
    })
  }
};
