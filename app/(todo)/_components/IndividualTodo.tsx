import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';

const IndividualTodo = ({ task }: { task: Doc<'tasks'> }) => {
  const mutation = useMutation(api.tasks.deleteTask);

  return (
    <Card className='p-1 rounded-md flex justify-between items-center'>
      <p className='pl-2'>{task.task}</p>

      <div className='flex gap-2 '>
        <Button variant='secondary' size='icon'>
          <Pencil2Icon className='h-4 w-4' />
        </Button>
        <Button
          variant='destructive'
          size='icon'
          onClick={() => mutation({ id: task?._id })}
        >
          <TrashIcon className='h-4 w-4' />
        </Button>
      </div>
    </Card>
  );
};

export default IndividualTodo;
