import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Banner } from './shared/Banner/Banner';
import { Header } from './shared/Header/Header';
import './styles/index.scss';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Banner />
      <Routes>
        <Route 
          path='/' 
          Component={Home}
        /> 
      </Routes>   
    </div>
  );
}

export default App;
