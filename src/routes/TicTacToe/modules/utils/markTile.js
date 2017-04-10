import TicTac from '../../../../lib/ticTacToe/tictac';

export const markTile = (state, action)=> {

  let squares = [
    ...state.squares.slice(0, action.payload.key),
    action.payload.player,
    ...state.squares.slice(action.payload.key + 1)
  ];
  return {
    ...state,
    squares: squares,
    victory: TicTac.checkWinner(squares)
  };
};

