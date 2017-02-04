// import React from 'react';
// import { ticTacToeSocket } from '../../../model-services/server-apis';
//
// export const OnlineSquare = ({ id, squares, markTileOnline, currentPlayer, victory, gameStyle })=> {
//
//   const selectTile = ()=> {
//     if ( !squares[id] && !victory ) {
//       return  markTileOnline(currentPlayer, id);
//     }
//   };
//
//   const clickable = ()=> {
//     if ( gameStyle == 'pvp' || currentPlayer == 'x' ){
//       return 'clickable'
//     }
//   };
//
//   return (
//     <div className={clickable()} onClick={()=>
//     {ticTacToeSocket.emit('markTile', selectTile())}
//     }>
//       {squares[id]}
//     </div>
//   )
// };
