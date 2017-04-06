import { setOnEvent } from '../../../model-services/chess/socketio/chessSocket';
import { store } from 'main';

setOnEvent('movedTile', (action)=> (
  store.dispatch(action)
));

setOnEvent('gotReady', (payload)=> {
  store.dispatch({
      type: 'CHOOSE_COLOR',
      payload,
  });
});

setOnEvent('updatePlayers', (payload)=> {
  store.dispatch({
    type: 'UPDATE_PLAYERS',
    payload,
  });
});

setOnEvent('loginError', (msg)=> {
  alert(msg);
});

setOnEvent('getOnline', ()=> {
  store.dispatch({
    type: 'GET_ONLINE_CHESS'
  })
});

setOnEvent('gotChallenged', (user)=> {
  store.dispatch({
    type: 'GOT_CHALLENGED',
    payload:{
      opponent: user,
    }
  })
});
