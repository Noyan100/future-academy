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

const EventPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  type TItemEvent = {
    title: string;
    subtitle: string;
    eventlist: string[];
    whatinevent: string[];
    programtext: string;
    programlist: [{ title: string; text: string }];
    managers: [
      {
        imgSrc: string;
        name: string[];
        text: string[];
      },
    ];
    photos: string[];
  };

  const [item, setItem] = React.useState<TItemEvent>({
    title: '',
    subtitle: '',
    eventlist: [],
    whatinevent: [],
    programtext: '',
    programlist: [{ title: '', text: '' }],
    managers: [{ imgSrc: '', name: [], text: [] }],
    photos: [],
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchEvent() {
      try {
        const { data } = await axios.get(
          'https://62f37628a84d8c968123bc84.mockapi.io/events/' + id,
        );
        setItem(data);
      } catch (error) {
        alert('Ошибка при получении мероприятия');
        navigate('/events');
      }
    }

    fetchEvent();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.eventheader}>
        <EventHeader title={item.title} subtitle={item.subtitle} eventlist={item.eventlist} />
      </div>
      <div className={styles.eventlist}>
        <OwlHintOne title="" text={['Текст, призывающий записаться на мероприятие']} />
        <EventList eventlist={item.whatinevent} />
      </div>
      <div className={styles.eventprogram}>
        <EventProgram text={item.programtext} programlist={item.programlist} />
      </div>
      <div className={styles.eventmanagers}>
        <EventManagers managers={item.managers} />
      </div>
      <div className={styles.photoblock}>
        <PhotoBlock photos={item.photos} />
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
