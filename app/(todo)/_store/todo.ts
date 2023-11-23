import { create } from 'zustand';
import { Id } from '@/convex/_generated/dataModel';
import { produce } from 'immer';

const initialValues = {
  task: '',
  editing: false,
};

type TodoTask = typeof initialValues & {
  setTask: (newTask: string) => void;
  setEditing: (status: boolean) => void;
  setEditingId: (editingId: Id<'tasks'>) => void;
} & {
  editingId: Id<'tasks'>;
};

export const useTodoStore = create<TodoTask>()((set) => ({
  ...initialValues,
  editingId: undefined!,
  setTask: (newTask) => set(() => ({ task: newTask })),
  setEditing: (status) =>
    set((state) =>
      produce(state, (draft) => {
        draft.editing = status;
      }),
    ),
  setEditingId: (editingId) => set(() => ({ editingId })),
}));

/*
type TodoTask1 = {
  task: string;
  editing: boolean;
  editingId: Id<'tasks'>;
  setTask: (newTask: string) => void;
  setEditing: (status: boolean) => void;
  setEditingId: (editingId: Id<'tasks'>) => void;
};
*/

/*

  How to convert a normal state to immer specific

  Without Immer
  setEditing: (status) => set((state) => ({ ...state, editing: status })),

  With Immer
  setEditing: (status) =>
    set((state) =>
      produce(state, (draft) => {
        draft.editing = status;
      }),
    ),
*/
