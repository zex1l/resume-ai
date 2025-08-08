import { useState } from 'react';
import type { FaqItemType } from '../faq-item';

export const useOpenItems = (initialItems: FaqItemType[]) => {
  const [openItems, setOpenItems] = useState<FaqItemType[]>(() =>
    initialItems.map((item) => ({ ...item }))
  );

  const toggleOpen = (id: number) => {
    console.log('id', { id });
    setOpenItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    );
  };

  return {
    openItems,
    toggleOpen,
  };
};
