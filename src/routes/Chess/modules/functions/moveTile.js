import { MAX_COLS, CREATE_BOOL_BOARD, DEFAULT_TILE} from '../constants';
//import { ally, enemy } from '../functions'; //FIX

const moveTile = (state, {lineId, squareId})=> {

  if (true) {
    let newSquares = state.squares.slice(0, MAX_COLS);
    let lID = state.selectedTile.line;
    let sID = state.selectedTile.square;
    newSquares[lineId][squareId] = state.squares[lID][sID];
    newSquares[lID][sID] = 'empty';
    const newBoolBoard = CREATE_BOOL_BOARD();

    return {
      ...state, squares: newSquares,
      selectedTile: DEFAULT_TILE,
      boolBoard: newBoolBoard }
  }
};

export default moveTile;
