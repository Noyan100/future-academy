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
        width="100%"
        height="100%"
      />
    </section>
  );
};

export default Video;
