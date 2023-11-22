import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const createTask = mutation({
  args: {
    task: v.string(),
  },
  handler: async (ctx, args) => {
    const { task } = args;

    await ctx.db.insert('tasks', {
      task: task,
    });
  },
});

export const updateTask = mutation({
  args: {
    id: v.id('tasks'),
    updatedTaskTo: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, updatedTaskTo } = args;

    await ctx.db.patch(id, { task: updatedTaskTo });
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
    const { id } = args;

    await ctx.db.delete(id);
  },
});
