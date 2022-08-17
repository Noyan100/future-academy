import React from 'react';
import EventList from '../../components/EventList/EventList';
import Header from '../../components/Header/Header';
import HelpForm from '../../components/HelpForm/HelpForm';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import OurPartners from '../../components/OurPartners/OurPartners';
import OurPrograms from '../../components/OurPrograms/OurPrograms';
import OwlHintOne from '../../components/OwlHint/OwlHintOne';
import VideoBlock from '../../components/VideoBlock/VideoBlock';
import styles from './AboutPage.module.scss';

const list = [
  'Мы создали Академию для детей, чтобы компьютер был не зависимостью и игрушкой, а другом на пути обучения и развития.',
  'Мы создали Академию для подростков, чтобы «Кем я хочу стать?» больше не был самым сложным вопросом.',
  'Мы создали Академию для взрослых, чтобы у них была возможность начать с читатого листа и создать лучшую версию себя в любом возрасте.',
];

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.list}>
        <OwlHintOne
          title="Приветствуем в Академии будущего ХОД!"
          text={['Вам у нас понравится:)']}
        />
        <EventList eventlist={list} />
      </div>
      <div className={styles.videoblock}>
        <VideoBlock />
      </div>
      <div className={styles.ourprograms}>
        <OurPrograms />
      </div>
      <div className={styles.infoblock}>
        <InfoBlock />
      </div>
      <div className={styles.ourpartners}>
        <OurPartners />
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

export default AboutPage;
