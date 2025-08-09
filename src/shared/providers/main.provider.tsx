import { Toaster } from 'sonner';
import { ConvexProvider } from './convex.provider';
import { ModalProvider } from './modal.provider';
import ErrorBoundary from './error-boundary';
import { Error500Page } from '@/pages/error-500';

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary fallback={<Error500Page />}>
      <ConvexProvider>
        {children}
        <ModalProvider />
        <Toaster
          position="bottom-right"
          richColors
          containerAriaLabel="toaster"
        />
      </ConvexProvider>
    </ErrorBoundary>
  );
};
