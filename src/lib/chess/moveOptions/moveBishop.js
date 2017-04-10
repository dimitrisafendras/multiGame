import { checkDirections, createBoolBoard } from '../';
import { directions } from '../../constructsForChess';

const moveBishop = (selLineID, selSquareID, squares)=> {
  const boolBoard = createBoolBoard();
  for(let vector of directions.bishop) {
      checkDirections(selLineID, selSquareID, squares, vector.x, vector.y, boolBoard);
  }
  return boolBoard;
};

export default moveBishop;
