import React from 'react';

export const Square = ({ id, squares, markTile, markTileEvent, currentPlayer, victory, gameStyle})=> {

  const clickable = ()=> {
    if (gameStyle === 'pvp' || currentPlayer === 'x') {
      return 'clickable'
    }
  };

  const selectTile = (gameStyle)=> {
    console.log(gameStyle);
    if (!squares[id] && !victory && (gameStyle === 'Opvp')) {
      console.log('aaaaa');
      return markTileEvent(currentPlayer, id);
    }
    else if (!squares[id] && !victory) {
      return markTile(currentPlayer, id);
    }
  };

    return (
      <div onClick={()=> {selectTile()}}>
        {squares[id]}
      </div>
    )

};
