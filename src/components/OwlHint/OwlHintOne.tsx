import React from 'react';
import styles from './OwlHint.module.scss';

import owl from './owl/owl-one.svg';

const OwlHintOne: React.FC<{ title: string; text: string[] }> = ({ title, text }) => {
  return (
    <div className={`${styles.container} ${styles.one}`}>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        {text.map((value, index) => (
          <p>{text[index]}</p>
        ))}
      </div>
      <img src={owl} alt="owl" />
    </div>
  );
};

export default OwlHintOne;
