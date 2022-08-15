import React from 'react';

import cross from './assets/cross.svg';
import circle from './assets/circle.svg';
import triangle from './assets/triangle.svg';
import styles from './EventList.module.scss';

const figures = [cross, circle, triangle];

const EventList: React.FC<{ eventlist: string[] }> = ({ eventlist }) => {
  return (
    <div className={styles.container}>
      <ul>
        {eventlist.map((value, index) => (
          <li key={index}>
            <img src={figures[index]} alt="" />
            <p className={styles.text}>{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
