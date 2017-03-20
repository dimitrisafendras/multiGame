import React from 'react';
import { figures } from '../modules/constructs';
import { figureIs, haveSelected } from '../modules/functions';

const style = {
  moveAble: {
    backgroundColor: 'red',
    opacity: 0.9,
  }
};

const Square = ({ squares, boolBoard, round, victory, selectedTile, selectTile, moveTile, toggleOff, squareId, lineId })=> {

  const canMove = ()=> {
    if ((boolBoard[lineId][squareId])) return 'moveAble';
    return '';
  };

  const clickTile = ()=> {
    if(!victory){
      if (haveSelected(selectedTile)) {
        if (boolBoard[lineId][squareId]) {
          return moveTile(lineId, squareId)
        }
        return toggleOff();
      }
      if (figureIs(round, squares[lineId][squareId]) === 'ALLY'){
        return selectTile(lineId, squareId);
      }
    }
  };

  return <div onClick={ ()=> clickTile()} style={style[canMove()]}>
    {figures(squares[lineId][squareId])}
  </div>
};

export default Square;
