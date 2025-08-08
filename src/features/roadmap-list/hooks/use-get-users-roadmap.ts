import { api } from 'convex/_generated/api';
import { useQuery } from 'convex/react';

export const useGetUsersRoadmap = () => {
  const user = useQuery(api.user.getProfile);

  const roadmaps = useQuery(api.userRoadmap.getUserRoadmaps, {
    email: user?.email || '',
  });

  return { roadmaps };
};
