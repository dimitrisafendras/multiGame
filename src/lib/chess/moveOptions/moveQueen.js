import { checkDirections, createBoolBoard } from '../';
import { directions } from '../../constructsForChess';

const moveQueen = (selLineID, selSquareID, squares)=> {
  const boolBoard = createBoolBoard();
  for(let vector of directions.queenKing) {
    checkDirections(selLineID, selSquareID, squares, vector.x, vector.y, boolBoard);
  }
  return boolBoard;
};

export default moveQueen;
