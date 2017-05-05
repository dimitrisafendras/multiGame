import { lighten } from './Lighten'
import { store } from 'main.js'
import { simonSocket } from '../../../../model-services/server-apis';

export const PadOnline = (state, pad) => {
  if(state.sequence[0] == pad){
    lighten(pad);
    if (state.sequence.length==1){
      simonSocket.emit('nextLevel');
      return{
        ...state,
      }
    }
    state.sequence.shift();
    return{ ...state };
  }
  else{
    if (state.highScore<state.score || state.highScore == undefined){
      state.highScore = state.score;
    }
    state.score = 0;
    state.history = [];
    return{
      ...state,
      gameState: 'lose'
    }
  }
};


