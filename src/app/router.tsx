import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from './app';
import { HomePage } from '../pages/home.page';
import { ROUTES } from '../shared/constans/routes';
import { Header } from '@/widgets/header';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        element: (
          <>
            <Header />
            <div className="mt-[100px] min-h-screen">
              <Outlet />
            </div>
          </>
        ),
        children: [
          {
            path: ROUTES.HOME,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);
