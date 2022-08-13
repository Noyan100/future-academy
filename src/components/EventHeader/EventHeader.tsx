import React from 'react';

import background from './assets/background.jpg';
import styles from './EventHeader.module.scss';

const EventHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.wrapper}>
          <div className={styles.title}>Название мероприятия</div>
          <div className={styles.subtitle}>Подпись к названию</div>
          <div className={styles.list}>
            <div>Узнайте самые востребованные профессии, на которые более 113 тысяч вакансий</div>
            <div>Выберите подходящую именно для вас</div>
            <div>Сделайте первые шаги к возможности выйти на доход более 100 тысяч рублей</div>
          </div>
          <span className={styles.nowText}>Запишись сейчас</span>
          <button className={styles.button}>Записаться на интенсив</button>
        </div>
        <img src={background} alt="" />
      </div>
    </div>
  );
};

export default EventHeader;
