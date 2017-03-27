import { checkDirections, createBoolBoard } from '../';
import { directions } from '../../constructs';

const moveRook = (selLineID, selSquareID, squares)=> {
  const boolBoard = createBoolBoard();
  for(let vector of directions.rook) {
    checkDirections(selLineID, selSquareID, squares, vector.x, vector.y, boolBoard);
  }
  return boolBoard;
};

export default moveRook;
