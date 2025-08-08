import { useAction, useMutation, useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import type { RoadmapType } from '../roadmap.type';
import { useState } from 'react';
import { toast } from 'sonner';

export const useAddRoadmap = () => {
  const [isLoading, setLoading] = useState(false);
  const user = useQuery(api.user.getProfile);

  const mutation = useMutation(api.roadmap.createRoadmap);
  const aiMutate = useAction(api.ai.getAIResponse);

  const onCreateRoadmap = async (prompt: string) => {
    setLoading(true);

    try {
      const aiResponse = await aiMutate({ prompt });
      if (!aiResponse) {
        toast.error('AI response is empty');
        throw new Error('AI response is empty');
      }

      if (!user) {
        toast.error('User not found');
        throw new Error('User not found');
      }

      const result = aiResponse
        .replace(/```json/g, '')
        .replace(/```javascript/g, '')
        .replace(/```/g, '')
        .replace(/^[\s\n\r]+/, '')
        .replace(/[\s\n\r]+$/, '')
        .trim();

      const data: RoadmapType = JSON.parse(result);

      const transformedStages = data.stages.map((stage) => ({
        id: stage.id,
        title: stage.title,
        description: stage.description,
        status: stage.status,
        blocks: stage.blocks.map((block) => ({
          id: block.id,
          title: block.title,
          description: block.description,
          status: block.status,
          items: block.items.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            status: block.status,
            resources: item.resources,
            difficulty: item.difficulty,
          })),
        })),
      }));

      mutation({
        title: data.title,
        description: data.description,
        tags: data.tags,
        stages: transformedStages,
        email: user.email,
        author: data.author,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      })
        .then(() => toast.success('Roadmap created'))
        .catch((error) => {
          toast.error('Failed to create roadmap');
          console.error('Mutation error:', error);
        });

      setLoading(false);
    } catch (error) {
      setLoading(false);

      toast.error('Failed to create roadmap');
      console.error(error);
    }
  };

  return { onCreateRoadmap, isLoading };
};
