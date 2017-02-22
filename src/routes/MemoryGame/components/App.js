import React from "react";
import styles from '../components/styles.scss';
import MemoryGame from "../components/MemoryGame";
import CardList from "../components/CardList";

const style = {
  fontFamily: "Times New Roman",
  color: 'black',
};

export const App = ({ memory , actions }) =>{
  return (
    <div className={styles.container}>
      <h1 style = {style}> Memory Game </h1>
      <MemoryGame round={memory.round} restart={actions.restart} />
      <CardList cards={memory.cards} flipAction={actions.flipCard} />
    </div>
  )
};
