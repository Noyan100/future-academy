import React from 'react';
import ReactPlayer from 'react-player';
import video from '../../assets/video-preview.jpg';
import styles from './VideoBlock.module.scss';

const Video: React.FC = () => {
  const img = <img src={video} alt="Future academy logo" />;

  return (
    <section className={styles.container}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=wfMvlFZ99RM"
        light
        playIcon={img}
        width="768px"
        height="436px"
      />
    </section>
  );
};

export default Video;
