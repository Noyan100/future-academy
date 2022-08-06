import React from 'react';

import styles from './FeedbackItem.module.scss';

type TFeedbackItem = {
  imgSrc: string;
  firstName: string;
  lastName: string;
  info: string;
  text: string;
  rating: number;
};

const FeedbackItem: React.FC<TFeedbackItem> = ({
  firstName,
  lastName,
  info,
  text,
  imgSrc,
  rating,
}) => {
  return (
    <div className={styles.container}>
      <img src={imgSrc} alt="image feedback" />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{info}</h4>
      <p>{text}</p>
      <div className={styles.rating}>
        <span>&#9733;</span> {rating} / 5
      </div>
    </div>
  );
};

export default FeedbackItem;
