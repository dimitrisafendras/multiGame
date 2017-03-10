import React from 'react';
import figures from '../modules/constructs';

const Square = ({ squares, boolBoard, selectTile, squareId, lineId })=> {
  if (boolBoard[squareId][lineId]){
    return <div onClick={ () => selectTile(squareId, lineId)} style = { {backgroundColor: 'red'}}>
      {figures(squares[squareId][lineId])}
    </div>
  }
  return <div onClick={ () => selectTile(squareId, lineId)}>
    {figures(squares[squareId][lineId])}
  </div>
};

export default Square;
