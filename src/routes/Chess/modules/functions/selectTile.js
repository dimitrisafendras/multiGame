import moveOptions from '../functions/moveOptions';

const selectAtile = (state, { lineId, squareId })=> {
  if (!state.selectedTile[0] && !state.selectedTile[1]) {
    if (!(state.squares[lineId][squareId] === '')) {
      let piece = 'move' + state.squares[lineId][squareId].substring(1);
      let newBoolBoard = moveOptions[piece](lineId, squareId, state.squares);
      return {
        ...state,
        selectedTile: [lineId, squareId],
        boolBoard: newBoolBoard
      }
    }
  }
  return state;
};

export default selectAtile;
