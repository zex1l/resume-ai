import { Toaster } from 'sonner';
import { ConvexProvider } from './convex.provider';
import { ModalProvider } from './modal.provider';

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConvexProvider>
      {children}
      <ModalProvider />
      <Toaster
        position="bottom-right"
        richColors
        containerAriaLabel="toaster"
      />
    </ConvexProvider>
  );
};
