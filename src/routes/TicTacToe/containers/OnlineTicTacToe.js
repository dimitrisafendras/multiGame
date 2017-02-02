import TicTacToe from '../components/TicTacToe';
import { connect } from 'react-redux';
import { newGameOnline } from '../modules/constants';
import { ticTacToeSocket } from '../../../model-services/server-apis';
import { store } from 'main';

export default connect(
  (state) => {
    return {
      victory: state.game.victory
    }
  },
  {newGameOnline}
)(TicTacToe);

ticTacToeSocket.on('newGame', (action) => {
  console.log('--------------', action);
  store.dispatch(action);
});
