import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchEvents } from '../../redux/slices/eventSlice/slice';
import { colors } from '../../utils/setColor';
import DefaultItem from './DefaultItem/DefaultItem';
import Skeleton from './DefaultItem/Skeleton';

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

  const status = useAppSelector((state) => state.events.status);
  const skeleton = [...new Array(6)].map((obj, index) => (
    <div className={styles.flexDefault}>
      <Skeleton key={index} />
    </div>
  ));
  const events =
    items.length === 0 ? (
      <div>Курсов не найдено</div>
    ) : (
      items.map((obj, index) => (
        <div className={styles.flexDefault}>
          <Link key={obj.id} to={`/events/${obj.id}`}>
            <DefaultItem
              title={obj.title}
              text={obj.previewtext}
              backImage={obj.background}
              type={obj.type}
              date={obj.date}
              color={colors(items.length)[index]}
            />
          </Link>
        </div>
      ))
    );

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

        <div className={styles.flexContainer}>{status === 'loading' ? skeleton : events}</div>
      </div>
    </div>
  );
};

export default EventBoard;
