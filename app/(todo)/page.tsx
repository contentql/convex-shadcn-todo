'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import ListTasks from './_views/ListTasks';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useTodoStore } from './_store/todo';

const TodoApp = () => {
  const { task, setTask } = useTodoStore();

  const mutation = useMutation(api.tasks.createTask);

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
        <Button
          onClick={() => {
            mutation({ task });
            setTask('');
          }}
        >
          Add Task
        </Button>
      </div>
      <div className='w-3/4 mx-auto justify-center align-middle'>
        <ListTasks />
      </div>
    </div>
  );
};

export default TodoApp;
