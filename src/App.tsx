import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/Home';
// import { Shops } from './pages/Shops/ui/Shops';
import { Banner } from './shared/ui/Banner/Banner';
import { Header } from 'shared/ui/Header/Header';
import { Footer } from 'shared/ui/Footer/Footer';
import styles from './App.module.scss';




function App() {
  // const [searchValue, setSearchValue] = useState('');

  // const onChangeSearchInput = (event: any) => {
  //   setSearchValue(event.target.value);
  // };

  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.appContent}>
        <Banner />
        <Routes>
          <Route 
            path='/'
            element={<HomePage />}
          /> 
          {/* <Route
            path='/shops'
            element={<Shops /> }
          /> */}
        </Routes>
      <Footer />   
      </div>
    </div>
  );
};

export default App;
