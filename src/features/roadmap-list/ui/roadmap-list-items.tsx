import type { View } from '../hooks/use-view-list';

export const RoadmapListItems = ({
  view,
  children,
}: {
  view: View;
  children?: React.ReactNode;
}) => {
  switch (view) {
    case 'list':
      return <RoadmapListList>{children}</RoadmapListList>;
    case 'grid':
      return <RoadmapListGrid>{children}</RoadmapListGrid>;
  }
};

export const RoadmapListList = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

export const RoadmapListGrid = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
};

export const RoadmapListItem = ({
  stages,
  description,
  tags,
  title,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  tags?: React.ReactNode;
  stages: number;
}) => {
  return (
    <div className="flex flex-col gap-4 h-full bg-zinc-800/40 p-4 rounded-lg border border-white/10">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p>{description}</p>
      </div>
      {stages && (
        <p className="text-gray-400">Total stages: {stages} for this roadmap</p>
      )}
      <div className="flex items-center flex-wrap gap-2 mt-auto">{tags}</div>
    </div>
  );
};
