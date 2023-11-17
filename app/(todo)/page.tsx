import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';
import { TrashIcon, Pencil2Icon } from '@radix-ui/react-icons';

const TodoApp = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-5xl'>Todo Application</h1>
      <div className='flex justify-center gap-2 p-4'>
        <Input type='text' placeholder='Enter your Task' className='w-1/2' />
        <Button>Add Task</Button>
      </div>

      <div className='flex flex-row justify-center gap-2'>
        <Card className='w-1/2 p-1 rounded-md flex justify-between items-center'>
          <p className='pl-2'>Hello</p>

          <div className='flex gap-2 '>
            <Button variant='outline' size='icon'>
              <Pencil2Icon className='h-4 w-4' />
            </Button>
            <Button variant='destructive' size='icon'>
              <TrashIcon className='h-4 w-4' />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TodoApp;
