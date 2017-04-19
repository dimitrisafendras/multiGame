/**
 * Created by chris on 25/1/2017.
 */
import { connect } from 'react-redux'
import React from 'react'
import { bindActionCreators } from 'redux'
import options  from '../modules/actions'
import styles from './PlayingView.scss'

export let PadsOnline = ({ actions }) => (
  <div className='circle'>
    <p className={styles.firstpad} onClick={() => (actions.clickPadOnline('first'))} id='first' ></p>
    <p className={styles.secondpad} onClick={() => (actions.clickPadOnline('second'))} id='second'></p>
    <p className={styles.thirdpad} onClick={() => (actions.clickPadOnline('third'))} id='third'></p>
    <p className={styles.fourthpad} onClick={() => (actions.clickPadOnline('fourth'))} id='fourth'></p>
  </div>
);

PadsOnline = connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators({ clickPadOnline: options.online.clickPadOnline }, dispatch),
  }),
)(PadsOnline);
