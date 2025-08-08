import { Button } from '@/shared/ui/button';
import { useAddRoadmap } from './hooks/useAddRoadmap';
import { useRoadmap } from './hooks/useRoadmap';
import { useViewList } from './hooks/useViewList';
import { RoadmapListItems } from './ui/roadmap-list-items';
import { RoadmapListLayout } from './ui/roadmap-list-layout';
import { RoadmapListTabs } from './ui/roadmap-list-tabs';

export const RoadmapList = () => {
  const { handleViewChange, view } = useViewList();
  // const { roadmaps } = useRoadmap();

  return (
    <RoadmapListLayout
      title={<h1 className="text-3xl font-bold">Roadmap List</h1>}
      description={
        <p className="text-gray-400">Create and manage your roadmaps.</p>
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
