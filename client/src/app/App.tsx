import { FC, PropsWithChildren, useEffect } from 'react';
import { RouterProvider, createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import { PageURL } from 'shared/lib/routes';
import { Header } from 'shared/ui/Header';
import { Banner } from 'shared/ui/Banner';
import { Footer } from 'shared/ui/Footer';
import { MainPage } from 'pages/Main';
import { StoresPage } from 'pages/Stores';
import { StorePage } from 'pages/Store';
import { ProductPage } from 'pages/Product';
import 'app/styles/index.scss';

const TopScroller: FC<PropsWithChildren> = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>
};

const AppLayout: FC = () => {
  return (
    <TopScroller>
      <div className="app">
        <Header className="app-header" />
        <Banner className="app-banner" />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </TopScroller>
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
