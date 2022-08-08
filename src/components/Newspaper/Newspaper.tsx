import React from 'react';
import styles from './Newspaper.module.scss';

import gridTwoIcon from '../../assets/monitor.svg';
import gridThreeIcon from '../../assets/newspaper.svg';
import gridFourIcon from '../../assets/diagram.svg';
import gridFiveIcon from '../../assets/click-figures.svg';

const Newspaper = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridOne}>
        <div className={styles.data}>
          <span className={styles.dataNumber}>25</span>
          <span className={styles.dataText}>ноября</span>
        </div>
        <div className={styles.text}>
          <h3>День открытых дверей</h3>
          <span className={styles.subtitle}>
            Приглашаем всех желающих на бесплатную экскурсию в мир востребованных профессий и
            полезных навыков
          </span>
        </div>
        <button className={styles.button}>Записаться</button>
      </div>
      <div className={styles.gridTwo}>
        <img src={gridTwoIcon} alt="icon" />
        <div className={styles.text}>
          <h4 className={styles.title}>Программы обучения</h4>
          <span className={styles.subtitle}>
            В списке наших курсов вы сможете найти профессию и занятие по душе, изучить новое и
            получить практические знания, которые помогут получить работу мечты.
          </span>
        </div>
        <button className={styles.button}>Подробнее</button>
      </div>
      <div className={styles.gridThree}>
        <img src={gridThreeIcon} alt="icon" />
        <h4 className={styles.title}>Новости Академии</h4>
      </div>
      <div className={styles.gridFour}>
        <img src={gridFourIcon} alt="icon" />
        <h4 className={styles.title}>Мир IT</h4>
      </div>
      <div className={styles.gridFive}>
        <img src={gridFiveIcon} alt="icon" />
        <div className={styles.text}>
          <h4 className={styles.title}>Попробуй!</h4>
          <span className={styles.subtitle}>
            Пройдите тест и узнайте свои способности в сфере информационных технологий
          </span>
        </div>
      </div>
    </div>
  );
};

export default Newspaper;
