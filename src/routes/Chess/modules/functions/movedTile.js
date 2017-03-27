import { MAX_COLS, DEFAULT_TILE, NEXT_ROUND} from '../constants';
import { assignBoolboardToSquares, createSquare, createBoolBoard } from '../../../../lib/chess';

const movedTile = (state, {lineId, squareId, selectedTile})=> {

  let victory = false;
  let newSquares = state.squares.slice(0, MAX_COLS);
  let lID = selectedTile.line;
  let sID = selectedTile.square;

  if (state.squares[lineId][squareId].figure.substring(5) === 'King'){
    victory = state.round;
  }

  const newBoolBoard = createBoolBoard();
  newSquares[lineId][squareId] = state.squares[lID][sID];
  newSquares[lID][sID] = createSquare('empty');
  newSquares = assignBoolboardToSquares(newSquares,newBoolBoard);

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
