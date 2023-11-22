'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import ListTasks from './_views/ListTasks';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useTodoStore } from './_store/todo';

const TodoApp = () => {
  const { task, setTask, editing, editingId, setEditingId, setEditing } =
    useTodoStore();

  const createTask = useMutation(api.tasks.createTask);
  const updateTask = useMutation(api.tasks.updateTask);

  return (
    <div>
      <h1 className='text-center font-bold text-5xl'>Todo Application</h1>
      <div className='flex justify-center gap-2 p-4'>
        <Input
          type='text'
          placeholder='Enter your Task'
          className='w-1/2'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        {!editing ? (
          <Button
            onClick={() => {
              createTask({ task });
              setTask('');
            }}
          >
            Add Task
          </Button>
        ) : (
          <Button
            onClick={() => {
              updateTask({ id: editingId, updatedTaskTo: task });
              setTask('');
              setEditingId(undefined);
              setEditing(false);
            }}
          >
            Update Task
          </Button>
        )}
      </div>
      <div className='w-3/4 mx-auto justify-center align-middle'>
        <ListTasks />
      </div>
    </div>
  );
};

export default TodoApp;
