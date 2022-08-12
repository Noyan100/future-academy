import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

// theme light and dark

const MainLayout: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <div>
      <Navigation theme={theme} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
