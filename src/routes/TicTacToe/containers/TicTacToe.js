import TicTacToe from '../components/TicTacToe';
import { connect } from 'react-redux';
import { newGame, newGameEvent } from '../modules/constants';

const mapStateToProps = (state)=> ({
  victory: state.game.victory,
});

export default connect(mapStateToProps, { newGame, newGameEvent })(TicTacToe);
