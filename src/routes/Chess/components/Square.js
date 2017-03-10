import React from 'react';
import figures from '../modules/constructs';
import styles from './styles.scss';

const Square = ({ squares, boolBoard, selectTile, squareId, lineId })=> {
  const moveBoolean = boolBoard[squareId][lineId];
  const canMove = (moveBoolean) => {
    if (moveBoolean) return 'moveable';
    return '';
  };

  return <div onClick={ () => selectTile(squareId, lineId)}>
    <span className = {styles[canMove(moveBoolean)]}>
    {figures(squares[squareId][lineId])}
    </span>
  </div>
};

export default Square;
