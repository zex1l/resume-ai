import { X } from 'lucide-react';
import { cn } from '../lib/utils';
import useFixedPosition from '../hooks/use-fixed-position';

export const SideMenu = ({
  children,
  onClose,
  open,
  isClosing,
}: {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  isClosing?: boolean;
}) => {
  useFixedPosition(open);

  const classNameSideMenu = cn(
    'w-[400px] bg-zinc-700 fixed h-full top-0 left-0 right-0 bottom-0 p-8 z-50 animate-modal-open',
    {
      'animate-modal-close!': isClosing,
    }
  );

  if (!open) return null;

  return (
    <div
      className={cn(
        'w-full h-full absolute top-0 left-0 right-0 bottom-0 z-50 bg-[#0b0e12cc]'
      )}
    >
      <div className={classNameSideMenu}>
        <button className="absolute top-8 right-8" onClick={onClose}>
          <X />
        </button>
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
};
