import figureIs from './figureIs';
import { MAX_COLS, MAX_ROWS } from '../constants';

const checkDirections = (selLineID, selSquareID, squares, x, y, boolBoard)=> {

  let targetLine = squares[selLineID+x];
  let selectSquare = squares[selLineID][selSquareID];
  let targetSquare = squares[selLineID + x][selSquareID + y];
  let thisFigure = figureIs(selectSquare, targetSquare);
  let noFigureBetween = true;
  let dirX = x.valueOf();
  let dirY = y.valueOf();

  while((selLineID + x <= MAX_ROWS) && (selSquareID + y <= MAX_COLS) && (noFigureBetween)){
    if(!(targetLine) || !(targetSquare) ){
      return boolBoard;
    }

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
