import React from 'react';
import styles from './OwlHint.module.scss';

import owl from './owl/owl-one.svg';

const OwlHintOne = () => {
  return (
    <div className={`${styles.container} ${styles.one}`}>
      <div className={styles.textContainer}>
        <h2>Кем вы хотите стать?</h2>
        <p>Пора найти себя и выбрать подходящий курс :)</p>
        <p>Удачи!</p>
      </div>
      <img src={owl} alt="owl" />
    </div>
  );
};

export default OwlHintOne;
