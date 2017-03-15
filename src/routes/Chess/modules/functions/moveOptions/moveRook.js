import checkDirections from '../checkDirections';
import { CREATE_BOOL_BOARD } from '../../constants';

const moveRook = (selLineID, selSquareID, squares)=> {
  const boolBoard = CREATE_BOOL_BOARD();
  checkDirections(selLineID, selSquareID, squares, 1, 0, boolBoard);
  checkDirections(selLineID, selSquareID, squares, 0, 1, boolBoard);
  checkDirections(selLineID, selSquareID, squares, -1, 0, boolBoard);
  checkDirections(selLineID, selSquareID, squares, 0, -1, boolBoard);

  return boolBoard;

};

export default moveRook;
