import { DatabaseFilled } from '@fluentui/react-icons';
import { Handle, NodeProps, Position } from 'reactflow';
import { clsx } from '../utils';
import React from 'react';

export type DatabaseProps = {
  active: boolean;
};

export default function Database({ data }: NodeProps<DatabaseProps>) {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center',
        data.active ? 'grayscale-0 opacity-100' : 'grayscale opacity-30',
      )}
    >
      <p className={'rounded-md px-2 py-1 bg-pink-500/90 text-white text-sm'}>
        Your Database
      </p>

      <DatabaseFilled className="w-16 h-16" />

      <Handle className={'w-2 h-2'} type="target" position={Position.Top} />
    </div>
  );
}
