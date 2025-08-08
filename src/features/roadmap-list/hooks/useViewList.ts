import { useState } from 'react';

export type View = 'list' | 'grid';

export const useViewList = () => {
  const [view, setView] = useState<View>('list');

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  return { view, handleViewChange };
};
