import React from 'react';
import styles from './OwlHint.module.scss';

import owl from './owl/owl-two.svg';

const OwlHintTwo = () => {
  return (
    <div className={`${styles.container} ${styles.two}`}>
      <div className={styles.textContainer}>
        <h2>Помочь с выбором?</h2>
        <p>
          Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы и подберут
          подходящий вариант обучения.
        </p>
      </div>
      <img src={owl} alt="owl" />
    </div>
  );
};

export default OwlHintTwo;
