import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Table from '../Table/Table';
import MissingPage from '../MissingPage/MissingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from '../../data/data.json';
import { ApiInfo } from '../context';
import './App.css';

function App() {
  const favicon = document.querySelector('link[rel="icon"]');
  document.title = 'English Space';
  favicon.href = '../../images/favicon.ico';

  return (
    <ApiInfo>
      <Router>
        <div className="App">
          <Header />
          <Routes className="main">
            <Route path="/" element={<Table />} />
            <Route path="/cards/:index" element={<Slider />} />
            <Route path="*" element={<MissingPage />} />
          </Routes>
        </div>
      </Router>
    </ApiInfo>
  );
}

export default App;
