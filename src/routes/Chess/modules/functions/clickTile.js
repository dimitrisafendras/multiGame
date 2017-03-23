import { figureIs, haveSelected, emiter } from '../modules/functions';

const canMove = ()=>{
  if ((boolBoard[lineId][squareId])) return 'moveAble';
  return '';
};

const clickTile = (victory, canMove )=> {

};

const clickATile = ()=> {
  if(!victory){
    if (haveSelected(selectedTile)){
      if (boolBoard[lineId][squareId]){
        if (mode === 'online') return emiter('moveTile',
          {
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

export default clickTile;
