type RoadmapLayoutProps = {
  info?: React.ReactNode;
  canvas?: React.ReactNode;
};

export const RoadmapLayout = ({ info, canvas }: RoadmapLayoutProps) => {
  return (
    <div className="py-10 h-full flex flex-col gap-10 lg:grid lg:grid-cols-[400px_1fr] xl:grid-cols-[600px_1fr]">
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
      {title}
      {description}
      {tags}
    </div>
  );
};

export const RoadmapBlocksCanvas = ({
  blocks,
}: {
  blocks?: React.ReactNode;
}) => {
  return (
    <div className="h-full bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-hidden flex flex-col gap-20 ">
      {blocks}
    </div>
  );
};
