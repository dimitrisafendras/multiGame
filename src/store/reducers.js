import { combineReducers } from 'redux'
import locationReducer from './location'
import players from './ticTacToeReducers/playersReducer'
import game from './ticTacToeReducers/gamesReducer'
import hangman from './hangmanReducer'
import home from './homeReducer'
import { Simon } from './simonReducer'
import chess from './chess'

export const makeRootReducer = (asyncReducers)=> {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers,
    game,
    players,
    hangman,
    home,
    Simon,
    chess,
  })
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers))
};
export default makeRootReducer
