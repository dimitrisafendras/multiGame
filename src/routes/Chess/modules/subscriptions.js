import { setOnEvent } from '../../../model-services/chess/socketio/chessSocket';
import { store } from 'main';
import { chooseColor,  updatePlayers, getOnline , gotChallenged} from './constants';

setOnEvent('movedTile', (action)=> (
  store.dispatch(action)
));

setOnEvent('gotReady', (payload)=> {
  store.dispatch(chooseColor(payload));
});

setOnEvent('updatePlayers', (payload)=> {
  store.dispatch(updatePlayers(payload));
});

setOnEvent('loginError', (msg)=> {
  alert(msg);
});

setOnEvent('getOnline', ()=> {
  store.dispatch(getOnline());
});

setOnEvent('gotChallenged', (user)=> {
  store.dispatch(gotChallenged(user));
});
