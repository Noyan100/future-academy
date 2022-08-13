import React from 'react';
import HelpForm from '../../components/HelpForm/HelpForm';
import Program from '../../components/Program/Program';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';
import Tab from '../../components/Tab/Tab';

import styles from './AllCourses.module.scss';

const AllCourses: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <h1>Все программы обучения</h1>
      <div className={styles.wrapper}>
        <div className={styles.sidebarmenu}>
          <SidebarMenu />
        </div>
        <div className={styles.columnContainer}>
          <div className={styles.tab}>
            <Tab owl={false} />
          </div>
          <div className={styles.program}>
            <Program />
          </div>
        </div>
      </div>
      <div className={styles.helpform}>
        <HelpForm
          title="Помочь с выбором?"
          text="Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы и подберут подходящий вариант обучения."
        />
      </div>
    </div>
  );
};

export default AllCourses;
