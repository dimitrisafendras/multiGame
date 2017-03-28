import React from 'react';
import { connect } from 'react-redux';
import { chooseMode, getReady } from '../modules/constants';
import ChessButton from '../components/ChessButton';

export default connect(null, { chooseMode, getReady })(ChessButton);
