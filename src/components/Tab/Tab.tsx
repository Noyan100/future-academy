import React from 'react';
import styles from './Tab.module.scss';
import iconOne from '../../assets/children.jpg';
import iconTwo from '../../assets/teenagers.jpg';
import iconThree from '../../assets/family.jpg';
import OwlHintOne from '../OwlHint/OwlHintOne';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCategory, setAge } from '../../redux/slices/courseFilterSlice/slice';

const categories = ['children', 'teenagers', 'adults'];

const tabBtns = [
  {
    title: 'Дети',
    subtitle: '8 — 14 лет',
    icon: iconOne,
  },
  {
    title: 'Подростки',
    subtitle: '14 — 18 лет',
    icon: iconTwo,
  },
  {
    title: 'Взрослые',
    subtitle: '18 — ∞',
    icon: iconThree,
  },
];

const items = [
  {
    text: 'Все категории',
    category: ['children', 'teenagers', 'adults'],
  },
  {
    text: 'Робототехника',
    category: ['children', 'teenagers'],
  },
  {
    text: 'Создание игр',
    category: ['children', 'teenagers'],
  },
  {
    text: 'Web-разработка',
    category: ['children', 'teenagers'],
  },
  {
    text: 'Мультимедиа',
    category: ['children'],
  },
  {
    text: 'Шахматы',
    category: ['teenagers'],
  },
  {
    text: '3D-моделирование и дизайн',
    category: ['teenagers'],
  },
  {
    text: 'Английский язык',
    category: ['teenagers'],
  },
  {
    text: 'Блогинг',
    category: ['teenagers', 'adults'],
  },
  {
    text: 'Soft skills',
    category: ['teenagers', 'adults'],
  },
];

const Tab: React.FC<{ owl: boolean }> = ({ owl }) => {
  const dispatch = useAppDispatch();

  const age = useAppSelector((state) => state.coursesFilter.age);
  const [activeTab, setActiveTab] = React.useState(
    categories.findIndex((element) => element === age),
  );
  const indicator = React.useRef(null);

  React.useEffect(() => {
    indicator.current.style.left = `${(100 / 3) * activeTab}% `;
  }, [activeTab]);
  const onClickMenu = (index: number) => {
    setActiveTab(index);
    dispatch(setCategory('Все категории'));
    dispatch(setAge(categories[index]));
  };

  const onClickCategory = (value: string) => {
    dispatch(setCategory(value));
  };

  return (
    <div className={styles.container}>
      {owl && (
        <OwlHintOne
          title="Кем вы хотите стать?"
          text={['Пора найти себя и выбрать подходящий курс :)', 'Удачи!']}
        />
      )}
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {tabBtns.map((obj, index) => (
            <li key={index} onClick={() => onClickMenu(index)}>
              <button className={styles.menuButton}>
                <img src={obj.icon} alt="" />
                <div className={styles.menutext}>
                  <span className={styles.menutitle}>{obj.title}</span>
                  <span className={styles.menusubtitle}>{obj.subtitle} </span>
                </div>
              </button>
            </li>
          ))}
          <div className={styles.indicator} ref={indicator}></div>
        </ul>
        <div className={styles.items}>
          {items.map(
            (obj) =>
              obj.category.includes(categories[activeTab]) && (
                <Link to="/allcourses" key={obj.text}>
                  <button className={styles.itemsButton} onClick={() => onClickCategory(obj.text)}>
                    {obj.text}
                  </button>
                </Link>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab;
