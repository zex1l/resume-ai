import { Checkbox } from '@/shared/ui/checkbox';
import { useGetRoadmapBlock } from './hooks/use-get-roadmap-block';
import { RoudmapBlockHeader } from './ui/roudmap-block-header';
import {
  RoadmapBlockInnerItem,
  RoadmapBlockItem,
} from './ui/roudmap-block-item';
import { RoudmapBlockLayout } from './ui/roudmap-block-layout';
import {
  RoadmapBlockResourcesItem,
  RoadmapBlockResourcesList,
} from './ui/roudmap-block-resources';
import { api } from 'convex/_generated/api';
import { useQuery } from 'convex/react';
import { useChangeCompleted } from './hooks/use-change-colmpleted';

export const RoadmapBlock = () => {
  const { roadmapBlock } = useGetRoadmapBlock();
  const { onChangeCompleted } = useChangeCompleted();
  const user = useQuery(api.user.getProfile);

  return (
    <RoudmapBlockLayout
      header={
        <RoudmapBlockHeader
          title={roadmapBlock?.title}
          description={roadmapBlock?.description}
        />
      }
      children={
        <>
          {roadmapBlock?.blocks.map((item, key) => (
            <RoadmapBlockItem
              title={item.title}
              description={item.description}
              key={key}
              items={
                <>
                  {item.items.map((innerItem, key) => (
                    <RoadmapBlockInnerItem
                      actions={
                        <Checkbox
                          onClick={() => onChangeCompleted(innerItem.id)}
                          checked={innerItem.usersCompleted.some(
                            (userId) => userId === user?._id
                          )}
                        />
                      }
                      title={innerItem.title}
                      description={innerItem.description}
                      difficulty={innerItem.difficulty}
                      key={key}
                      index={key + 1}
                      resources={
                        innerItem.resources && (
                          <RoadmapBlockResourcesList
                            list={innerItem.resources.map((resource, key) => (
                              <RoadmapBlockResourcesItem
                                title={resource.title}
                                url={resource.url}
                                key={key}
                              />
                            ))}
                          />
                        )
                      }
                    />
                  ))}
                </>
              }
            />
          ))}
        </>
      }
    />
  );
};
