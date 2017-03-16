import { PAWN_OPTIONS, CREATE_BOOL_BOARD } from '../../constants'
import figureIs from '../figureIs';


const movePawn = (selLineID, selSquareID, squares)=> {
  let boolBoard = CREATE_BOOL_BOARD();
  let thisPawnOptions = PAWN_OPTIONS[squares[selLineID][selSquareID].charAt(0)];

  if(
    figureIs(
      squares[selLineID][selSquareID],
      squares[selLineID + thisPawnOptions.direction][selSquareID]
    ) === 'EMPTY'
  ){
    boolBoard[selLineID + thisPawnOptions.direction][selSquareID] = true;
    if(
      (thisPawnOptions.startLine === selLineID)
      && (
      figureIs(
        squares[selLineID][selSquareID],
        squares[selLineID + (2 * thisPawnOptions.direction)][selSquareID]
      ) === 'EMPTY')
    ){
      boolBoard[selLineID + (2 * thisPawnOptions.direction)][selSquareID] = true;
    }
  }
  if (
    (figureIs(
        squares[selLineID][selSquareID],
          squares[selLineID + thisPawnOptions.direction][selSquareID + 1]
      ) === 'FOE'
    )
  ){
    boolBoard[selLineID + (thisPawnOptions.direction)][selSquareID + 1] = true;
  }
  if (
    (figureIs(
        squares[selLineID][selSquareID],
          squares[selLineID + thisPawnOptions.direction][selSquareID - 1]
      ) === 'FOE'
    )
  ){
    boolBoard[selLineID + (thisPawnOptions.direction)][selSquareID - 1] = true;
  }

  return boolBoard;
};

export default movePawn;
