import React from 'react';
import ProgramItem from '../ProgramItem/ProgramItem';
import styles from './Program.module.scss';

const items = [
  {
    id: 0,
    title: 'Разработка мобильных приложений',
    text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
    duration: 24,
    level: 'light',
    type: 'any',
    icon: '',
    sale: '10',
    color: '#C7EEFF',
  },
  {
    id: 1,
    title: 'Разработка мобильных приложений',
    text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
    duration: 12,
    level: 'light',
    type: 'any',
    icon: '',
    sale: '10',
    color: '#FFCE94',
  },
];

const Program = () => {
  return (
    <div className={styles.container}>
      {items.map((obj) => (
        <ProgramItem
          key={obj.id}
          title={obj.title}
          text={obj.text}
          duration={obj.duration}
          color={obj.color}
        />
      ))}
    </div>
  );
};

export default Program;
