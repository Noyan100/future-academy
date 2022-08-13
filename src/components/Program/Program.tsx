import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCourses } from '../../redux/slices/courseSlice/slice';
import { colors } from '../../utils/setColor';
import ProgramItem from '../ProgramItem/ProgramItem';
import Skeleton from '../ProgramItem/Skeleton';
import styles from './Program.module.scss';

const Program: React.FC = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.courses.items);
  const category = useAppSelector((state) => state.coursesFilter.category);
  const age = useAppSelector((state) => state.coursesFilter.age);
  const level = useAppSelector((state) => state.coursesFilter.level);
  const type = useAppSelector((state) => state.coursesFilter.type);
  const duration = useAppSelector((state) => state.coursesFilter.duration);
  const status = useAppSelector((state) => state.courses.status);

  const getCourses = () => {
    dispatch(fetchCourses({ category, age, level, type, duration }));
  };

  React.useEffect(() => {
    getCourses();
  }, [category, age, level, type, duration]);

  const skeleton = [...new Array(4)].map((obj, index) => <Skeleton key={index} />);
  const courses =
    items.length === 0 ? (
      <div>Курсов не найдено</div>
    ) : (
      items.map((obj, index: number) => (
        <ProgramItem
          key={obj.id}
          title={obj.title}
          text={obj.text}
          duration={obj.duration}
          icon={obj.icon}
          program={obj.program}
          category={obj.category}
          sale={obj.sale}
          color={colors(items.length)[index]}
        />
      ))
    );

  return <div className={styles.container}>{status === 'loading' ? skeleton : courses}</div>;
};

export default Program;
