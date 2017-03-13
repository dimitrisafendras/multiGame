import { MAX_COLS, CREATE_BOOL_BOARD} from '../constants';
//import { ally, enemy } from '../functions'; //FIX

const moveTile = (state, {lineId, squareId})=> {

  if (true) {
    let newSquares = state.squares.slice(0, MAX_COLS);
    let lID = state.selectedTile[0];
    let sID = state.selectedTile[1];
    newSquares[squareId][lineId] = state.squares[lID][sID];
    newSquares[lID][sID] = '';
    const newBoolBoard = CREATE_BOOL_BOARD();
    return {...state, squares: newSquares, selectedTile: [null, null], boolBoard: newBoolBoard }
  }
};

export default moveTile;



