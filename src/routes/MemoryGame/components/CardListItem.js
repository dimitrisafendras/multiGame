import React from "react";
import classNames from "classnames";
import styles from './styles.scss';

export default ({
  card,
  flipAction
}) => {

  let cardClass = classNames({
    'flipper' : true,
    'flipped' : card.flipped || card.discovered
  });

  return (
    <li className= {styles.flipContainer}>
      <div className={cardClass}>
        <div className= {styles.front} onClick={() => flipAction.flipCard(card.id)}></div>
        <div className={styles.backk}>
          <img src={card.url} />
        </div>
      </div>
    </li>
  );

}
