import React from 'react';
import { Link } from 'react-router-dom';
import styles from './News.module.scss';

type TItem = {
  id: string;
  title: string;
  background: string;
  text: string;
  date: string;
};

const Item: React.FC<TItem> = ({ id, title, background, text, date }) => {
  return (
    <div className={styles.item}>
      <Link to={`/news/${id}`} className={styles.item}>
        <img src={background} alt="" />
        <div className={styles.textContainer}>
          <div className={styles.date}>{date}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>
        </div>
        <button type="button">Подробнее →</button>
      </Link>
    </div>
  );
};

export default Item;
