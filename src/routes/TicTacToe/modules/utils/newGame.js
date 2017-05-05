export const newGame = (state, initialState, action)=> {

  let gameStyle = {
    gameStyle: action.payload.gameStyle
  };

  return {
    ...state,
    ...initialState,
    ...gameStyle
  };
};
