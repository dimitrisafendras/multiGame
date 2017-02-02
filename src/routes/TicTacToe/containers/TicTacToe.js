import TicTacToe from '../components/TicTacToe';
import { connect } from 'react-redux';
import { newGame } from '../modules/constants';

export default connect(
  (state) => {
    return {
      victory: state.game.victory
    }
  },
  {newGame}
)(TicTacToe);


