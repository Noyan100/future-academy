import React from 'react';
import OwlHintTwo from '../OwlHint/OwlHintTwo';
import styles from './HelpForm.module.scss';

export type THelpForm = {
  title: string;
  text: string;
};

const HelpForm: React.FC<THelpForm> = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <OwlHintTwo title={title} text={text} />
      <form className={styles.form}>
        <input className={styles.oneLineForm} placeholder="Ваше имя" />
        <input placeholder="Ваш телефон" />
        <input placeholder="Ваш e-mail" />
        <span className={styles.formText}>
          Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования
          Платформой
        </span>
        <button type="submit" className={styles.formBtn}>
          Отправить
        </button>
      </form>
    </div>
  );
};

export default HelpForm;
