import { figureIs, createBoolBoard } from '../';
import { directions } from '../../constructs';

const PAWN_OPTIONS = {

  b:{
    direction: -1,
    startLine: 6,
  },

  w:{
    direction: 1,
    startLine: 1,
  },
};

const movePawn = (selLineID, selSquareID, squares, round)=> {
  let thisPawn = PAWN_OPTIONS[round.charAt(0)];
  let pawnSide = thisPawn.direction;
  let pawnStartLine = thisPawn.startLine;
  let moveVector = directions.pawn.move.x * pawnSide;
  const boolBoard = createBoolBoard();

  for(let vector of directions.pawn.attack) {
    if (squares[selLineID + vector.x * pawnSide] && squares[selLineID + vector.x * pawnSide][selSquareID + vector.y]){
      if((figureIs(squares[selLineID][selSquareID], squares[selLineID + vector.x * pawnSide][selSquareID + vector.y]) === 'FOE' )) {
        boolBoard[selLineID + vector.x * pawnSide][selSquareID + vector.y] = {canMoveTo: true};
      }
    }
  }

  if (squares[selLineID + moveVector] && squares[selLineID + moveVector][selSquareID]){
    if((figureIs(squares[selLineID][selSquareID], squares[selLineID + moveVector][selSquareID]) === 'EMPTY' )) {
      boolBoard[selLineID + moveVector][selSquareID] = {canMoveTo: true};
      if ((selLineID === pawnStartLine) && (figureIs(squares[selLineID][selSquareID], squares[selLineID + moveVector * 2][selSquareID]) === 'EMPTY' )) {
        boolBoard[selLineID + moveVector * 2][selSquareID] = {canMoveTo: true};
      }
    }
  }
  return boolBoard;
};
export default movePawn;
