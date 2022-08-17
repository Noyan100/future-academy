import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './EventPage.module.scss';
import OwlHintOne from '../../../components/OwlHint/OwlHintOne';
import EventHeader from '../../../components/EventHeader/EventHeader';
import EventList from '../../../components/EventList/EventList';
import EventProgram from '../../../components/EventProgram/EventProgram';
import EventManagers from '../../../components/EventManagers/EventManagers';
import PhotoBlock from '../../../components/PhotoBlock/PhotoBlock';
import HelpForm from '../../../components/HelpForm/HelpForm';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setEvent } from '../../../redux/slices/eventSlice/slice';

const EventPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchEvent() {
      try {
        const { data } = await axios.get(
          'https://62f37628a84d8c968123bc84.mockapi.io/events/' + id,
        );
        dispatch(setEvent(data));
      } catch (error) {
        alert('Ошибка при получении мероприятия');
        navigate('/events');
      }
    }

    fetchEvent();
  }, []);

  const item = useAppSelector((state) => state.events.currentEvent);

  return (
    <div className={styles.container}>
      <div className={styles.eventheader}>
        <EventHeader />
      </div>
      <div className={styles.eventlist}>
        <OwlHintOne title="" text={['Текст, призывающий записаться на мероприятие']} />
        <EventList />
      </div>
      <div className={styles.eventprogram}>
        <EventProgram />
      </div>
      <div className={styles.eventmanagers}>
        <EventManagers />
      </div>
      <div className={styles.photoblock}>
        <PhotoBlock />
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

export default EventPage;
