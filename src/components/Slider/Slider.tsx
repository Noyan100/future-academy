import React from 'react';

import styles from './Slider.module.scss';

const Slider: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <div className={styles.textContainer}>
          <span className={styles.title}>Образовательная платформа</span>
          <span className={styles.subtitle}>ХОД Future Academy</span>
          <span className={styles.text}>Актуальные знания для новичков и профессионалов</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
