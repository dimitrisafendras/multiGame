import TicTacToe from '../components/TicTacToe';
import { connect } from 'react-redux';
import { newGame } from '../modules/actions/index';
import { ticTacToeSocket } from '../../../model-services/server-apis';
import { store } from 'main';

export default connect(
  (state) => {
    return {
      victory: state.game.victory
    }
  },
  {newGame}
)(TicTacToe);

ticTacToeSocket.on('newGame', (action) => {
  alert('NEW GAME!!!');
  console.log('--------------', action);
  store.dispatch(action);
});



