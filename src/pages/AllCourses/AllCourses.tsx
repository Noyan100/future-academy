import React from 'react';
import HelpForm from '../../components/HelpForm/HelpForm';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';
import Tab from '../../components/Tab/Tab';

import styles from './AllCourses.module.scss';

const AllCourses: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Все программы обучения</h1>
      <div className={styles.wrapper}>
        <SidebarMenu />
        <Tab owl={false} />
      </div>
      <HelpForm />
    </div>
  );
};

export default AllCourses;
