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
                usersCompleted: v.array(v.string()),
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

export const changeRoadmapBlockStatus = mutation({
  args: {
    id: v.id('usersRoadmaps'),
    blockId: v.string(),
    itemId: v.string(),
  },
  handler: async (ctx, { blockId, id, itemId }) => {
    const userSubject = (await ctx.auth.getUserIdentity())?.subject;

    const indexReplace = userSubject?.indexOf('|');

    if (!indexReplace) throw new Error('Not authenticated');

    const userId = indexReplace
      ? userSubject?.slice(0, indexReplace)
      : userSubject;

    if (!userId) throw new Error('Not authenticated');

    const currentRoadmap = await ctx.db
      .query('usersRoadmaps')
      .filter((q) => q.eq(q.field('_id'), id))
      .first();

    if (!currentRoadmap) throw new Error('Roadmap not found');

    const currentBlock = currentRoadmap.stages.filter((stage) =>
      stage.blocks.some((block) => block.id === blockId)
    )[0];

    if (!currentBlock) throw new Error('Block not found');

    const currentItem = currentBlock.blocks.filter((block) =>
      block.items.some((item) => item.id === itemId)
    )[0];

    if (!currentItem) throw new Error('Item not found');

    const currentInnerItem = currentItem.items.filter(
      (item) => item.id === itemId
    )[0];

    let completed = false;

    if (currentInnerItem.usersCompleted.includes(userId)) {
      currentInnerItem.usersCompleted = currentInnerItem.usersCompleted.filter(
        (id) => id !== userId
      );
      completed = false;
    } else {
      currentInnerItem.usersCompleted.push(userId);
      completed = true;
    }

    await ctx.db.patch(id, currentRoadmap);

    return { completed };
  },
});
