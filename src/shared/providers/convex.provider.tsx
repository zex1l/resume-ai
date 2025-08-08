import { ConvexReactClient } from 'convex/react';
import { ConvexAuthProvider } from '@convex-dev/auth/react';

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);
export const ConvexProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConvexAuthProvider client={convex}>{children}</ConvexAuthProvider>;
};
