import { assignBoolboardToSquares, createBoolBoard } from '../../../../lib/chess';
import {  DEFAULT_TILE } from '../constants';

const toggleOff = (state)=> {
  let newSquares = assignBoolboardToSquares(state.squares,createBoolBoard());
  return {...state, selectedTile:DEFAULT_TILE, squares: newSquares, clickOptions: 'selectTile' }
};

export default toggleOff;

