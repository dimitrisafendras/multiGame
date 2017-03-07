import React from 'react';
import figures from '../modules/constructs';

const Square = ({ squareId, lineId, squares, currentPlayer, victory })=> {
  if (!squares[squareId][lineId]){
    return <div></div>
  }
  return figures(squares[squareId][lineId]);
};

export default Square;
