import React from 'react';
import Accordion from './Accordion';
import styles from './EventProgram.module.scss';

type TProgramList = {
  title: string;
  text: string;
};

const EventProgram: React.FC<{ text: string; programlist: [TProgramList] }> = ({
  text,
  programlist,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>Программа мероприятия</div>
        <div className={styles.subtitle}>{text}</div>
      </div>
      <div className={styles.program}>
        {programlist.map((obj, index) => (
          <Accordion key={index} title={obj.title} text={obj.text} />
        ))}
      </div>
    </div>
  );
};

export default EventProgram;
