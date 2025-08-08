import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import type { RoadmapType } from '../roadmap.type';
import { useState } from 'react';

export const useAddRoadmap = () => {
  const [isLoading, setLoading] = useState(false);
  const mutation = useMutation(api.roadmap.createRoadmap);

  const onCreateRoadmap = async (data: RoadmapType) => {
    setLoading(true);
    try {
      const roadmap = await mutation(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return { onCreateRoadmap, isLoading };
};
