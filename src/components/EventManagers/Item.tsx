import React from 'react';
import styles from './EventManagers.module.scss';

const Item: React.FC<{ imgSrc: string; name: string[]; text: string[] }> = ({
  imgSrc,
  name,
  text,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img className={styles.img} src={imgSrc} alt="" />
      </div>
      <div className={styles.name}>
        <span className={styles.firstName}>{name[0]}</span>
        <span className={styles.lastName}>{name[1]}</span>
      </div>
      <div className={styles.text}>
        {text.map((value) => (
          <p key={value}>{value}</p>
        ))}
      </div>
    </div>
  );
};

export default Item;
