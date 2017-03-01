import { NEW_GAME, RESET_GAME, MOVE_FIGURE } from '../constants';

export const options = {

  newGame:{
    offline: ()=>({
      type: NEW_GAME
    }),
  },

  resetGame:{
    offline: ()=>({
      type: RESET_GAME
    }),

    moveFigure:{
      offline: (squareID, figureID)=>({
        type: MOVE_FIGURE,
        payload: {squareID, figureID}
      })
    }
  }
};
