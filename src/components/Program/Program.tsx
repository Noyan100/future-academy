import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCourses } from '../../redux/slices/courseSlice/courseSlice';
import ProgramItem from '../ProgramItem/ProgramItem';
import styles from './Program.module.scss';

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
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.courses.items);

  const getCourses = () => {
    dispatch(fetchCourses());
  };

  React.useEffect(() => {
    getCourses();
  }, []);

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
