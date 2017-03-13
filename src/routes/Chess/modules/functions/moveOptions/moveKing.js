// FIX
import { CREATE_BOOL_BOARD, MAX_ROWS, MAX_COLS } from '../../constants'

const moveKing = ( selLineID, selSquareID, squares )=> {
  const boolBoard = CREATE_BOOL_BOARD();
  for( let i = 0; i< MAX_ROWS; i++){
    for( let j = 0; j< MAX_COLS; j++){
      if((squares[selLineID][selSquareID].charAt(0) != squares[i][j].charAt(0)) ){
        if(
          (Math.abs(Math.abs(i) - Math.abs(selLineID))) <= 1 &&
          Math.abs(Math.abs(j) - Math.abs(selSquareID)) <= 1
        ){
          console.log(squares[selLineID][selSquareID].charAt(0),squares[j][i].charAt(0));
          boolBoard[i][j] = true;
        }
      }
    }
  }
  return boolBoard;
};

export default moveKing;
