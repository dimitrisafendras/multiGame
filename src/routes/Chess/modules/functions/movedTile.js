import { MAX_COLS, CREATE_BOOL_BOARD, DEFAULT_TILE, NEXT_ROUND} from '../constants';
import { assignBoolboardToSquares, createSquare } from '../../../../lib/chess';

const movedTile = (state, {lineId, squareId, selectedTile})=> {
    let victory = false;
    let newSquares = state.squares.slice(0, MAX_COLS);
    let lID = selectedTile.line;
    let sID = selectedTile.square;
    if (state.squares[lineId][squareId].substring(1) === 'King'){
      victory = state.round;
    }
    newSquares[lineId][squareId] = state.squares[lID][sID];
    newSquares[lID][sID] = 'empty';
    const newBoolBoard = CREATE_BOOL_BOARD();

    return {
      ...state, squares: newSquares,
      selectedTile: DEFAULT_TILE,
      boolBoard: newBoolBoard,
      round: NEXT_ROUND[state.round],
      victory,
      clickOptions: 'selectTile',
    }
};

export default movedTile;
