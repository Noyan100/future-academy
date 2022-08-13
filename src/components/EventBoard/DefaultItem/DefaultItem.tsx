import React from 'react';
import icon from '../assets/card-icon.svg';
import background from '../assets/card-background.svg';
import styles from './DefaultItem.module.scss';

export type TDefaultItem = {
  title: string;
  text: string;
  date: string;
  color: string;
  backImage: string;
  type: string;
};

const DefaultItem: React.FC<TDefaultItem> = ({ title, text, date, color, backImage, type }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.front} style={{ background: color }}>
          <div className={styles.wrapper}>
            <span className={styles.type}>{type}</span>
            <h3 className={styles.title}>
              <img src={icon} alt="" /> {title}
            </h3>
            <p className={styles.text}>{text}</p>
            <div className={styles.date}>{date}</div>
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </div>
          <img src={backImage || background} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DefaultItem;
