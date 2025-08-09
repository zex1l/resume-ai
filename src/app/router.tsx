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
            <div className="mt-[100px] min-h-[89vh]">
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
              {
                path: ROUTES.ROADMAPS,
                lazy: () => import('@/pages/roadmaps.page'),
              },
              {
                path: ROUTES.ROADMAP,
                lazy: () => import('@/pages/roadmap.page'),
              },
              {
                path: ROUTES.ROADMAP_BLOCK,
                lazy: () => import('@/pages/roadmap-block.page'),
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
