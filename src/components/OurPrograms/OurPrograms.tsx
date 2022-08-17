import React from 'react';
import styles from './OurPrograms.module.scss';

const items = [
  'Предполагают пролонгированное обучение',
  'Составлены с учетом возрастных и индивидуальных особенностей детей',
  'Авторские и не имеют аналогов',
  'Составлены на основе деятельностного и компетентностного подходов',
  'Реализуются с помощью современных педагогических технологий',
  'Актуальны и фундаментальны',
];

const OurPrograms: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Наши программы</div>
      <div className={styles.wrapper}>
        {items.map((value, index) => (
          <div key={index} className={styles.item}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;
