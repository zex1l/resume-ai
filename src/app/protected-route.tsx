import { BigLoader } from '@/shared/ui/big-loader';
import { useConvexAuth } from 'convex/react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return <BigLoader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
