import { setOnEvent } from '../../../../model-services/simon/socketio/simonSocket';
import { store } from 'main';

setOnEvent('nextLevel', (move)=>{
  store.dispatch(
    {
      type: 'START_GAME_ONLINE',
      payload: {
        move
      }
    }
  )
});

setOnEvent('allReady', (move)=>{
  store.dispatch(
    {
      type: 'START_GAME_ONLINE',
      payload: {
        move
      }
    }
  )
});
