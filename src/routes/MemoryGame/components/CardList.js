import React from "react";
import CardListItem from "./CardListItem";
import styles from './styles.scss';

export default ({
  cards,
  flipAction
}) => (
  <ul className={styles.cards}>
    {
      cards.map(card =>
        <CardListItem
          key={card.id}
          card={card}
          flipAction={flipAction}
        />
      )
    }
  </ul>
)
