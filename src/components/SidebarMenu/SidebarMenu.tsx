import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './SidebarMenu.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  resetAll,
  setDuration,
  setLevel,
  setType,
} from '../../redux/slices/courseFilterSlice/slice';

const levelInputs = [
  { name: 'Любой', id: 'any' },
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
  const dispatch = useAppDispatch();
  const level = useAppSelector((state) => state.coursesFilter.level);
  const [levelLocal, setLevelLocal] = React.useState(level);

  const onLevelChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLevelLocal(e.currentTarget.value);
    dispatch(setLevel(e.currentTarget.value));
  };

  const type = useAppSelector((state) => state.coursesFilter.type);
  const [typeLocal, setTypeLocal] = React.useState(type);
  const onTypeChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTypeLocal(e.currentTarget.value);
    dispatch(setType(e.currentTarget.value));
  };

  const range = useAppSelector((state) => state.coursesFilter.duration);
  const [rangeLocal, setRangeLocal] = React.useState(range);
  const changeRangeValue = (value: number) => {
    setRangeLocal(value);
    dispatch(setDuration(value));
  };
  const clickResetAll = () => {
    dispatch(resetAll('any'));
    setLevelLocal(levelInputs[0].id);
    setTypeLocal(typeInputs[0].id);
    setRangeLocal(24);
  };
  return (
    <div className={styles.container}>
      <div className={styles.blockOne}>
        <span className={styles.blockTitle}>Уровень сложности</span>
        {levelInputs.map((obj) => (
          <div key={obj.name}>
            <input
              id={'level' + obj.id}
              value={obj.id}
              name="level"
              type="radio"
              checked={levelLocal === obj.id}
              onChange={onLevelChange}
              className={styles.blockRadio}
            />
            <label htmlFor={'level' + obj.id}>{obj.name}</label>
          </div>
        ))}
      </div>
      <div className={styles.blockTwo}>
        <span className={styles.blockTitle}>Тип обучения</span>
        {typeInputs.map((obj) => (
          <div key={obj.name}>
            <input
              id={'type' + obj.id}
              value={obj.id}
              name="type"
              type="radio"
              checked={typeLocal === obj.id}
              onChange={onTypeChange}
              className={styles.blockRadio}
            />
            <label htmlFor={'type' + obj.id}>{obj.name}</label>
          </div>
        ))}
      </div>
      <div className={styles.blockThree}>
        <span className={styles.blockTitle}>Длительность</span>
        <span className={styles.blockRangeslider}>от 1 до {rangeLocal} месяцев</span>
        <Slider
          min={3}
          max={24}
          value={rangeLocal}
          defaultValue={24}
          step={3}
          className={styles.rangeSlider}
          onChange={changeRangeValue}></Slider>
      </div>
      <div className={styles.blockFour}>
        <button className={styles.blockTitle} onClick={clickResetAll}>
          Сбросить все фильтры
        </button>
      </div>
      <div className={styles.blockFive}>
        <img src="https://via.placeholder.com/280x400" alt="" className={styles.blockBanner} />
      </div>
    </div>
  );
};

export default SidebarMenu;
