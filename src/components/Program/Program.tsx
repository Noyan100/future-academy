import React from 'react';
import ProgramItem from '../ProgramItem/ProgramItem';
import styles from './Program.module.scss';

const items = [
  {
    id: 0,
    icon: '',
    title: 'Разработка мобильных приложений',
    text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
    program: 'Курс',
    category: 'Робототехника',
    duration: 24,
    age: 'child',
    level: 'light',
    type: 'any',
    sale: 10,
  },
  {
    id: 1,
    icon: '',
    title: 'Разработка мобильных приложений',
    text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
    program: 'Интенсивный курс',
    category: 'Английский язык',
    duration: 12,
    age: 'teenagers',
    level: 'light',
    type: 'any',
    sale: 10,
  },
  {
    id: 2,
    icon: '',
    title: 'Разработка мобильных приложений',
    text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
    program: 'Курс',
    category: 'Шахматы',
    duration: 12,
    age: 'adults',
    level: 'light',
    type: 'any',
    sale: 10,
  },
];

const colors = [
  '#C7EEFF',
  '#FFCE94',
  '#FFE38E',
  '#DDDDFF',
  '#B8EFCF',
  '#C7EEFF',
  '#C5DDFF',
  '#FFEEF6',
];

const Program: React.FC = () => {
  return (
    <div className={styles.container}>
      {items.map((obj, index: number) => (
        <ProgramItem
          key={obj.id}
          title={obj.title}
          text={obj.text}
          duration={obj.duration}
          icon={obj.icon}
          program={obj.program}
          category={obj.category}
          color={colors[index]}
        />
      ))}
    </div>
  );
};

export default Program;
