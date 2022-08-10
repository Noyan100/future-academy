import React from 'react';
import styles from './OwlHint.module.scss';

import owl from './owl/owl-two.svg';

import { THelpForm } from '../HelpForm/HelpForm';

const OwlHintTwo: React.FC<THelpForm> = ({ title, text }) => {
  return (
    <div className={`${styles.container} ${styles.two}`}>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <img src={owl} alt="owl" />
    </div>
  );
};

export default OwlHintTwo;
