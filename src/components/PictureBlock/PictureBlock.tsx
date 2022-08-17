import React from 'react';
import styles from './PictureBlock.module.scss';

const PictureBlock: React.FC<{ background: string }> = ({ background }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={background} alt="" />
      </div>
    </div>
  );
};

export default PictureBlock;
