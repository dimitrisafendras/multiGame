import figureIs from './figureIs';
import { MAX_COLS, MAX_ROWS } from '../constants';
const checkDirections = (selLineID, selSquareID, squares, x, y, boolBoard)=> {

  let noFigureBetween = true;
  //FIXXXXXXXXXXXXXXXXXXXXx!!!
  let dirX = 0;
  let dirY = 0;
  if (x != 0){
    dirX = x/Math.abs(x);
  }
  if (y != 0){
    dirY = y/Math.abs(y);
  }

  while((selLineID + x <= MAX_ROWS) && (selSquareID + y <= MAX_COLS) && (noFigureBetween)){
    if(!(squares[selLineID+x]) || !(squares[selLineID + x][selSquareID +y]) ){
      return boolBoard;
    }
    if(figureIs(squares[selLineID][selSquareID], squares[selLineID + x][selSquareID + y]) === 'EMPTY'){
      boolBoard[selLineID + x][selSquareID + y] = true;
      x += dirX;
      y += dirY;
      console.log(x,y);
    }
    else if (figureIs(squares[selLineID][selSquareID], squares[selLineID + x][selSquareID + y]) === 'FOE'){
      boolBoard[selLineID + x][selSquareID + y] = true;
      noFigureBetween = false;
    }
    else if (figureIs(squares[selLineID][selSquareID], squares[selLineID + x][selSquareID + y]) === 'ALLY'){
      noFigureBetween = false;
    }
  }
  return boolBoard;
};

export default checkDirections;
