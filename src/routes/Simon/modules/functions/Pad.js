import { lighten } from './Lighten'
import { Play } from './Play'

export const Pad = (state, pad) => {
  if(state.sequence[0] == pad){
    console.log(state);
    lighten(pad);
    if (state.sequence.length==1){
      Play(state);
      return{
        ...state
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
