import React, {Component, PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {App} from '../components/App';
import {restart, flipCard} from "../modules/constants";

const mapStateToProps = (state) => ({
  memory : state.memory
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(restart, flipCard, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
