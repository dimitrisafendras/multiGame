import checkDirections from '../checkDirections';
import { CREATE_BOOL_BOARD } from '../../constants';
import { directions } from '../../constructs';

const moveBishop = (selLineID, selSquareID, squares)=> {
  const boolBoard = CREATE_BOOL_BOARD();
  for(let vector of directions.bishop) {
      checkDirections(selLineID, selSquareID, squares, vector.x, vector.y, boolBoard);
  }
  return boolBoard;
};

export default moveBishop;
