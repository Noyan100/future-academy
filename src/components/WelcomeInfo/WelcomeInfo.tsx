import React from 'react';

import iconOne from '../../assets/welcome-iconone.svg';
import iconTwo from '../../assets/welcome-icontwo.svg';
import iconThree from '../../assets/welcome-iconthree.svg';
import iconFour from '../../assets/welcome-iconfour.svg';
import styles from './WelcomeInfo.module.scss';

const WelcomeInfo = () => {
  return (
    <div className={styles.container}>
      <h2>Добро пожаловать в Академию будущего ХОД</h2>
      <div className={styles.flexcontainer}>
        <div>
          <img src={iconOne} alt="Future academy logo" />
          <p>Передовой подход к образовательному процессу</p>
        </div>
        <div>
          <img src={iconTwo} alt="Future academy logo" />
          <p>Непрерывное усовершенствование и пополнение базы курсов</p>
        </div>
        <div>
          <img src={iconThree} alt="Future academy logo" />
          <p>Только практикующие преподаватели</p>
        </div>
        <div>
          <img src={iconFour} alt="Future academy logo" />
          <p>Сопровождение на всех этапах. От начала обучения до трудоустройства</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeInfo;
