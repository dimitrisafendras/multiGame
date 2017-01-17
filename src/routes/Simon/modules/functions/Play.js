import { lighten } from './Lighten'

var options = ['first', 'second', 'third', 'fourth'];
export const Play = (state) => {
  if (state.gameState == 'reset'){
    state.score = 0;
    state.highScore = 0;
    state.history = [];
  }
  state.score++;
  state.sequence = [];
  var rand = options[Math.floor(Math.random() * options.length)];
  state.history.push(rand);
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
    gameState: 'started'
  };
};
