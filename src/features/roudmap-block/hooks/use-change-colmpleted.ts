import {
  alreadyCompletedMotivations,
  successCompleteItemText,
} from '@/shared/constans/textConstants';
import { getRandomTextFromArray } from '@/shared/utils/get-random-text-from-array';
import { api } from 'convex/_generated/api';
import type { Id } from 'convex/_generated/dataModel';
import { useMutation } from 'convex/react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

export const useChangeCompleted = () => {
  const { roadmapId, blockId } = useParams<{
    roadmapId: string;
    blockId: string;
  }>();

  const mutationCompleteTask = useMutation(
    api.userRoadmap.changeRoadmapBlockStatus
  );

  const onChangeCompleted = (itemId: string) => {
    mutationCompleteTask({
      blockId: blockId as string,
      id: roadmapId as Id<'usersRoadmaps'>,
      itemId,
    })
      .then((res) =>
        res.completed
          ? toast.success(getRandomTextFromArray(successCompleteItemText))
          : toast.warning(getRandomTextFromArray(alreadyCompletedMotivations))
      )
      .catch(() => toast.error('Something went wrong'));
  };

  return {
    onChangeCompleted,
  };
};
