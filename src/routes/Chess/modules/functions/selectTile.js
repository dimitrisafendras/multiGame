import moveOptions from '../functions/moveOptions';
import { DEFAULT_TILE } from '../constants';

// FIX
const selectAtile = (state, { lineId, squareId })=> {
  if (!state.selectedTile.line && !state.selectedTile.square) {
    if (!(state.squares[lineId][squareId] === '')) {
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
