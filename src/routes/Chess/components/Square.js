import React from 'react';
import figures from '../modules/figures';

const style = {
  backgroundColor: 'green',
  opacity: 0.9,
};

const Square = ({
  square, line, col, mode, playerColor,
  selectedTile, clickOptions, round,
  selectTile,  moveTileOnline, moveTileOffline, toggleOff
})=> {

  const moveTile = {
    online: moveTileOnline,
    offline: moveTileOffline,
  };

  if (mode === 'offline' || playerColor === round) {
    if (square.color === round && clickOptions === 'selectTile') {
      return <div onClick={ ()=> selectTile(line, col) }>
      {figures(square.figure, square.color)}
      </div>
    }

    if ((clickOptions === 'moveTile') && square.canMoveTo){
       return <div onClick={ ()=> moveTile[mode](line, col, selectedTile) } style = {style}>
      {figures(square.figure, square.color)}
      </div>
    }

    if ((clickOptions === 'moveTile') && !square.canMoveTo){
      return <div onClick={ ()=> toggleOff() }>
      {figures(square.figure, square.color)}
      </div>
    }
  }
    return <div>{figures(square.figure, square.color)}</div>;
};

export default Square;
