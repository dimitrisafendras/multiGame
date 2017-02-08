import React from 'react';
import { onlineMode } from '../modules/functions';

export const Square = ({ id, squares, markTile, markTileOnline, currentPlayer, victory, gameStyle })=> {

  const clickable = () => {
    if (gameStyle == 'pvp' || currentPlayer == 'x') {
      return 'clickable'
    }
  };

  const selectTile = (gameStyle)=> {
    if (!squares[id] && !victory && gameStyle == 'Opvp') {
      return markTileOnline(currentPlayer, id);
    }
    else if (!squares[id] && !victory) {
      return markTile(currentPlayer, id);
    }
  };

  if (gameStyle == 'Opvp'){
    return (
      <div className={clickable()} onClick={()=>
      { onlineMode('markTile', selectTile(gameStyle)) }}>
        {squares[id]}
      </div>
    )
  }
  else{
    return (
      <div className={clickable()} onClick={()=> { selectTile() }}>
        {squares[id]}
      </div>
    )
  }
};
