import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

// theme light and dark

const MainLayout: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <div>
      <Navigation theme={theme} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
