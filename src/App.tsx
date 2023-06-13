import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Shops } from './pages/Shops/Shops';
import { Banner } from './shared/Banner/Banner';
import { Footer } from './shared/Footer/Footer';
import { Header } from './shared/Header/Header';
import './styles/index.scss';

function App() {
  const [discountCard, setDiscountCard] = useState([]);
  const [storesCard, setStoresCard] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/posts')
        .then((res) => setDiscountCard(res.data));
      axios.get('http://localhost:3001/comments')
        .then((res) => setStoresCard(res.data));
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Banner />
      <Routes>
        <Route 
          path='/'
          Component={()=>
            <Home
              discountCard={discountCard}
              storesCard={storesCard}
            />
          }
        /> 
        <Route
          path='/shops'
          Component={()=>
            <Shops
              storesCard={storesCard}
            />
          }
        />
      </Routes>
      <Footer />   
    </div>
  );
};

export default App;
