import { CREATE_BOOL_BOARD } from '../../constants';
import figureIs from '../figureIs';

const moveKnight = (selLineID, selSquareID, squares)=> {

  const boolBoard = CREATE_BOOL_BOARD();
  for(let i = -1 ; i<= 1 ; i+=2) {
    for (let j = -1; j <= 1; j+=2) {
      if (
        (squares[selLineID + i * 2]) && (squares[selLineID + i * 2][selSquareID + j])
        && !(figureIs(squares[selLineID][selSquareID],squares[selLineID + i * 2][selSquareID + j]) === 'ALLY')
      ) {
        boolBoard[selLineID + i * 2][selSquareID + j] = true;
      }
      if (
        (squares[selLineID + i]) && (squares[selLineID + i][selSquareID + j * 2])
        && !(figureIs(squares[selLineID][selSquareID],squares[selLineID + i][selSquareID + j * 2]) === 'ALLY')
      ) {
        boolBoard[selLineID + i][selSquareID + j * 2] = true;
      }
    }
  }

  return boolBoard;
};

export default moveKnight;

