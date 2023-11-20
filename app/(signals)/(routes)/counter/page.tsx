'use client';

import { signal } from '@preact/signals-core';
import { useSignalState } from '@/hooks/useSignalState';

const counter = signal(0);

const Counter = () => {
  const counterState = useSignalState(counter);

  return (
    <div>
      <div>Counter: {counterState}</div>
      <button onClick={() => counter.value++}>Add One</button>
    </div>
  );
};

export default Counter;
