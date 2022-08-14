import React from 'react';
import Accordion from './Accordion';
import styles from './EventProgram.module.scss';

const programsTemp = [
  {
    title: 'День первый',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.',
  },
  {
    title: 'День второй',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.',
  },
  {
    title: 'День третий',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.',
  },
];

const EventProgram: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>Программа мероприятия</div>
        <div className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat
          id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh
          imperdiet est, vel sagittis quam justo vestibulum eros. Cras dignissim mi quis fringilla
          feugiat. Proin malesuada luctus diam, vitae faucibus dolor venenatis vel. In hac habitasse
          platea dictumst.
        </div>
      </div>
      <div className={styles.program}>
        {programsTemp.map((obj) => (
          <Accordion key={obj.title + obj.text} title={obj.title} text={obj.text} />
        ))}
      </div>
    </div>
  );
};

export default EventProgram;
