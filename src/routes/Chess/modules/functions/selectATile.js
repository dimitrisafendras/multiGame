import { moveOptions, haveSelected } from '../functions';
import assignBoolboardToSquares from '../../../../lib/chess/assignBoolboardToSquares';

const selectATile = (state, { lineId, squareId })=> {
  if (!haveSelected(state.selectedTile)) {
    if (!(state.squares[lineId][squareId].figure === 'empty')) {
      let piece = 'move' + state.squares[lineId][squareId].figure;
      let newBoolBoard = moveOptions[piece](lineId, squareId, state.squares, state.round);
      let newSquares = assignBoolboardToSquares(state.squares, newBoolBoard);


      return {
        ...state,
        selectedTile: {
          line: lineId,
          square: squareId,
        },
        squares: newSquares,
        clickOptions:'moveTile',
      }
    }
  }
  return state;
};

export default selectATile;
