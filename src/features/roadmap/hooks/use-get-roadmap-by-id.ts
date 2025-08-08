import { api } from 'convex/_generated/api';
import type { Id } from 'convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { useParams } from 'react-router-dom';

export const useGetRoadmapById = () => {
  const params = useParams();

  const roadmapId = (params.roadmapId as string) || '';

  const roadmap = useQuery(api.roadmap.getRoadmap, {
    id: roadmapId as Id<'usersRoadmaps'>,
  });

  return { roadmap };
};
