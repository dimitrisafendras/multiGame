import { boardInitializer, createBoolBoard } from '../../src/lib/chess';
import { movedTile, selectATile, toggleOff } from '../routes/Chess/modules/functions';
import {
  SELECT_TILE, MOVE_TILE,
  TOGGLE_OFF, DEFAULT_TILE ,
  CHOOSE_MODE, RESET_CHESS,
  DECLINE_MATCH, CHOOSE_COLOR,
  UPDATE_PLAYERS, GET_ONLINE_CHESS,
  GOT_CHALLENGED,
} from '../routes/Chess/modules/constants';

export const initialState = {
  round: 'white',
  squares: boardInitializer(),
  selectedTile: DEFAULT_TILE,
  boolBoard: createBoolBoard(),
  victory: false,
  mode: '',
  clickOptions: 'selectTile',
  playerColor:'',
  onlinePlayers:[],
  challenged: '',
};

export default function chess(state = initialState, action) {
  switch (action.type){

    case SELECT_TILE:
      return selectATile(state, action.payload);

    case MOVE_TILE:
      return movedTile(state, action.payload);

    case TOGGLE_OFF:
      return toggleOff(state);

    case CHOOSE_MODE:
      return {...state, mode: action.payload.mode};

    case RESET_CHESS:
      return initialState;

    case CHOOSE_COLOR:
      return {...state, playerColor: action.payload.playerColor};

    case UPDATE_PLAYERS:
      return {...state, onlinePlayers: action.payload};

    case GET_ONLINE_CHESS:
      return {...state, mode:'online'};

    case GOT_CHALLENGED:
      return {...state, opponent: action.payload.opponent };

    case DECLINE_MATCH:
      return {...state, opponent: '' };

    default:
      return state;
  }
}
