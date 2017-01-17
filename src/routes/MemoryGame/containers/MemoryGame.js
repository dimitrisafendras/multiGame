import React, {Component, PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import MemoryGame from "../components/MemoryGame";
import CardList from "../components/CardList";
import * as MemoryActions from "../modules/actions/index";
import index from '../components/index.css';

const style = {
  fontFamily: "Times New Roman",
  color: 'black',
}

console.log(MemoryActions.flipCard(3));
const mapStateToProps = (state) => ({
  memory : state.memory
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(MemoryActions, dispatch)
});

const App = ({ memory , actions }) =>{
  const flipAction = {
    flipCard : actions.flipCard
  }
    return (
      <div className="container">
        <h1 style = {style}> Memory Game </h1>
        <MemoryGame round={memory.round} restart={actions.restart} />
        <CardList cards={memory.cards} flipAction={flipAction} />
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
