import React from 'react';

import Feedback from '../../components/Feedback/Feedback';
import Header from '../../components/Header/Header';
import VideoBlock from '../../components/VideoBlock/VideoBlock';
import WelcomeInfo from '../../components/WelcomeInfo/WelcomeInfo';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import HelpForm from '../../components/HelpForm/HelpForm';
import Tab from '../../components/Tab/Tab';
import Newspaper from '../../components/Newspaper/Newspaper';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.tab}>
        <Tab owl={true} />
      </div>
      <div className={styles.videoblock}>
        <VideoBlock />
      </div>
      <div className={styles.infoblock}>
        <InfoBlock />
      </div>
      <div className={styles.newspaper}>
        <Newspaper />
      </div>
      <div className={styles.feedback}>
        <Feedback />
      </div>
      <div className={styles.welcomeinfo}>
        <WelcomeInfo />
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

export default Home;
