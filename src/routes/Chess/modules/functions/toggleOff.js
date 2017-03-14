import { CREATE_BOOL_BOARD } from '../constants';

const toggleOff = (state)=> {

  return {...state, selectedTile:[null, null], boolBoard : CREATE_BOOL_BOARD() }
};


export default toggleOff;

