import React from 'react';

import styles from './Header.module.scss';

const Slider: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Образовательная платформа</h1>
          <span className={styles.subtitle}>ХОД Future Academy</span>
          <span className={styles.text}>Актуальные знания для новичков и профессионалов</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
