
import { CREATE_BOOL_BOARD, PAWN_OPTIONS } from '../../constants';
import figureIs from '../figureIs';
import { directions } from '../../constructs';

const movePawn = (selLineID, selSquareID, squares, round)=> {
  let thisPawn = PAWN_OPTIONS[round.charAt(0)];
  let pawnSide = thisPawn.direction;
  let pawnStartLine = thisPawn.startLine;

  const boolBoard = CREATE_BOOL_BOARD();
  for(let vector of directions.pawn.attack) {
    if (squares[selLineID + vector.x * pawnSide] && squares[selLineID + vector.x * pawnSide][selSquareID + vector.y]){
      if((figureIs(squares[selLineID][selSquareID], squares[selLineID + vector.x * pawnSide][selSquareID + vector.y]) === 'FOE' )) {
        boolBoard[selLineID + vector.x * pawnSide][selSquareID + vector.y] = true;
      }
    }
  }

  for(let vector of directions.pawn.move) {
    if (squares[selLineID + vector.x * pawnSide] && squares[selLineID + vector.x * pawnSide][selSquareID + vector.y]){
      if((figureIs(squares[selLineID][selSquareID], squares[selLineID + vector.x * pawnSide][selSquareID + vector.y]) === 'EMPTY' )) {
        boolBoard[selLineID + vector.x * pawnSide][selSquareID + vector.y] = true;
      }
      if(selLineID === pawnStartLine){
        if((figureIs(squares[selLineID][selSquareID], squares[selLineID + vector.x * pawnSide * 2][selSquareID + vector.y]) === 'EMPTY' )) {
          boolBoard[selLineID + vector.x * pawnSide * 2][selSquareID + vector.y] = true;
        }
      }
    }
  }
  return boolBoard;
};
export default movePawn;
