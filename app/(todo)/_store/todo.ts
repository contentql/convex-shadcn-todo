import { create } from 'zustand';

type TodoTask = {
  task: string;
  setTask: (newTask: string) => void;
};

export const useTodoStore = create<TodoTask>()((set) => ({
  task: '',
  setTask: (newTask) => set((state) => ({ task: newTask })),
}));
