import moveOptions from '../functions/moveOptions';

const selectAtile = (state, { squareId, lineId })=> {
  if (!state.selectedTile[0] && !state.selectedTile[1]) {
    if (!(state.squares[squareId][lineId] === '')) {
      let piece = 'move' + state.squares[squareId][lineId].substring(1);
      let newBoolBoard = moveOptions[piece](squareId, lineId, state.squares);
      return {
        ...state,
        selectedTile: [squareId, lineId],
        boolBoard: newBoolBoard
      }
    }
  }
  return state;
};

export default selectAtile;
