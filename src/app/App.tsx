import { FC } from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { Banner } from 'shared/ui/Banner/Banner';
import { Footer } from 'shared/ui/Footer/ui/Footer';
import { Header } from 'shared/ui/Header/ui/Header';
import { HomePage } from 'pages/Home';
import 'app/styles/index.scss';
import { ShopsPage } from 'pages/Shops';

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
      }
    ]
  },
  {
    path: '/shops',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <ShopsPage />
      }
    ]
  }
]);


export const App: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};
