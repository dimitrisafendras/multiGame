import React from 'react';
import { connect } from 'react-redux';
import { resetChess } from '../modules/constants';
import ResetButton from '../components/ResetButton';

export default connect(null, { resetChess })(ResetButton);
