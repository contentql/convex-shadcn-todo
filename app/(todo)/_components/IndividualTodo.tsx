import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';
import React from 'react';

const IndividualTodo = ({ task }: { task: string }) => {
  return (
    <Card className='p-1 rounded-md flex justify-between items-center'>
      <p className='pl-2'>{task}</p>

      <div className='flex gap-2 '>
        <Button variant='outline' size='icon'>
          <Pencil2Icon className='h-4 w-4' />
        </Button>
        <Button variant='destructive' size='icon'>
          <TrashIcon className='h-4 w-4' />
        </Button>
      </div>
    </Card>
  );
};

export default IndividualTodo;
