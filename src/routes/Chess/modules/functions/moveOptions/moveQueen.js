import checkDirections from '../checkDirections';
import { CREATE_BOOL_BOARD } from '../../constants';

const moveQueen = (selLineID, selSquareID, squares)=> {
  const boolBoard = CREATE_BOOL_BOARD();
  for (let i = -1 ; i<= 1 ; i++){
    for (let j = -1 ; j<=1 ; j++){
      checkDirections(selLineID, selSquareID, squares, i, j, boolBoard);
    }
  }
  return boolBoard;

};

export default moveQueen;
