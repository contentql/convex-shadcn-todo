import { create } from 'zustand';
import { Id, Doc } from '@/convex/_generated/dataModel';

type EditingId = Doc<'tasks'>;

// use zod
type TodoTask = {
  task: string;
  editing: boolean;
  editingId: Id<'tasks'>;
  setTask: (newTask: string) => void;
  setEditing: (status: boolean) => void;
  setEditingId: (editingId: Id<'tasks'> | undefined) => void;
};

// use immerjs
export const useTodoStore = create<TodoTask>()((set) => ({
  task: '',
  editing: false,
  editingId: '',
  setTask: (newTask) => set((state) => ({ ...state, task: newTask })),
  setEditing: (status) => set((state) => ({ ...state, editing: status })),
  setEditingId: (editingId) => set((state) => ({ ...state, editingId })),
}));
