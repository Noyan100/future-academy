import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import AllCourses from './pages/AllCourses/AllCourses';
import EventsPage from './pages/EventsPage/EventsPage';

import './scss/_app.scss';

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
        <Route path="/events" element={<MainLayout theme="dark" />}>
          <Route path="" element={<EventsPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
