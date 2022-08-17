import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={380}
    height={500}
    viewBox="0 0 380 500"
    backgroundColor="#e6e6e6"
    foregroundColor="#ededed">
    <rect x="0" y="0" rx="20" ry="20" width="380" height="500" />
  </ContentLoader>
);

export default Skeleton;
