import { setOnTicTacToe } from '../../../model-services/ticTacToe/socketio/ticTacToe';
import { markTile, newGame } from './constants';
import { store } from 'main';

setOnTicTacToe('markTile', (action)=> (
  store.dispatch(action)
));

setOnTicTacToe('newGame', (action)=> (
  store.dispatch(action)
));
