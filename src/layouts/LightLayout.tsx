import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const LightLayout = () => {
  return (
    <div>
      <Navigation theme={'light'} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LightLayout;
