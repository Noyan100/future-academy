import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './EventPage.module.scss';
import EventHeader from '../../../components/EventHeader/EventHeader';

const EventPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = React.useState();

  React.useEffect(() => {
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
      <EventHeader />
    </div>
  );
};

export default EventPage;
