import checkDirections from '../checkDirections';
import { CREATE_BOOL_BOARD } from '../../constants';
import { directions } from '../../constructs';

const moveQueen = (selLineID, selSquareID, squares)=> {
  const boolBoard = CREATE_BOOL_BOARD();
  for(let vector of directions.queenKing) {
    checkDirections(selLineID, selSquareID, squares, vector.x, vector.y, boolBoard);
  }
  return boolBoard;
};

export default moveQueen;
