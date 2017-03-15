import figureIs from './figureIs';
import { MAX_COLS, MAX_ROWS } from '../constants';

const checkDirections = (selLineID, selSquareID, squares, x, y, boolBoard)=> {

  let thisFigure;
  let noFigureBetween = true;
  let dirX = x.valueOf();
  let dirY = y.valueOf();

  while((selLineID + x <= MAX_ROWS) && (selSquareID + y <= MAX_COLS) && (noFigureBetween)){

    if(!(squares[selLineID+x]) || !(squares[selLineID + x][selSquareID +y]) ){
      return boolBoard;
    }

    thisFigure = figureIs(squares[selLineID][selSquareID], squares[selLineID + x][selSquareID + y]);

    if(thisFigure === 'EMPTY'){
      boolBoard[selLineID + x][selSquareID + y] = true;
      x += dirX;
      y += dirY;
    }
    else if (thisFigure === 'FOE'){
      boolBoard[selLineID + x][selSquareID + y] = true;
      noFigureBetween = false;
    }
    else if (thisFigure === 'ALLY'){
      noFigureBetween = false;
    }
  }
  return boolBoard;
};

export default checkDirections;
