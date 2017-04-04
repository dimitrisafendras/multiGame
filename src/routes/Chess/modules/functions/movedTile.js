import { MAX_COLS, DEFAULT_TILE, NEXT_ROUND} from '../constants';
import { assignBoolboardToSquares, createSquare, createBoolBoard } from '../../../../lib/chess';

const movedTile = (state, {line, col, selectedTile})=> {

  let victory = false;
  let newSquares = state.squares.slice(0, MAX_COLS);
  let lID = selectedTile.line;
  let cID = selectedTile.col;

  if (state.squares[line][col].figure === 'King'){
    victory = true;
  }

  const newBoolBoard = createBoolBoard();
  newSquares[line][col] = state.squares[lID][cID];
  newSquares[lID][cID] = createSquare('empty');
  newSquares = assignBoolboardToSquares(newSquares, newBoolBoard);

  return {
    ...state,
    squares: newSquares,
    selectedTile: DEFAULT_TILE,
    round: NEXT_ROUND[state.round],
    victory,
    clickOptions: 'selectTile',
  }
};

export default movedTile;
