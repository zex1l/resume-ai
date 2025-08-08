import type { ExpressionOrValue } from 'convex/server';
import type { Id } from './_generated/dataModel';
import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const createRoadmap = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    tags: v.array(v.string()),
    author: v.optional(v.string()),
    email: v.string(),
    createdAt: v.string(),
    updatedAt: v.string(),
    stages: v.array(
      v.object({
        id: v.string(),
        title: v.string(),
        description: v.optional(v.string()),
        status: v.optional(
          v.union(
            v.literal('todo'),
            v.literal('in-progress'),
            v.literal('completed')
          )
        ),
        blocks: v.array(
          v.object({
            id: v.string(),
            title: v.string(),
            description: v.optional(v.string()),
            status: v.optional(
              v.union(
                v.literal('todo'),
                v.literal('in-progress'),
                v.literal('completed')
              )
            ),
            items: v.array(
              v.object({
                id: v.string(),
                title: v.string(),
                description: v.optional(v.string()),
                status: v.optional(
                  v.union(
                    v.literal('todo'),
                    v.literal('in-progress'),
                    v.literal('completed')
                  )
                ),
                resources: v.optional(
                  v.array(
                    v.object({
                      title: v.string(),
                      url: v.string(),
                    })
                  )
                ),
                difficulty: v.optional(
                  v.union(
                    v.literal('beginner'),
                    v.literal('intermediate'),
                    v.literal('advanced')
                  )
                ),
              })
            ),
          })
        ),
      })
    ),
  },
  handler: async (ctx, args) => {
    const { title, description, tags, author, stages, email } = args;
    console.log({ email });
    // Подсчёт количества
    const totalStages = stages.length;
    const totalBlocks = stages.reduce(
      (acc, stage) => acc + stage.blocks.length,
      0
    );
    const totalItems = stages.reduce(
      (acc, stage) =>
        acc + stage.blocks.reduce((b, block) => b + block.items.length, 0),
      0
    );

    const roadmapData = {
      title,
      description,
      tags,
      author: author ?? undefined,
      totalStages,
      totalBlocks,
      totalItems,
      stages,
      email,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Вставляем в таблицу
    const insertedId = await ctx.db.insert('usersRoadmaps', roadmapData);
    return { id: insertedId, ...roadmapData };
  },
});

export const getAllRoadmaps = query({
  handler: async (ctx) => {
    return await ctx.db.query('usersRoadmaps').collect();
  },
});

export const getRoadmap = query({
  args: { id: v.id('usersRoadmaps') },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});

export const getUserRoadmaps = query({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    return await ctx.db
      .query('usersRoadmaps')
      .withIndex('by_author')
      .filter((q) => q.eq(q.field('email'), email))
      .collect();
  },
});

export const getRoadmapBlock = query({
  args: {
    id: v.id('usersRoadmaps'),
    blockId: v.string(),
  },
  handler: async (ctx, { id, blockId }) => {
    const currentRoadmap = await ctx.db
      .query('usersRoadmaps')
      .filter((q) => q.eq(q.field('_id'), id))
      .first();

    if (!currentRoadmap) throw new Error('Roadmap not found');

    const currentBlock = currentRoadmap.stages.filter((stage) =>
      stage.blocks.some((block) => block.id === blockId)
    )[0];

    return currentBlock;
  },
});
