import React from 'react'

const Square = ({ id, squares, markTile, currentPlayer, victory })=> {
  return (
    <div>
      {squares[id]}
    </div>
  )
};

export default Square;
