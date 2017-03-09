import { maxCols } from '../constants';

const selectedATile = (state, { squareId, lineId })=> {
  if(!state.selectedTile[0] && !state.selectedTile[1]) {
    if (!(state.squares[squareId][lineId] === '')) {
      return {...state, selectedTile: [squareId, lineId]}
    }
    return state;
  }

  if (true) {
    let newSquares = state.squares.slice(0, maxCols);
    let sID = state.selectedTile[0];
    let lID = state.selectedTile[1];
    newSquares[squareId][lineId] = state.squares[sID][lID];
    newSquares[sID][lID] = '';
    return {...state, squares: newSquares, selectedTile: [undefined, undefined]}
  }
  return state
};

export default selectedATile;



