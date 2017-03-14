// FIX
import { CREATE_BOOL_BOARD, MAX_ROWS, MAX_COLS } from '../../constants';
import isAlly from '../../functions/isAlly';

const moveKing = ( selLineID, selSquareID, squares )=> {

  const boolBoard = CREATE_BOOL_BOARD();

  for(let targetLineID = 0; targetLineID< MAX_ROWS; targetLineID++){
    for(let targetSquareID = 0; targetSquareID< MAX_COLS; targetSquareID++){
      if(isAlly(selLineID, selSquareID, targetLineID, targetSquareID, squares)){
        if(
          (Math.abs(Math.abs(targetLineID) - Math.abs(selLineID))) <= 1 &&
          Math.abs(Math.abs(targetSquareID) - Math.abs(selSquareID)) <= 1
        ){
          boolBoard[targetLineID][targetSquareID] = true;
        }
      }
    }
  }
  return boolBoard;
};

export default moveKing;
