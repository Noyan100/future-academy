import React from 'react';
import slider from '../../assets/slider-background.svg';
import sliderElements from '../../assets/slider-elements.svg';

import styles from './Slider.module.scss';

const Slider: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <img className={styles.slider} src={slider} alt="slider" />
        <div className={styles.textContainer}>
          <span className={styles.title}>Образовательная платформа</span>
          <span className={styles.subtitle}>ХОД Future Academy</span>
          <span className={styles.text}>Актуальные знания для новичков и профессионалов</span>
        </div>
      </div>
      <img className={styles.sliderElements} src={sliderElements} alt="" />
    </div>
  );
};

export default Slider;
