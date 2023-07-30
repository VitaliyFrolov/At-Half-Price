import { FC } from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { PageURL } from 'shared/lib/routes';
import { Header } from 'shared/ui/Header';
import { Banner } from 'shared/ui/Banner';
import { Footer } from 'shared/ui/Footer';
import { MainPage } from 'pages/Main';
import { StoresPage } from 'pages/Stores';
import { StorePage } from 'pages/Store';
import { ProductPage } from 'pages/Product';
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
    path: PageURL.Main,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: PageURL.Stores,
        element: <StoresPage />,
      },
      {
        path: PageURL.Store,
        element: <StorePage />
      },
      {
        path: PageURL.Product,
        element: <ProductPage />
      }
    ]
  }
]);


export const App: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};
