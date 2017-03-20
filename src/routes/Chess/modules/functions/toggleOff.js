import { CREATE_BOOL_BOARD, DEFAULT_TILE } from '../constants';

const toggleOff = (state)=> {
  return {...state, selectedTile:DEFAULT_TILE, boolBoard : CREATE_BOOL_BOARD() }
};

export default toggleOff;

