import React from 'react';

import Feedback from '../components/Feedback/Feedback';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import Video from '../components/Video/Video';
import WelcomeInfo from '../components/WelcomeInfo/WelcomeInfo';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import HelpForm from '../components/HelpForm/HelpForm';
import Tab from '../components/Tab/Tab';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Tab />
      <Video />
      <Feedback />
      <WelcomeInfo />
      <InfoBlock />
      <HelpForm />
    </>
  );
};

export default Home;
