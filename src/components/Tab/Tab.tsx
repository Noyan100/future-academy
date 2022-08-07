import React from 'react';
import styles from './Tab.module.scss';
import iconOne from '../../assets/children.jpg';
import iconTwo from '../../assets/teenagers.jpg';
import iconThree from '../../assets/family.jpg';
import { OwlHintOne } from '../../ui-kit';

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
    text: 'Робототехника',
    category: 'children',
  },
  {
    text: 'Создание игр',
    category: 'children',
  },
  {
    text: 'Web-разработка',
    category: 'children',
  },
  {
    text: 'Мультимедиа',
    category: 'children',
  },
  {
    text: 'Шахматы',
    category: ['children', 'teenagers'],
  },
  {
    text: '3D-моделирование и дизайн',
    category: ['children', 'teenagers'],
  },
  {
    text: 'Английский язык',
    category: ['children', 'teenagers'],
  },
  {
    text: 'Блогинг',
    category: ['children', 'teenagers', 'adults'],
  },
  {
    text: 'Soft skills',
    category: ['children', 'teenagers', 'adults'],
  },
];

const Tab = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const indicator = React.useRef(null);
  const onClickMenu = (index: number) => {
    setActiveTab(index);
    indicator.current.style.left = `${(100 / 3) * index}% `;
  };

  return (
    <div className={styles.container}>
      <OwlHintOne />
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
                <button className={styles.itemsButton} key={obj.text}>
                  {obj.text}
                </button>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab;
