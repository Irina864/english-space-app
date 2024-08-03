import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Table from '../Table/Table';
import MissingPage from '../MissingPage/MissingPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const favicon = document.querySelector('link[rel="icon"]');
  document.title = 'English Space';
  favicon.href = '../../images/favicon.ico';
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/cards/:index" element={<Slider />} />
            <Route path="*" element={<MissingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
