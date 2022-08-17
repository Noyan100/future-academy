import React from 'react';
import HelpForm from '../../components/HelpForm/HelpForm';
import News from '../../components/News/News';
import styles from './NewsPage.module.scss';

const NewsPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Новости ХОД Future Academy</div>
      <div className={styles.news}>
        <News />
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

export default NewsPage;
