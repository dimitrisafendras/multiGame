import { CREATE_BOOL_BOARD, PAWN_OPTIONS } from '../../constants';
import { figureIs } from '../';
import { directions } from '../../constructs';

const movePawn = (selLineID, selSquareID, squares, round)=> {
  let thisPawn = PAWN_OPTIONS[round.charAt(0)];
  let pawnSide = thisPawn.direction;
  let pawnStartLine = thisPawn.startLine;
  let moveVector = directions.pawn.move.x * pawnSide;
  const boolBoard = CREATE_BOOL_BOARD();

  for(let vector of directions.pawn.attack) {
    if (squares[selLineID + vector.x * pawnSide] && squares[selLineID + vector.x * pawnSide][selSquareID + vector.y]){
      if((figureIs(squares[selLineID][selSquareID], squares[selLineID + vector.x * pawnSide][selSquareID + vector.y]) === 'FOE' )) {
        boolBoard[selLineID + vector.x * pawnSide][selSquareID + vector.y] = true;
      }
    }
  }

  if (squares[selLineID + moveVector] && squares[selLineID + moveVector][selSquareID]){
    if((figureIs(squares[selLineID][selSquareID], squares[selLineID + moveVector][selSquareID]) === 'EMPTY' )) {
      boolBoard[selLineID + moveVector][selSquareID] = true;
    }
    if(selLineID === pawnStartLine){
      if((figureIs(squares[selLineID][selSquareID], squares[selLineID + moveVector * 2][selSquareID]) === 'EMPTY' )) {
        boolBoard[selLineID + moveVector * 2][selSquareID] = true;
      }
    }
  }
  return boolBoard;
};
export default movePawn;
