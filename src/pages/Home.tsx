import React from 'react';

import Feedback from '../components/Feedback/Feedback';
import Header from '../components/Header/Header';
import Video from '../components/VideoBlock/VideoBlock';
import WelcomeInfo from '../components/WelcomeInfo/WelcomeInfo';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import HelpForm from '../components/HelpForm/HelpForm';
import Tab from '../components/Tab/Tab';
import Newspaper from '../components/Newspaper/Newspaper';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Tab owl={true} />
      <Video />
      <InfoBlock />
      <Newspaper />
      <Feedback />
      <WelcomeInfo />
      <HelpForm />
    </>
  );
};

export default Home;
