import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HelpForm from '../../../components/HelpForm/HelpForm';
import PictureBlock from '../../../components/PictureBlock/PictureBlock';
import styles from './NewsOnePage.module.scss';

const NewsOnePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = React.useState({ date: '', title: '', text: [], background: '' });

  React.useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchNews() {
      try {
        const { data } = await axios.get('https://62f37628a84d8c968123bc84.mockapi.io/news/' + id);
        setItem(data);
      } catch (error) {
        alert('Ошибка при получении мероприятия');
        navigate('/events');
      }
    }

    fetchNews();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.textContainerOne}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.date}>{item.date}</div>
        <p className={styles.text}>{item.text[0]}</p>
      </div>
      <PictureBlock background={item.background} />
      <div className={styles.textContainerTwo}>
        {item.text.map((value, index) =>
          index === 0 ? (
            ''
          ) : (
            <p className={styles.text} key={index}>
              {value}
            </p>
          ),
        )}
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

export default NewsOnePage;
