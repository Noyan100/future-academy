import React from 'react';
import styles from './ProgramItem.module.scss';
import defaultIcon from '../../assets/program-icon.svg';

type TProgramItem = {
  title: string;
  text: string;
  duration: number;
  icon: string;
  color: string;
  program: string;
  category: string;
  sale: number;
};

const ProgramItem: React.FC<TProgramItem> = ({
  title,
  text,
  duration,
  color,
  icon,
  program,
  category,
  sale,
}) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <div className={styles.header}>
        <span>{program}</span>
        <span>{category}</span>
      </div>
      <div className={styles.title}>
        <img src={icon || defaultIcon} alt="" />
        <h3>«{title}»</h3>
      </div>
      <p>{text}</p>
      <span className={styles.duration}>Длительность: {duration} месяцев</span>
      {sale !== 0 ? <span className={styles.sale}>-{sale}%</span> : ''}
    </div>
  );
};

export default ProgramItem;
