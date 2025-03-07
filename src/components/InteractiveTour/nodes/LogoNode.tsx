import { Handle, NodeProps, Position } from 'reactflow';
import { clsx } from '../utils';
import React from 'react';

export type LogoNodeProps = {
  active: boolean;
};

export default function LogoNode({ data }: NodeProps<LogoNodeProps>) {
  return (
    <div
      className={clsx(
        data.active ? 'grayscale-0 opacity-100' : 'grayscale opacity-30',
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <svg
          className="h-8  text-blue-600"
          viewBox="0 0 88 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.543 18.606c0-1.329.26-2.508.78-3.536.534-1.029 1.258-1.82 2.171-2.374.913-.553 1.928-.83 3.046-.83.85 0 1.66.19 2.431.57.772.363 1.386.854 1.842 1.47V7.666h3.353v17.563h-3.353v-1.946c-.41.649-.984 1.171-1.723 1.567-.74.395-1.598.593-2.574.593a5.596 5.596 0 01-3.022-.855c-.913-.57-1.637-1.368-2.172-2.397-.52-1.044-.779-2.239-.779-3.584zm10.294.048c0-.807-.158-1.495-.473-2.065-.314-.586-.74-1.029-1.274-1.33a3.329 3.329 0 00-1.724-.474c-.614 0-1.18.15-1.7.451-.52.3-.944.744-1.275 1.33-.314.569-.472 1.25-.472 2.04 0 .791.158 1.488.472 2.089.33.585.756 1.036 1.275 1.353a3.288 3.288 0 001.7.475c.614 0 1.188-.15 1.724-.451.535-.317.96-.76 1.274-1.33.315-.585.473-1.281.473-2.088zm19.07-6.575l-8.098 19.368H53.29l2.833-6.55-5.241-12.818h3.706l3.377 9.186 3.423-9.186h3.518zm5.63 2.73v6.36c0 .444.102.768.307.974.22.19.582.285 1.086.285h1.535v2.8h-2.078c-2.786 0-4.179-1.36-4.179-4.082v-6.337H65.65v-2.73h1.558V8.828h3.329v3.251h2.928v2.73h-2.928zm17.464 3.56c0 .475-.032.902-.095 1.282h-9.562c.08.949.41 1.693.992 2.23.582.539 1.299.808 2.149.808 1.227 0 2.1-.53 2.62-1.59h3.565c-.377 1.265-1.102 2.31-2.172 3.133-1.07.806-2.384 1.21-3.943 1.21-1.259 0-2.392-.277-3.4-.83a6.099 6.099 0 01-2.337-2.398c-.55-1.028-.826-2.215-.826-3.56 0-1.361.275-2.556.826-3.584a5.783 5.783 0 012.314-2.374c.992-.553 2.133-.83 3.423-.83 1.244 0 2.353.269 3.33.807a5.552 5.552 0 012.29 2.302c.55.98.826 2.112.826 3.394zm-3.424-.95c-.015-.854-.322-1.534-.92-2.04-.599-.523-1.33-.784-2.196-.784-.819 0-1.511.253-2.078.76-.55.49-.889 1.178-1.015 2.065h6.21z"
            className="fill-current text-text"
          ></path>
          <path
            d="M30.827 17.317H17.711v13.186h13.116V17.317z"
            className="fill-current text-primary"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.581 14.521V.184a24.576 24.576 0 00-.656-.009C11.525.175.66 11.097.66 24.57c0 .22.003.44.009.66H14.9V14.522h10.68z"
            className="fill-current text-primary"
          ></path>
        </svg>
        <span className="ml-1 font-semibold">REST API</span>
      </div>
      <Handle className={'w-2 h-2'} type="target" position={Position.Bottom} />
    </div>
  );
}
