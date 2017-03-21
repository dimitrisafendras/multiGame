import React from 'react';
import { figures } from '../modules/constructs';
import { figureIs, haveSelected } from '../modules/functions';
import { MOVE_TILE, moveTile } from '../modules/constants';
import { chessSocket } from '../../../model-services/server-apis';

const style = {
  moveAble: {
    backgroundColor: 'green',
    opacity: 0.9,
  }
};

const Square = ({ squares, boolBoard, round, victory,
                  mode, selectTile, selectedTile,  moveTile,
                  toggleOff, squareId, lineId })=> {

  const canMove = ()=>{
    if ((boolBoard[lineId][squareId])) return 'moveAble';
    return '';
  };

  const clickTile = ()=> {
    if(!victory){
      if (haveSelected(selectedTile)){
        if (boolBoard[lineId][squareId]){
          if (mode === 'online') return chessSocket.emit('moveTile', {
            type: MOVE_TILE,
            payload: { lineId, squareId, selectedTile }
          });
          return moveTile(lineId, squareId, selectedTile)
        }
        return toggleOff();
      }
      if (figureIs(round, squares[lineId][squareId]) === 'ALLY'){
        return selectTile(lineId, squareId);
      }
    }
  };

  return <div onClick={ ()=> clickTile()} style={style[canMove()]}>
    {figures(squares[lineId][squareId])}
  </div>
};

export default Square;
