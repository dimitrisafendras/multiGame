import React from 'react';
import figures from '../modules/constructs';

const style = {
  moveAble: {
    backgroundColor: 'red',
    opacity: 0.9,
  }
};

const Square = ({ squares, boolBoard, selectedTile, selectTile, moveTile, toggleOff, squareId, lineId })=> {

  const haveSelected = () => {
    if (selectedTile[0] || (selectedTile[0] === 0)) {
      if (boolBoard[squareId][lineId])  {
        return moveTile(squareId, lineId)
      }

      return toggleOff();
  }
    return selectTile(squareId,lineId);
  };

  return <div onClick={ () => haveSelected()}
       style={style[canMove(boolBoard[squareId][lineId])]}>
    {figures(squares[squareId][lineId])}
  </div>
};

const canMove = (moveBoolean) => {
  if (moveBoolean) return 'moveAble';
  return '';
};



export default Square;
