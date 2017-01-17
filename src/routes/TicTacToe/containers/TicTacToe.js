import TicTacToe from '../components/TicTacToe';
import { connect } from 'react-redux';
import { newGame } from '../modules/actions/index';

export default connect(
  (state) => {
    return {
      victory: state.game.victory
    }
  },
  { newGame }
)(TicTacToe);
