import React from 'react';
import styles from './EventProgram.module.scss';

const Accordion: React.FC<{ title: string; text: string }> = ({ title, text }) => {
  const [state, setState] = React.useState('');
  const toggleAccordion = () => {
    setState(state === 'active' ? '' : 'active');
  };
  return (
    <div
      className={`${styles.wrapper} ${state === 'active' ? `${styles.wrapperActive}` : ''}`}
      onClick={toggleAccordion}>
      <div className={styles.textContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default Accordion;
