const initialState =
{
    errorsCount: 0,
    usedLetters: [],
    wordToGuess: '',
    wordMask: '*'
};

export default function(state = initialState, action){
  switch(action.type) {
    case 'LETTER_CHOOSEN':
      if (state.wordToGuess.indexOf(action.payload.guess) > -1) {
        let newMask = '';
        for (let i=0;i<state.wordMask.length;i++) {
          state.wordToGuess[i] == action.payload.guess ? newMask += action.payload.guess : newMask += state.wordMask[i];
        }
        return Object.assign({}, state, {wordMask: newMask, usedLetters: [action.payload.guess, ...state.usedLetters]});
      } else {
        return Object.assign({}, state, {errorsCount: state.errorsCount + 1, usedLetters: [action.payload.guess, ...state.usedLetters]});
      }
    case 'FETCHING_COMPLETE':
      if (state.wordMask == '*'){
        return Object.assign({}, state, {
          wordToGuess: action.payload.response,
          wordMask: state.wordMask.repeat(action.payload.response.length)
        })
      }
      return state;
    case 'PLAY_WITH_FRIEND':
      return Object.assign({}, state, {
        playWithFriend: true
      });
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
};
