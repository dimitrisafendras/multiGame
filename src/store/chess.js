import { SELECT_TILE, MOVE_TILE, TOGGLE_OFF, initialState } from '../routes/Chess/modules/constants';
import moveTile from '../routes/Chess/modules/functions/moveTile';
import selectATile from '../routes/Chess/modules/functions/selectTile';
import toggleOff from '../routes/Chess/modules/functions/toggleOff';

export default function chess(state = initialState, action) {
  switch (action.type){

    case SELECT_TILE:
      return selectATile(state, action.payload);

    case MOVE_TILE:
      return moveTile(state, action.payload);

    case TOGGLE_OFF:
      return toggleOff(state);

    default:
      return state;
  }
}
