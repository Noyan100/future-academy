import React from 'react';
import styles from './EventManagers.module.scss';
import Item from './Item';

const itemsTemp = [
  {
    imgSrc: 'https://via.placeholder.com/120',
    name: ['Имя1', 'Фамилия'],
    text: [
      'Выпускница Гарвардского Университета.',
      'Более 10 лет играет в шахматы и участвует в турнирах.',
    ],
  },
  {
    imgSrc: 'https://via.placeholder.com/120',
    name: ['Имя2', 'Фамилия'],
    text: [
      'Выпускница Гарвардского Университета.',
      'Более 10 лет играет в шахматы и участвует в турнирах.',
    ],
  },
  {
    imgSrc: 'https://via.placeholder.com/120',
    name: ['Имя3', 'Фамилия'],
    text: [
      'Выпускница Гарвардского Университета.',
      'Более 10 лет играет в шахматы и участвует в турнирах.',
    ],
  },
];

const EventManagers: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Мероприятие проводят</div>
      <div className={styles.items}>
        {itemsTemp.map((obj) => (
          <Item
            key={obj.name[0] + obj.name[1]}
            imgSrc={obj.imgSrc}
            name={obj.name}
            text={obj.text}
          />
        ))}
      </div>
    </div>
  );
};

export default EventManagers;
