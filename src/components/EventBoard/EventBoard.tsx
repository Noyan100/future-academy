import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchEvents } from '../../redux/slices/eventSlice/slice';
import { colors } from '../../utils/setColor';
import DefaultItem from './DefaultItem/DefaultItem';

import styles from './EventBoard.module.scss';

const EventBoard = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.events.items);
  const getEvents = () => {
    dispatch(fetchEvents());
  };

  React.useEffect(() => {
    getEvents();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.flexMain}>
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
        {items.map((obj, index) => (
          <div className={styles.flexDefault} key={obj.id}>
            <DefaultItem
              title={obj.title}
              text={obj.text}
              backImage={obj.background}
              type={obj.type}
              date={obj.date}
              color={colors(items.length)[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventBoard;
