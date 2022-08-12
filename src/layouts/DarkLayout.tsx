import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const DarkLayout = () => {
  return (
    <div>
      <Navigation theme={'dark'} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DarkLayout;
