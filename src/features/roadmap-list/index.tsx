import { Button } from '@/shared/ui/button';
import { useViewList } from './hooks/use-view-list';
import { RoadmapListItem, RoadmapListItems } from './ui/roadmap-list-items';
import { RoadmapListHeader, RoadmapListLayout } from './ui/roadmap-list-layout';
import { RoadmapListTabs } from './ui/roadmap-list-tabs';
import { useModal } from '@/shared/store/store';

import { useGetUsersRoadmap } from './hooks/use-get-users-roadmap';
import { href, Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constans/routes';
import { Tag } from '@/shared/ui/tag';

export const RoadmapList = () => {
  const { handleViewChange, view } = useViewList();
  const { onOpen } = useModal();
  const { roadmaps } = useGetUsersRoadmap();

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
          <Button
            onClick={() =>
              onOpen({
                type: 'create-roadmap',
              })
            }
          >
            Create Roadmap
          </Button>
          <RoadmapListTabs onChange={handleViewChange} view={view} />
        </>
      }
      children={
        <RoadmapListItems
          view={view}
          children={roadmaps?.map((roadmap) => (
            <Link
              to={href(ROUTES.ROADMAP, { roadmapId: roadmap._id })}
              key={roadmap._id}
            >
              <RoadmapListItem
                key={roadmap._id}
                title={roadmap.title}
                description={roadmap.description}
                stages={roadmap.stages.length}
                tags={
                  <>
                    {roadmap.tags.map((tag) => (
                      <Tag
                        value={tag}
                        onClick={(value) => console.log(value)}
                        key={tag}
                        title={tag}
                      />
                    ))}
                  </>
                }
              />
            </Link>
          ))}
        />
      }
    />
  );
};
