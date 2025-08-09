import { Button } from '@/shared/ui/button';
import { IterationCcw, Minus, Plus } from 'lucide-react';

export const RoadmapActions = ({
  resetOffset,
  onScaleDown,
  onScaleUp,
  scale,
}: {
  resetOffset?: () => void;
  onScaleUp?: () => void;
  onScaleDown?: () => void;
  scale?: number;
}) => {
  return (
    <div className="flex items-center  justify-between">
      <div className="flex items-center gap-2">
        <Button onClick={resetOffset}>
          <IterationCcw />
        </Button>
        <div className="flex items-center gap-1">
          <Button onClick={onScaleUp}>
            <Plus />
          </Button>
          <Button onClick={onScaleDown}>
            <Minus />
          </Button>
        </div>
      </div>
      {scale && (
        <div className="flex items-center gap-2">
          <p className="text-gray-400 text-sm">{Math.round(scale * 100)}%</p>
        </div>
      )}
    </div>
  );
};
