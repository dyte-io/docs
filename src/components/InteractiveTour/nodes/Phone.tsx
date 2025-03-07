import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';
import { clsx } from '../utils';
import { useStore } from '../store';
import React from 'react';

export type PhoneProps = {
  children: (step: number) => React.ReactNode;
  active: boolean;
};

export default function Phone({ data }: NodeProps<PhoneProps>) {
  const { currentStep } = useStore();
  return (
    <div
      className={clsx(
        'rounded-t-[28px] rounded-b-[36px] bg-pink-500/90 shadow-xl',
        data.active ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale',
      )}
    >
      <p
        className={
          'mb-0 rounded-t-md px-8 py-1 font-mono text-xs font-semibold text-white'
        }
      >
        Your Application
      </p>
      <div className="simulator nowheel bg-secondary-1000">
        <div className="h-full w-full bg-secondary-1000 p-2">
          {data.children(currentStep)}
        </div>
        <Handle className={'h-2 w-2'} type="source" position={Position.Right} />
      </div>
    </div>
  );
}

export function PhoneGeneric({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={clsx(
        'rounded-t-[28px] rounded-b-[36px] bg-pink-500/90 shadow-xl',
        'opacity-100 grayscale-0',
      )}
    >
      <p
        className={
          'mb-0 rounded-t-md px-8 py-1 font-mono text-xs font-semibold text-white'
        }
      >
        Your Application
      </p>
      <div className="simulator nowheel bg-secondary-1000">
        <div className="h-full w-full bg-secondary-1000 p-2">{children}</div>
      </div>
    </div>
  );
}
