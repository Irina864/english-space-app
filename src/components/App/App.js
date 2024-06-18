import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Table from '../Table/Table';
import MissingPage from '../MissingPage/MissingPage';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from '../../data/data.json';
import './App.css';

function App() {
    const favicon = document.querySelector('link[rel="icon"]');
    useEffect(() => {
        document.title = `English`;
        favicon.href = '../../images/favicon.ico';
    });
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Table data={data} />} />
                    <Route path="/cards" element={<Slider data={data} />} />
                    <Route path="*" element={<MissingPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
