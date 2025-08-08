import { authTables } from '@convex-dev/auth/server';
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

const Resource = v.object({
  title: v.string(),
  url: v.string(),
});

// Схема для отдельного пункта (RoadmapItem)
const RoadmapItem = v.object({
  id: v.string(),
  title: v.string(),
  description: v.optional(v.string()),
  status: v.optional(
    v.union(v.literal('todo'), v.literal('in-progress'), v.literal('completed'))
  ),
  resources: v.optional(v.array(Resource)),
  difficulty: v.optional(
    v.union(
      v.literal('beginner'),
      v.literal('intermediate'),
      v.literal('advanced')
    )
  ),
});

// Схема для блока (RoadmapBlock)
const RoadmapBlock = v.object({
  id: v.string(),
  title: v.string(),
  description: v.optional(v.string()),
  status: v.optional(
    v.union(v.literal('todo'), v.literal('in-progress'), v.literal('completed'))
  ),
  items: v.array(RoadmapItem),
});

// Схема для стадии (RoadmapStage)
const RoadmapStage = v.object({
  id: v.string(),
  title: v.string(),
  description: v.optional(v.string()),
  status: v.optional(
    v.union(v.literal('todo'), v.literal('in-progress'), v.literal('completed'))
  ),
  blocks: v.array(RoadmapBlock),
});

// Основная схема Roadmap
const RoadmapType = v.object({
  id: v.string(),
  title: v.string(),
  description: v.string(),
  tags: v.array(v.string()),
  createdAt: v.string(), // ISO date string
  updatedAt: v.string(), // ISO date string
  author: v.optional(v.string()),
  totalStages: v.number(),
  totalBlocks: v.number(),
  totalItems: v.number(),
  stages: v.array(RoadmapStage),
});

export default defineSchema({
  ...authTables,
  users: defineTable({
    name: v.string(),
    email: v.string(),
  }),

  roadmaps: defineTable({
    title: v.string(),
    description: v.string(),
    tags: v.array(v.string()),
    createdAt: v.string(),
    updatedAt: v.string(),
    author: v.optional(v.string()),
    totalStages: v.number(),
    totalBlocks: v.number(),
    totalItems: v.number(),
    stages: v.array(RoadmapStage),
  })
    // Индексы
    .index('by_title', ['title'])
    .index('by_tags', ['tags'])
    .index('by_author', ['author'])
    .index('by_updated_at', ['updatedAt']),
});
