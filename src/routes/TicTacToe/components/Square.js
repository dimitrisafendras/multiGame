import React from 'react';
import { onlineMode } from '../modules/utils';

export const Square = ({ id, squares, markTile, currentPlayer, victory, gameStyle})=> {

  const clickable = ()=> {
    if (gameStyle === 'pvp' || currentPlayer === 'x') {
      return 'clickable'
    }
  };

  const selectTile = (gameStyle)=> {
    if (!squares[id] && !victory && gameStyle === 'Opvp') {
      return markTile(currentPlayer, id);
    }
    else if (!squares[id] && !victory) {
      return markTile(currentPlayer, id);
    }
  };

  if (gameStyle === 'Opvp'){
    return (
      <div className={clickable()} onClick={()=>
      { onlineMode('markTile', selectTile(gameStyle)) }}>
        {squares[id]}
      </div>
    )
  }
  else{
    return (
      <div onClick={()=> {selectTile() }}>
        {squares[id]}
      </div>
    )
  }

};
