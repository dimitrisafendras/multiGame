import TicTacToe from '../components/TicTacToe';
import { connect } from 'react-redux';
import { newGame } from '../modules/constants';
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
  console.log('--------------', action);
  store.dispatch(action);
});



