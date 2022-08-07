import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';

import './scss/_app.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
