import React from 'react';
import { ticTacToeSocket } from '../../../model-services/server-apis';

export const Square = ({ id, squares, markTile, markTileOnline, currentPlayer, victory, gameStyle })=> {

  const selectTile = ()=> {
    if (!squares[id] && !victory) {
      return markTile(currentPlayer, id);
    }
  };

  const selectTileOnline = ()=>{
    if (!squares[id] && !victory) {
      return markTileOnline(currentPlayer, id);
    }
  };

  const clickable = () => {
    if (gameStyle == 'pvp' || gameStyle == 'Opvp' || currentPlayer == 'x') {
      return 'clickable'
    }
  };

  if (gameStyle == 'Opvp'){
    return (
      <div className={clickable()} onClick={()=> {ticTacToeSocket.emit('markTile', selectTileOnline())}}>
        {squares[id]}
      </div>
    )
  }
  else{
    return (
      <div className={clickable()} onClick={() => {selectTile()}}>
        {squares[id]}
      </div>
    )
  }
};
