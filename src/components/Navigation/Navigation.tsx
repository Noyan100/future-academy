import React from 'react';
import { Link } from 'react-router-dom';

import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';
import menuIconDark from '../../assets/icon-rectangles-dark.svg';
import menuIconLight from '../../assets/icon-rectangles-light.svg';
import mapIconDark from '../../assets/icon-map-dark.svg';
import mapIconLight from '../../assets/icon-map-light.svg';
import profileIconDark from '../../assets/profile-dark.svg';
import profileIconLight from '../../assets/profile-light.svg';
import styles from './Navigation.module.scss';

// theme: light and dark

const Header: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <header
      className={`${styles.container} ${theme === 'light' ? styles.lightTheme : styles.darkTheme}`}>
      <div className={styles.wrapper}>
        <Link to="/">
          <img src={theme === 'light' ? logoDark : logoLight} alt="Future academy logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/allcourses">
                <img
                  src={theme === 'light' ? menuIconDark : menuIconLight}
                  alt="Future academy logo"
                />
                Все курсы
              </Link>
            </li>
            <li>Мероприятия</li>
            <li>Базы знаний</li>
            <li>Карьера</li>
            <li className={styles.selectLocation}>
              <img src={theme === 'light' ? mapIconDark : mapIconLight} alt="Map icon" />
              Нижний Новгород
            </li>
            <li>8 800 950-33-98</li>
            <li className="styles.login">
              <img src={theme === 'light' ? profileIconDark : profileIconLight} alt="Arrow down" />
              Войти
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
