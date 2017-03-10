import { MAX_COLS } from '../constants';
import { ally, enemy } from '../functions'
//FIX

const selectedATile = (state, { squareId, lineId })=> {
  if(!state.selectedTile[0] && !state.selectedTile[1]) {
    if (!(state.squares[squareId][lineId] === '') && ally(squareId, lineId)) {
      return {...state, selectedTile: [squareId, lineId]}
    }
    return state;
  }

  if (true) {
    let newSquares = state.squares.slice(0, MAX_COLS);
    let sID = state.selectedTile[0];
    let lID = state.selectedTile[1];
    newSquares[squareId][lineId] = state.squares[sID][lID];
    newSquares[sID][lID] = '';
    return {...state, squares: newSquares, selectedTile: [null, null]}
  }
  return state
};

export default selectedATile;



