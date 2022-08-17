import React from 'react';
import styles from './EventManagers.module.scss';
import Item from './Item';

const EventManagers: React.FC<{
  managers: [{ imgSrc: string; name: string[]; text: string[] }];
}> = ({ managers }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Мероприятие проводят</div>
      <div className={styles.items}>
        {managers.map((obj) => (
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
