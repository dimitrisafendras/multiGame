import React from 'react';

export const Square = ({ id, squares, markTile, currentPlayer, victory, gameStyle })=> {

  const selectTile = ()=> {
    if ( !squares[id] && !victory ) {
      return  markTile(currentPlayer, id);
    }
  };

  const clickable = ()=> {
    if ( gameStyle == 'pvp' || currentPlayer == 'x' ){
      return 'clickable'
    }
  };

  return (
    <div className={clickable()} onClick={()=>
    {selectTile()}
    }>
      {squares[id]}
    </div>
  )
};
