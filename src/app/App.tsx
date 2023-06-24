import { FC } from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { Banner } from 'shared/ui/Banner/Banner';
import { Footer } from 'shared/ui/Footer/Footer';
import { Header } from 'shared/ui/Header/Header';
import { HomePage } from 'pages/Home';
import 'app/styles/index.scss';

const AppLayout: FC = () => {
  return (
    <>
      <Header/>
      <Banner />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
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
  }
]);


export const App: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};