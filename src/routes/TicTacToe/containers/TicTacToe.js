import TicTacToe from '../components/TicTacToe';
import { connect } from 'react-redux';
import { newGame, newGameOnline } from '../modules/constants';
import { onNewGame } from '../../../model-services/ticTacToe/socketio/ticTacToe';

export default connect(
  (state) => {
    return {
      victory: state.game.victory
    }
  },
  {newGameOnline, newGame}
)(TicTacToe);

onNewGame();
