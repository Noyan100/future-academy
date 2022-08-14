import React from 'react';

import cross from './assets/cross.svg';
import circle from './assets/circle.svg';
import triangle from './assets/triangle.svg';
import styles from './EventList.module.scss';

const EventList: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <img src={cross} alt="" />
          <div className={styles.title}>Заголовок</div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut
            feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget
          </p>
        </li>
        <li>
          <img src={circle} alt="" />
          <div className={styles.title}>Заголовок</div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut
            feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget
          </p>
        </li>
        <li>
          <img src={triangle} alt="" />
          <div className={styles.title}>Заголовок</div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut
            feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget
          </p>
        </li>
      </ul>
    </div>
  );
};

export default EventList;
