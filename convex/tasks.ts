import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const createTask = mutation({
  args: {
    task: v.string(),
  },
  handler: async (ctx, args) => {
    const newTaskId = await ctx.db.insert('tasks', {
      task: args.task,
    });

    return newTaskId;
  },
});

export const getAllTasks = query({
  args: {},
  handler: async (ctx, args) => {
    const allTasks = ctx.db.query('tasks').collect();
    return allTasks;
  },
});

export const deleteTask = mutation({
  args: { id: v.id('tasks') },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
