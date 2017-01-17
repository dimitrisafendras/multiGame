import { connect } from 'react-redux'
import React from 'react'
import { bindActionCreators } from 'redux'
import { clickPad } from '../modules/actions'
import styles from './PlayingView.scss'

export let Pads = ({ actions }) => (
  <div className='circle'>
    <p className={styles.firstpad} onClick={() => (actions.clickPad('first'))} id='first' ></p>
    <p className={styles.secondpad} onClick={() => (actions.clickPad('second'))} id='second'></p>
    <p className={styles.thirdpad} onClick={() => (actions.clickPad('third'))} id='third'></p>
    <p className={styles.fourthpad} onClick={() => (actions.clickPad('fourth'))} id='fourth'></p>
  </div>
);

Pads = connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators({ clickPad }, dispatch),
  }),
)(Pads);
