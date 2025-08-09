import type { BageColor } from '../ui/color-bage';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export const setColorByDifficulty = (
  tag: 'beginner' | 'intermediate' | 'advanced'
): BageColor => {
  switch (tag) {
    case 'beginner':
      return 'green';
    case 'intermediate':
      return 'yellow';
    case 'advanced':
      return 'red';
    default:
      return 'purple';
  }
};
