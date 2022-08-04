import React from 'react';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode, Pagination } from 'swiper';
import 'swiper/css/pagination';
import './swiper.scss';
import feedbackElements from '../../assets/feedback-elements.svg';

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
    id: 1,
    imgSrc: 'https://via.placeholder.com/40',
    firstName: 'Им32423я',
    lastName: 'Фамилия',
    info: 'Студент курса WEB разработчик',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!',
    rating: 4.87,
  },
  {
    id: 2,
    imgSrc: 'https://via.placeholder.com/40',
    firstName: 'Им43я',
    lastName: 'No family',
    info: 'Студент курса WEB разработчик',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiwrerwerwerscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!',
    rating: 4.87,
  },
  {
    id: 3,
    imgSrc: 'https://via.placeholder.com/40',
    firstName: 'Им4111111я',
    lastName: 'Фамилия',
    info: 'Студент курса WEB разработчик',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiwrerwerwerscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!',
    rating: 4.87,
  },
  {
    id: 4,
    imgSrc: 'https://via.placeholder.com/40',
    firstName: 'Имooooя',
    lastName: 'Фамилия',
    info: 'Студент курса JAVA разработчик',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiwrerwerwerscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!',
    rating: 0.87,
  },
  {
    id: 5,
    imgSrc: 'https://via.placeholder.com/40',
    firstName: 'Имbsbdsbя',
    lastName: 'Фамилия',
    info: 'Студент курса WEB разработчик',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiwrerwerwerscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!',
    rating: 2.87,
  },
];

const Feedback: React.FC = () => {
  const ref = React.useRef(null);
  return (
    <section className={styles.container}>
      <h2>Отзывы наших студентов</h2>
      <Swiper
        modules={[Autoplay, FreeMode, Pagination]}
        slidesPerView={5}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 5,
          },
          1920: {
            slidesPerView: 6,
          },
        }}
        pagination={{
          type: 'progressbar',
        }}
        loop
        freeMode
        className={styles.containerItems}>
        {items.map((obj) => (
          <SwiperSlide>
            <FeedbackItem
              key={obj.id}
              imgSrc={obj.imgSrc}
              firstName={obj.firstName}
              lastName={obj.lastName}
              info={obj.info}
              text={obj.text}
              rating={obj.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {<img src={feedbackElements} alt="Feedback decoration" className={styles.decoration} />}
    </section>
  );
};

export default Feedback;
