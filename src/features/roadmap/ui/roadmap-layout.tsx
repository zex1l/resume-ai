import { cn } from '@/shared/lib/utils';

type RoadmapLayoutProps = {
  info?: React.ReactNode;
  canvas?: React.ReactNode;
};

export const RoadmapLayout = ({ info, canvas }: RoadmapLayoutProps) => {
  return (
    <div className="py-10 h-[89vh] flex flex-col gap-10 lg:grid lg:grid-cols-[400px_1fr] xl:grid-cols-[600px_1fr]">
      {info}
      {canvas}
    </div>
  );
};

type RoadmapInfoProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  tags?: React.ReactNode;
};

export const RoadmapInfo = ({ description, tags, title }: RoadmapInfoProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-gray-400">{description}</p>
      {tags}
    </div>
  );
};

export const RoadmapBlocksCanvas = ({
  blocks,
  ref,
  onMouseDown,
  className,
  actions,
  ...props
}: {
  blocks?: React.ReactNode;
  actions?: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      onMouseDown={onMouseDown}
      className={cn(
        'h-full relative bg-white/5 border border-white/10 rounded-lg p-4 overflow-hidden ',
        className
      )}
    >
      <div
        ref={ref}
        {...props}
        className="absolute inset-0 flex flex-col gap-20"
      >
        {blocks}
      </div>
      {actions && (
        <div className="absolute top-4 left-4 w-[calc(100%_-_32px)]">
          {actions}
        </div>
      )}
    </div>
  );
};
