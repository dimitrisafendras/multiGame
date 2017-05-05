import { figureIs, createBoolBoard } from '../';
import { directions } from '../../constructsForChess';

const moveKing = (selLineID, selSquareID, squares)=> {
  const boolBoard = createBoolBoard();
  for(let vector of directions.queenKing) {
    if (squares[selLineID + vector.x] && squares[selLineID + vector.x][selSquareID + vector.y]){
      if(!(figureIs(squares[selLineID][selSquareID], squares[selLineID + vector.x][selSquareID + vector.y]) === 'ALLY' )) {
        boolBoard[selLineID + vector.x][selSquareID + vector.y] = {canMoveTo: true};
      }
    }
  }
  return boolBoard;
};

export default moveKing;
