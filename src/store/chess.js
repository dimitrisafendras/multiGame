import { SELECT_TILE, MOVE_TILE, CREATE_BOOL_BOARD, TOGGLE_OFF } from '../routes/Chess/modules/constants';
import moveTile from '../routes/Chess/modules/functions/moveTile';
import selectATile from '../routes/Chess/modules/functions/selectTile';
import toggleOff from '../routes/Chess/modules/functions/toggleOff';
import squares from '../routes/Chess/modules/functions/boardInitializer';

const initialState = {
  round: 'white',
  squares,
  selectedTile:[null, null],
  boolBoard: CREATE_BOOL_BOARD(),
};

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
