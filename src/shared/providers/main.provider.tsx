import { ConvexProvider } from './convex.provider';

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConvexProvider>{children}</ConvexProvider>;
};
