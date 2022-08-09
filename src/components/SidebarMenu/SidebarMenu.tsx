import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './SidebarMenu.module.scss';

const levelInputs = [
  { name: 'Новичок', id: 'light' },
  { name: 'Пользователь', id: 'medium' },
  { name: 'Профессионал', id: 'hard' },
  { name: 'Читер', id: 'crazy' },
];
const typeInputs = [
  { name: 'Любой', id: 'any' },
  { name: 'Профессия', id: 'profession' },
  { name: 'Курс', id: 'course' },
];

const SidebarMenu = () => {
  const [level, setLevel] = React.useState('light');

  const onLevelChange = (e: any) => {
    setLevel(e.target.value);
  };

  const [type, setType] = React.useState('any');
  const onTypeChange = (e: any) => {
    setType(e.target.value);
  };

  const [rangeValue, setRangeValue] = React.useState(24);
  const changeRangeValue = (value: number) => {
    setRangeValue(value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.blockOne}>
        <span className={styles.blockTitle}>Уровень сложности</span>
        {levelInputs.map((obj) => (
          <div key={obj.name}>
            <input
              id={obj.id}
              value={obj.id}
              name="level"
              type="radio"
              checked={level === obj.id}
              onChange={onLevelChange}
              className={styles.blockRadio}
            />
            <label htmlFor={obj.id}>{obj.name}</label>
          </div>
        ))}
      </div>
      <div className={styles.blockTwo}>
        <span className={styles.blockTitle}>Тип обучения</span>
        {typeInputs.map((obj) => (
          <div key={obj.name}>
            <input
              id={obj.id}
              value={obj.id}
              name="type"
              type="radio"
              checked={type === obj.id}
              onChange={onTypeChange}
              className={styles.blockRadio}
            />
            <label htmlFor={obj.id}>{obj.name}</label>
          </div>
        ))}
      </div>
      <div className={styles.blockThree}>
        <span className={styles.blockTitle}>Длительность</span>
        <span className={styles.blockRangeslider}>от 1 до {rangeValue} месяцев</span>
        <Slider
          min={3}
          max={24}
          defaultValue={24}
          className={styles.rangeSlider}
          onChange={changeRangeValue}></Slider>
      </div>
      <div className={styles.blockFour}>
        <img src="https://via.placeholder.com/280x400" alt="" className={styles.blockBanner} />
      </div>
    </div>
  );
};

export default SidebarMenu;
