import { lighten } from './Lighten'
import { store } from 'main.js'

var options = ['first', 'second', 'third', 'fourth'];
export const PlayOnline = (state, move) => {
  console.log('play online new move --> ', move);
  if (state.gameState == 'reset'){
    state.score = 0;
    state.highScore = 0;
    state.history = [];
  }
  state.score++;
  state.sequence = [];
  var rand = options[move];
  console.log('HISTORY UPDATE');
  console.log(state.history);
  state.history.push(rand);
  console.log('HISTORY UPDATED', rand);
  console.log(state.history);

  setTimeout( ()=>{
    for(let i=0; i<state.score; i++){
      ((x) => {
        setTimeout(() => { lighten(x) }, i * 600 )
        state.sequence.push(x);
      })(state.history[i]);
    }
  }, 1500);

  return {
    ...state,
    gameState: 'startedOnline',
  };
};
