import React from 'react';
import FeedbackItem from '../FeedbackItem/FeedbackItem';

import styles from './Feedback.module.scss';

type TItems = {
  id: number;
  imgSrc: string;
  firstName: string;
  lastName: string;
  info: string;
  text: string;
  rating: number;
};

const items: TItems[] = [
  {
    id: 0,
    imgSrc: 'https://via.placeholder.com/40',
    firstName: 'Имя',
    lastName: 'Фамилия',
    info: 'Студент курса WEB разработчик',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. ',
    rating: 4.87,
  },
  {
    id: 0,
    imgSrc: 'https://via.placeholder.com/40',
    firstName: 'Имя',
    lastName: 'Фамилия',
    info: 'Студент курса WEB разработчик',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!',
    rating: 4.87,
  },
];

const Feedback: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>Отзывы наших студентов</h2>
      <div className={styles.containerItems}>
        {items.map((obj) => (
          <FeedbackItem
            key={obj.id}
            imgSrc={obj.imgSrc}
            firstName={obj.firstName}
            lastName={obj.lastName}
            info={obj.info}
            text={obj.text}
            rating={obj.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Feedback;
