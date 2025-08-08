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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
