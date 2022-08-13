import React from 'react';
import EventBoard from '../../components/EventBoard/EventBoard';
import HelpForm from '../../components/HelpForm/HelpForm';
import styles from './EventsPage.module.scss';

const EventsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Все мероприятия</h1>
      <div className={styles.eventboard}>
        <EventBoard />
      </div>
      <div className={styles.helpform}>
        <HelpForm
          title="Помочь с выбором?"
          text="Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы и подберут подходящий вариант обучения."
        />
      </div>
    </div>
  );
};

export default EventsPage;
