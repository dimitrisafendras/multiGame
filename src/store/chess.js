import { SELECT_TILE } from '../routes/Chess/modules/constants';
import selectedATile from '../routes/Chess/modules/functions/selectedTile';
import squares from '../routes/Chess/modules/functions';

const initialState = {
  round: 'white',
  squares,
  selectedTile:[null, null],
};

export default function chess(state = initialState, action) {
  switch (action.type){

    case SELECT_TILE:
      return selectedATile(state, action.payload);

    default:
      return state;
  }
}
