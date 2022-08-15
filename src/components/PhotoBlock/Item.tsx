import React from 'react';
import styles from './PhotoBlock.module.scss';

const PhotoBlock: React.FC<{ imgSrc: string }> = ({ imgSrc }) => {
  return (
    <div className={styles.wrapper}>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default PhotoBlock;
