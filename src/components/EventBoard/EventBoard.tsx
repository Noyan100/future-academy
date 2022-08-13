import React from 'react';
import DefaultItem from './DefaultItem';

import styles from './EventBoard.module.scss';

const EventBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.flexMain}>
          <div className={styles.data}>
            <span className={styles.dataNumber}>25</span>
            <span className={styles.dataText}>ноября</span>
          </div>
          <div className={styles.text}>
            <h3>День открытых дверей</h3>
            <span className={styles.subtitle}>
              Приглашаем всех желающих на бесплатную экскурсию в мир востребованных профессий и
              полезных навыков
            </span>
          </div>
          <button className={styles.button}>Записаться</button>
        </div>
        <DefaultItem />
        <div className={styles.flexWithIcon}>
          <div className={styles.card}>
            <div className={styles.front}>Front</div>
            <div className={styles.back}>Back</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBoard;
