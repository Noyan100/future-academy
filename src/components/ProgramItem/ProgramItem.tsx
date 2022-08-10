import React from 'react';
import styles from './ProgramItem.module.scss';

type ProgramItem = {
  title: string;
  text: string;
  duration: number;
  color: string;
};

const ProgramItem: React.FC<ProgramItem> = ({ title, text, duration, color }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{text}</p>
      <span>{duration}</span>
    </div>
  );
};

export default ProgramItem;
