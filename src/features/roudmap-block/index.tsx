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

export const RoadmapBlock = () => {
  const { roadmapBlock } = useGetRoadmapBlock();
  console.log(roadmapBlock);
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
