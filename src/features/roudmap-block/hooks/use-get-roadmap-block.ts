import { api } from 'convex/_generated/api';
import type { Id } from 'convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { useParams } from 'react-router-dom';

export const useGetRoadmapBlock = () => {
  const { roadmapId, blockId } = useParams<{
    roadmapId: string;
    blockId: string;
  }>();

  const roadmapBlock = useQuery(api.userRoadmap.getRoadmapBlock, {
    id: roadmapId as Id<'usersRoadmaps'>,
    blockId: (blockId as string) || '',
  });

  return { roadmapBlock };
};
