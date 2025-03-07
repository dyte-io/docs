import { Handle, NodeProps, Position } from 'reactflow';
import { clsx } from '../utils';
import { useStore } from '../store';
import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export type RestAPIPlayerProps = {
  active: boolean;
};

const Add_participant_req = `{
    "name": "Mary Sue",
    "preset_name": "group_call_host",
    "custom_participant_id": "<UserId>"

    
}`;

const restAPISteps: {
  [key: number]: { tag: string; endpoint: string; desc: string };
} = {
  2: {
    tag: 'POST',
    endpoint: '/v2/meetings',
    desc: `\n{\n\ttitle: "Meeting with Doctor"\n}\n\n\n\n`,
  },
  3: {
    tag: '201',
    endpoint: '/v2/meetings',
    desc: `{\n\tsuccess: true,\n\t"data": {\n\t\t"id": "497f6eca-6276...", \n\t\t"title":"Meeting with Doctor"\n\t\t.\n\t\t.`,
  },
  4: {
    tag: '201',
    endpoint: '/v2/meetings',
    desc: `{\n\tsuccess: true,\n\t"data": {\n\t\t"id": "497f6eca-6276...", \n\t\t"title":"Meeting with Doctor"\n\t\t.\n\t\t.`,
  },
  6: {
    tag: 'POST',
    endpoint: '/v2/meetings/{id}/participants',
    desc: Add_participant_req,
  },
  7: {
    tag: '201',
    endpoint: '/v2/meetings/{id}/participants',
    desc: `{\n\tsuccess: true,\n\t"data": {\n\t\t"id": "497f6eca-6276...", \n\t\t"token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXV"\n\t\t.\n\t\t.`,
  },
  8: {
    tag: '201',
    endpoint: '/v2/meetings/{id}/participants',
    desc: `{\n\tsuccess: true,\n\t"data": {\n\t\t"id": "497f6eca-6276...", \n\t\t"token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXV..."\n\t\t.\n\t\t.`,
  },
};

export default function RestAPIPlayer({ data }: NodeProps<RestAPIPlayerProps>) {
  const { currentStep } = useStore();
  const { tag, endpoint, desc } = restAPISteps[currentStep] ?? {};
  return (
    <div
      className={clsx(
        'rounded-xl rounded-b-[16px] bg-pink-500/90 shadow-xl px-0.5 pb-0.5',
        data.active ? 'grayscale-0 opacity-100' : 'grayscale opacity-30',
      )}
    >
      <div className={'rounded-t-md px-2 py-1 mb-0 text-white text-xs'}>
        Your Server
      </div>

      <div className="overflow-hidden rounded-2xl bg-zinc-100 shadow-md dark:ring-1 dark:ring-white/10">
        <div className="not-prose">
          <div>
            <div
              id="headlessui-tabs-panel-:rc:"
              role="tabpanel"
              data-headlessui-state="selected"
              aria-labelledby="headlessui-tabs-tab-:r8:"
            >
              <div className="group dark:bg-white/2.5">
                <div className="flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-white/2.5 bg-zinc-200 px-4 dark:border-b-white/5 dark:bg-white/1">
                  <div className="dark flex">
                    <span className="font-mono text-[0.625rem] font-semibold p-1 bg-emerald-500 text-white rounded-lg">
                      {tag}
                    </span>
                  </div>
                  <span className="h-0.5 w-0.5 rounded-full bg-zinc-500"></span>
                  <span className="font-mono text-xs text-zinc-900 font-semibold">
                    {endpoint}
                  </span>
                </div>
                <div className="relative">
                  <div className="overflow-x-auto text-xs text-zinc-700 block justify-start items-center w-[22rem] h-36 bg-zinc-200">
                    <CodeBlock language="json">{desc}</CodeBlock>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Handle
        className={'w-1 h-1'}
        type="target"
        position={Position.Left}
        id="phone-conn"
      />
      <Handle
        className={'w-1 h-1'}
        type="source"
        position={Position.Bottom}
        id="db-conn"
      />
      <Handle
        className={'w-1 h-1'}
        type="source"
        position={Position.Right}
        id="dyte-conn"
      />
    </div>
  );
}
