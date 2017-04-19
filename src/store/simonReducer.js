import { Pad } from '../../src/routes/Simon/modules/functions/Pad'
import { PadOnline } from '../../src/routes/Simon/modules/functions/PadOnline'
import { Play } from '../../src/routes/Simon/modules/functions/Play'
import { PlayOnline } from '../../src/routes/Simon/modules/functions/PlayOnline'
import { waitPlayers } from '../../src/routes/Simon/modules/functions/waitPlayers'
import '../../src/routes/Simon/modules/functions/subscriptions';

const Simon = (state = { history: [], score : 0, onlinePlayers: 56}, action) => {
  switch (action.type) {
    case 'START_GAME' :
      console.log('not1');
      return Play(state);
    case 'START_GAME_ONLINE' :
      console.log(state);
      return PlayOnline(state, action.payload.move);
    case 'RESET':
      return  { ...state, gameState: 'reset' };
    case 'CLICK_PAD_ONLINE' :
      return PadOnline(state, action.payload.pad);
    case 'CLICK_PAD' :
      console.log('not');
      return Pad(state, action.payload.pad);
    case 'WAIT_PLAYERS':
      return waitPlayers(state) ;
    default :
      return state;
  }
};

export { Simon };
