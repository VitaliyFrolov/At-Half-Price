import { FC } from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { Banner } from 'shared/ui/Banner/Banner';
import { Footer } from 'shared/ui/Footer';
import { Header } from 'shared/ui/Header';
import { HomePage } from 'pages/Home';
import { StoresPage } from 'pages/Stores';
import { StorePage } from 'pages/Store';
import 'app/styles/index.scss';
import { ProductPage } from 'pages/Product';


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
        path: '/stores',
        element: <StoresPage />,
      },
      {
        path: '/stores/:storeId',
        element: <StorePage />
      },
      {
        path: '/stores/:storeId/products/:productId',
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
