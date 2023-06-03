import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './shared/Header/Header';
import './styles/index.scss';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route 
          path='/' 
        /> 
      </Routes>   
    </div>
  );
}

export default App;
