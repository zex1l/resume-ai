import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const createRoadmap = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    tags: v.array(v.string()),
    author: v.optional(v.string()),
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
    const { title, description, tags, author, stages } = args;

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
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Вставляем в таблицу
    const insertedId = await ctx.db.insert('roadmaps', roadmapData);
    return { id: insertedId, ...roadmapData };
  },
});

export const getAllRoadmaps = query({
  handler: async (ctx) => {
    return await ctx.db.query('roadmaps').collect();
  },
});
