import React from 'react';
import figures from '../modules/constructs';

const Square = ({ squares, selectTile, squareId, lineId })=> {
  return <div onClick={ () => selectTile(squareId, lineId)}>
    {figures(squares[squareId][lineId])}
  </div>
};

export default Square;
