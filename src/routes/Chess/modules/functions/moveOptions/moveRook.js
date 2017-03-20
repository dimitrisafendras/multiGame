import { checkDirections } from '../';
import { CREATE_BOOL_BOARD } from '../../constants';
import { directions } from '../../constructs';

const moveRook = (selLineID, selSquareID, squares)=> {
  const boolBoard = CREATE_BOOL_BOARD();
  for(let vector of directions.rook) {
    checkDirections(selLineID, selSquareID, squares, vector.x, vector.y, boolBoard);
  }
  return boolBoard;
};

export default moveRook;
