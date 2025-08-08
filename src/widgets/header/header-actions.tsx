import { Button } from '@/shared/ui/button';
import { Menu } from 'lucide-react';

export const HeaderActions = ({
  onClick,
  onClickMenu,
}: {
  onClick?: () => void;
  onClickMenu?: () => void;
}) => {
  return (
    <div className="flex items-center gap-2">
      <Button onClick={onClick}>Getting Started</Button>
      <Button className="lg:hidden" onClick={onClickMenu}>
        <Menu />
      </Button>
    </div>
  );
};
