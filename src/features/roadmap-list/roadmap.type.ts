export type ProgresType = 'todo' | 'in-progress' | 'completed';

export type RoadmapItem = {
  id: string;
  title: string;
  description?: string;
  status?: ProgresType;
  resources?: {
    title: string;
    url: string;
  }[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  usersCompleted: string[];
};

// Тип для блока (например, "Функции и замыкания")
export type RoadmapBlock = {
  id: string;
  title: string;
  description?: string;
  status?: ProgresType;
  items: RoadmapItem[];
};

// Тип для стадии (например, "Уровень 1: Начинающий")
export type RoadmapStage = {
  id: string;
  title: string;
  description?: string;
  status?: ProgresType;
  blocks: RoadmapBlock[];
};

// Основной тип Roadmap
export type RoadmapType = {
  id: string;
  title: string;
  description: string;
  tags: string[]; // например: ['frontend', 'javascript', 'junior']
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  author?: string;
  totalStages: number;
  totalBlocks: number;
  totalItems: number;
  stages: RoadmapStage[];
};
