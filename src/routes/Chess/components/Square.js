import React from 'react';
import figures from '../modules/constructs';
import { DEFAULT_TILE } from '../modules/constants';

const style = {
  moveAble: {
    backgroundColor: 'red',
    opacity: 0.9,
  }
};

const Square = ({ squares, boolBoard, selectedTile, selectTile, moveTile, toggleOff, squareId, lineId })=> {

  const clickTile = () => {

    if (haveSelected(selectedTile)) {
      console.log(boolBoard);
      if (boolBoard[lineId][squareId])  {
        return moveTile(lineId, squareId)
      }

      return toggleOff();
  }

    return selectTile(lineId, squareId);
  };

  return <div onClick={ () => clickTile()}
       style={style[canMove(boolBoard[lineId][squareId])]}>
    {figures(squares[lineId][squareId])}
  </div>
};

const canMove = (moveBoolean) => {
  if (moveBoolean) return 'moveAble';
  return '';
};



export default Square;
