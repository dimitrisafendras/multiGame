import TicTacToe from '../components/TicTacToe';
import { connect } from 'react-redux';
import { newGame, newGameOnline } from '../modules/constants';
import { onNewGame } from '../../../model-services/ticTacToe/socketio/ticTacToe';

const mapStateToProps = (state)=> ({
  victory: state.game.victory,
});

export default connect(mapStateToProps, {newGameOnline, newGame})(TicTacToe);

onNewGame();
