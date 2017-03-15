import moveOptions from '../functions/moveOptions';
import { DEFAULT_TILE } from '../constants';
import haveSelected from '../functions/haveSelected';
// FIX

const selectAtile = (state, { lineId, squareId })=> {
  if (!haveSelected(state.selectedTile)) {
    if (!(state.squares[lineId][squareId] === 'empty')) {
      let piece = 'move' + state.squares[lineId][squareId].substring(1);
      let newBoolBoard = moveOptions[piece](lineId, squareId, state.squares);
      return {
        ...state,
        selectedTile: {
          line: lineId,
          square: squareId
        },
        boolBoard: newBoolBoard
      }
    }
  }
  return state;
};

export default selectAtile;
