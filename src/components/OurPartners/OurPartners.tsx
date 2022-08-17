import React from 'react';
import styles from './OurPartners.module.scss';
import tinkoff from './assets/tinkoff.svg';
import avito from './assets/avito.svg';
import vk from './assets/vk.svg';
import alfabank from './assets/alfabank.svg';

const items = [tinkoff, alfabank, vk, avito, tinkoff, alfabank, vk, avito];

const OurPartners: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Наши партнеры</div>
      <div className={styles.wrapper}>
        {items.map((value, index) => (
          <div className={styles.item}>
            <img src={value} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
