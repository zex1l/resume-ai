import { Button } from '@/shared/ui/button';

import { useViewList } from './hooks/useViewList';
import { RoadmapListItems } from './ui/roadmap-list-items';
import { RoadmapListHeader, RoadmapListLayout } from './ui/roadmap-list-layout';
import { RoadmapListTabs } from './ui/roadmap-list-tabs';

export const RoadmapList = () => {
  const { handleViewChange, view } = useViewList();
  // const { roadmaps } = useRoadmap();

  return (
    <RoadmapListLayout
      header={
        <RoadmapListHeader
          title="Roadmaps"
          description="List of all roadmaps"
        />
      }
      actions={
        <>
          <Button>Create Roadmap</Button>
          <RoadmapListTabs onChange={handleViewChange} view={view} />
        </>
      }
      children={<RoadmapListItems view={view} />}
    />
  );
};
