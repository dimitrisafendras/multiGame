import React from 'react';
import  figures  from '../modules/figures';

const style = {
    backgroundColor: 'green',
    opacity: 0.9,
};

const Square = ({
  square, line, col,
  selectedTile, clickOptions, victory, round,
  selectTile,  moveTile, toggleOff
})=> {

  if (victory){
    return <div>
      {figures(square.figure, square.color)}
    </div>
  }

  if (!square.canMoveTo && (clickOptions === 'moveTile'))
  {
    return <div onClick={ ()=> toggleOff()}>
      {figures(square.figure, square.color)}
    </div>
  }

  if(square.canMoveTo && clickOptions === 'moveTile') {
    return <div onClick={ ()=> moveTile(line, col, selectedTile) } style={style}>
      {figures(square.figure, square.color)}
    </div>
  }

  if(clickOptions === 'selectTile' &&  (square.color === round)) {
    return <div onClick={ ()=> selectTile(line, col, selectedTile) }>
      {figures(square.figure, square.color)}
    </div>
  }
  return <div>{figures(square.figure, square.color)}</div>
};

export default Square;
