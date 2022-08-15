import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'swiper/css/pagination';
import './scss/swiper.scss';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import AllCourses from './pages/AllCourses/AllCourses';
import EventsPage from './pages/EventsPage/EventsPage';
import EventPage from './pages/EventsPage/EventPage/EventPage';

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
        <Route path="/events/:id" element={<MainLayout theme="light" />}>
          <Route path="" element={<EventPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
