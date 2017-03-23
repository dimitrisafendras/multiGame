import { SELECT_TILE, MOVE_TILE, TOGGLE_OFF, CREATE_BOOL_BOARD, DEFAULT_TILE } from '../routes/Chess/modules/constants';
import { movedTile, selectATile, toggleOff , squares} from '../routes/Chess/modules/functions';


export const initialState = {
  round: 'white',
  squares,
  selectedTile: DEFAULT_TILE,
  boolBoard: CREATE_BOOL_BOARD(),
  victory: false,
  mode: 'online',
  clickOptions: 'selectTile',
};


export default function chess(state = initialState, action) {
  switch (action.type){

    case SELECT_TILE:
      return selectATile(state, action.payload);

    case MOVE_TILE:
      return movedTile(state, action.payload);

    case TOGGLE_OFF:
      return toggleOff(state);

    default:
      return state;
  }
}
