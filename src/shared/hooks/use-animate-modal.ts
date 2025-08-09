import { useEffect, useRef, useState } from 'react';

export const useAnimateModal = () => {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    []
  );

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  const openModal = () => {
    setIsClosing(false);
    setOpen(true);
  };
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => setOpen(false), 300);
  };

  return {
    open,
    isClosing,
    openModal,
    closeModal,
  };
};
