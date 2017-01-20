import TicTacToe from '../components/TicTacToe';
import { connect } from 'react-redux';
import { newGame } from '../modules/actions/index';
import { ticTacToeSocket } from '../../../model-services/server-apis';
import { store } from 'main';


ticTacToeSocket.on('newGame', (action) => {
  alert('NEW GAME!!!');
  //store.dispatch(action);
  //console.log('XXXXXXXXXXX'+action);
});

export default connect(
  (state) => {
    return {
      victory: state.game.victory
    }
  },

  ()=> ({
    alert: alert('FIRST ACTION'),
    t: ticTacToeSocket.emit('newGame', {newGame})
  })
)(TicTacToe);
