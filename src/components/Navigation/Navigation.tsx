import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/header-logo.svg';
import menuIcon from '../../assets/icon-rectangles.svg';
import mapIcon from '../../assets/icon-map.svg';
import profileIcon from '../../assets/profile.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';
import styles from './Navigation.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={logo} alt="Future academy logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/allcourses">
              <img src={menuIcon} alt="Future academy logo" />
              Все курсы
            </Link>
          </li>
          <li>Мероприятия</li>
          <li>Базы знаний</li>
          <li>Карьера</li>
          <li className={styles.selectLocation}>
            <img src={mapIcon} alt="Map icon" />
            Нижний Новгород
            <img src={arrowDownIcon} alt="Arrow down" />
          </li>
          <li>8 800 950-33-98</li>
          <li className="styles.login">
            <img src={profileIcon} alt="Arrow down" />
            Войти
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
