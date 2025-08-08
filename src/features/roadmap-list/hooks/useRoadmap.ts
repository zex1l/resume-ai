import { api } from 'convex/_generated/api';
import { useQuery } from 'convex/react';

export const useRoadmap = () => {
  const roadmaps = useQuery(api.roadmap.getAllRoadmaps);

  return { roadmaps };
};
