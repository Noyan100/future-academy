import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AllCourses from './pages/AllCourses/AllCourses';

import './scss/_app.scss';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout theme="light" />}>
          <Route path="" element={<Home />}></Route>
        </Route>
        <Route path="/allcourses" element={<MainLayout theme="dark" />}>
          <Route path="" element={<AllCourses />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
