import { Pad } from '../routes/Simon/modules/functions/Pad'
import { Play } from '../routes/Simon/modules/functions/Play'

const Simon = (state = { history: [], score : 0}, action) => {
  switch (action.type) {
    case 'START_GAME' :
      return Play(state);
    case 'RESET':
      return  { ...state, gameState: 'reset' };
    case 'CLICK_PAD' :
      return Pad(state, action.payload.pad);
    default :
      return state;
  }
};
export { Simon };
