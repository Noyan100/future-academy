import React from 'react';

import styles from './InfoBlock.module.scss';

const InfoBlock = () => {
  return (
    <div className={styles.container}>
      <h2>
        Актуальные знания от признанных экспертов рынка для новичков и практикующих специалистов.
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <span className={styles.number}>600</span>
          <span className={styles.text}>Курсов</span>
        </div>
        <div className={styles.item}>
          <span className={styles.number}>82</span>
          <span className={styles.text}>Ведущих преподавателей</span>
        </div>
        <div className={styles.item}>
          <span className={styles.number}>14 795</span>
          <span className={styles.text}>Выпускников</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
