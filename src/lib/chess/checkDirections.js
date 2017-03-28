import { figureIs } from './';

const checkDirections = (selLineID, selSquareID, squares, x, y, boolBoard, max_rows, max_cols)=> {

  let thisFigure;
  let noFigureBetween = true;
  let dirX = x.valueOf();
  let dirY = y.valueOf();

  while(squares[selLineID+x] && squares[selLineID + x][selSquareID +y] && (noFigureBetween)){

    thisFigure = figureIs(squares[selLineID][selSquareID], squares[selLineID + x][selSquareID + y]);

    if(thisFigure === 'EMPTY'){
      boolBoard[selLineID + x][selSquareID + y] = {canMoveTo: true};
      x += dirX;
      y += dirY;
    }
    else if (thisFigure === 'FOE'){
      boolBoard[selLineID + x][selSquareID + y] = {canMoveTo: true};
      noFigureBetween = false;
    }
    else if (thisFigure === 'ALLY'){
      noFigureBetween = false;
    }
  }
  return boolBoard;
};

export default checkDirections;
