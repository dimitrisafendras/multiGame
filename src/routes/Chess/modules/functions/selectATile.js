import { moveOptions, haveSelected, assignBoolboardToSquares } from '../../../../lib/chess';

const selectATile = (state, { line, col }) => {

  if (!haveSelected(state.selectedTile)) {
    if (!(state.squares[line][col].figure === 'empty')) {
      let piece = 'move' + state.squares[line][col].figure;
      let newBoolBoard = moveOptions[piece](line, col, state.squares, state.round);
      let newSquares = assignBoolboardToSquares(state.squares, newBoolBoard);

      return {
        ...state,
        selectedTile: {
          line: line,
          col: col,
        },
        squares: newSquares,
        clickOptions:'moveTile',
      }
    }
  }
  return state;
};

export default selectATile;
