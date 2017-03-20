import { CREATE_BOOL_BOARD } from '../../constants';
import { figureIs } from '../';
import { directions } from '../../constructs';

const moveKing = (selLineID, selSquareID, squares)=> {
  const boolBoard = CREATE_BOOL_BOARD();
  for(let vector of directions.queenKing) {
    if (squares[selLineID + vector.x] && squares[selLineID + vector.x][selSquareID + vector.y]){
      if(!(figureIs(squares[selLineID][selSquareID], squares[selLineID + vector.x][selSquareID + vector.y]) === 'ALLY' )) {
        boolBoard[selLineID + vector.x][selSquareID + vector.y] = true;
      }
    }
  }
  return boolBoard;
};

export default moveKing;
