import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/_app.scss';
import 'swiper/css/pagination';
import './scss/swiper.scss';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import AllCourses from './pages/AllCourses/AllCourses';
import EventsPage from './pages/EventsPage/EventsPage';
import EventPage from './pages/EventsPage/EventPage/EventPage';
import NewsPage from './pages/NewsPage/NewsPage';
import NewsOnePage from './pages/NewsPage/NewsOnePage/NewsOnePage';
import AboutPage from './pages/AboutPage/AboutPage';

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
        <Route path="/news" element={<MainLayout theme="dark" />}>
          <Route path="" element={<NewsPage />}></Route>
        </Route>
        <Route path="/news/:id" element={<MainLayout theme="dark" />}>
          <Route path="" element={<NewsOnePage />}></Route>
        </Route>
        <Route path="/about" element={<MainLayout theme="light" />}>
          <Route path="" element={<AboutPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
