'use client';
import React from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import IndividualTodo from '../_components/IndividualTodo';

const ListTasks = () => {
  const tasks = useQuery(api.tasks.getAllTasks);

  return (
    <div className='flex flex-col-reverse gap-2'>
      {tasks?.map(({ _id, task }) => (
        <IndividualTodo key={_id} task={task} />
      ))}
    </div>
  );
};

export default ListTasks;
