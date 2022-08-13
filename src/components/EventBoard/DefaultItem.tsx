import React from 'react';
import icon from '../../assets/card-icon.svg';
import styles from './EventBoard.module.scss';

const DefaultItem = () => {
  return (
    <div className={styles.flexDefault}>
      <div className={styles.card}>
        <div className={styles.front}></div>
        <div className={styles.back}>
          <div className={styles.text}>
            <h3>Заголовок мероприятия</h3>
            <p>Текст мероприятия</p>
          </div>
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DefaultItem;
