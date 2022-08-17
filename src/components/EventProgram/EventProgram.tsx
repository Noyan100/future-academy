import React from 'react';
import { useAppSelector } from '../../hooks';
import Accordion from './Accordion';
import styles from './EventProgram.module.scss';

const EventProgram: React.FC = () => {
  const { programlist } = useAppSelector((state) => state.events.currentEvent);
  console.log(programlist);
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>Программа мероприятия</div>
        <div className={styles.subtitle}></div>
      </div>
      <div className={styles.program}></div>
    </div>
  );
};

export default EventProgram;
