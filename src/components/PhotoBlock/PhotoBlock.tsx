import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import styles from './PhotoBlock.module.scss';
import Item from './Item';

const photosTemp = [
  'https://via.placeholder.com/320x200',
  'https://via.placeholder.com/320x200',
  'https://via.placeholder.com/320x200',
  'https://via.placeholder.com/320x200',
  'https://via.placeholder.com/320x200',
  'https://via.placeholder.com/320x200',
];

const PhotoBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.title}>Фотографии с прошлых мероприятий</div>
        <div className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat
          id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh
          imperdiet est, vel sagittis quam justo.
        </div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={5}
        spaceBetween={30}
        grabCursor={true}
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
        className={styles.containerItems}>
        {photosTemp.map((value, index) => (
          <SwiperSlide key={index} className={styles.swiperItem}>
            <Item imgSrc={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoBlock;
