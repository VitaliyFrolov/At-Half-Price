import { FC, useEffect } from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { Banner } from 'shared/ui/Banner/Banner';
import { Footer } from 'shared/ui/Footer';
import { Header } from 'shared/ui/Header';
import { HomePage } from 'pages/Home';
import { StoresPage } from 'pages/Stores';
import { StorePage } from 'pages/Store';
import { ProductPage } from 'pages/Product';
import { PagePath } from './lib/routes';
import { toggleLanguage } from '../features/I18next/lib/toggleLanguage';
import 'app/styles/index.scss';

const AppLayout: FC = () => {
  return (
    <div className="app">
      <Header className="app-header" />
      <div className="app-content">
        <Banner />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: PagePath.Stores,
        element: <StoresPage />,
      },
      {
        path: PagePath.Store,
        element: <StorePage />
      },
      {
        path: PagePath.Product,
        element: <ProductPage />
      }
    ]
  }
]);


export const App: FC = () => {
  useEffect(() => {
    toggleLanguage(navigator.language)
  })

  return (
    <RouterProvider router={router} />
  );
};