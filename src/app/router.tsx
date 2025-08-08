import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from './app';
import { HomePage } from '../pages/home.page';
import { ROUTES } from '../shared/constans/routes';
import { Header } from '@/widgets/header';
import { AuthPage } from '@/pages/auth.page';
import { ProtectedRoute } from './protected-route';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
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
          {
            element: (
              <>
                <ProtectedRoute />
              </>
            ),
            children: [
              {
                path: ROUTES.RESUME,
                element: <div>Resume</div>,
              },
            ],
          },
        ],
      },
      {
        path: ROUTES.AUTH,
        element: <AuthPage />,
      },
    ],
  },
]);
