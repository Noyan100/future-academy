import React from 'react';
import { useAppSelector } from '../../hooks';

import background from './assets/background.jpg';
import styles from './EventHeader.module.scss';

const EventHeader: React.FC = () => {
  const { title, subtitle, eventlist } = useAppSelector((state) => state.events.currentEvent);
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.wrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.list}>
            {eventlist.map((value) => (
              <div>{value}</div>
            ))}
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
