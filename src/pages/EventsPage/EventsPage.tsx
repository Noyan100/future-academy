import React from 'react';
import EventBoard from '../../components/EventBoard/EventBoard';
import styles from './EventsPage.module.scss';

const EventsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Все мероприятия</h1>
      <div className={styles.eventboard}>
        <EventBoard />
      </div>
    </div>
  );
};

export default EventsPage;
