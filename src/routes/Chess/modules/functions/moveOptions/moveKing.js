// FIX
import { INITIAL_BOOL_BOARD } from '../../constants'
//  tLineID = target line ID
let boolBoard = INITIAL_BOOL_BOARD;
console.log(boolBoard);
const moveKing = ( selLineID, selSquareID, squares )=> {
  for( let [i, line] of squares.entries()){
    for( let [j, square] of line.entries()){
      if(true){
        if(
          (Math.abs(Math.abs(i) - Math.abs(selLineID))) <= 1 &&
          Math.abs(Math.abs(j) - Math.abs(selSquareID)) <= 1
        ){
          boolBoard[i][j] = true;
        }
      }
    }
  }
  console.log(boolBoard[1][3], boolBoard[3][1]);
  return boolBoard;
};

export default moveKing;
