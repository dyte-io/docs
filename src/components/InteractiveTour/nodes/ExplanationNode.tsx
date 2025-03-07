import React from 'react';
import { useStore } from '../store';
import Markdown from 'react-markdown';

const explanationSteps: { [key: number]: { title: string; desc: string } } = {
  0: {
    title: '',
    desc: '',
  },
  1: {
    title: 'User books a meeting',
    desc: 'The flow starts when your user or you want to create or schedule a meeting',
  },
  2: {
    title: 'Create meeting on Dyte',
    desc: 'Your server now makes a POST request to Dyte REST API [/v2/meetings](https://docs.dyte.io/api#/operations/create_meeting) endpoint to create a new meeting',
  },
  3: {
    title: 'Handle the response',
    desc: 'Dyte REST API responds with the details of the newly created meeting',
  },
  4: {
    title: 'Store the details',
    desc: 'Store the **meetingId** along with your metadata of the meeting (time of the meeting etc)',
  },
  5: {
    title: 'User wants to join the meeting',
    desc: 'The **authToken** generation flow starts when the user is supposed to join the meeting, this can be right after creating a meeting or at a scheduled time',
  },
  6: {
    title: 'Add participant on Dyte',
    desc: 'Your server now makes a **POST** request to the [Add Participant](https://docs.dyte.io/api#/operations/add_participant) endpoint to generate a token',
  },
  7: {
    title: 'Forward the response',
    desc: 'The response contains the token that is required for the user to authenticate to the meeting, forward it to the client',
  },
};

export default function ExplanationNode() {
  const { incStep, currentStep } = useStore();
  const { title, desc } = explanationSteps[currentStep] || {
    title: '',
    desc: '',
  };
  return (
    <div>
      <div className="overflow-hidden rounded-xl bg-secondary-700 shadow-md dark:ring-1 dark:ring-white/20 w-60">
        <div className="not-prose">
          <div>
            <div
              id="headlessui-tabs-panel-:rc:"
              role="tabpanel"
              data-headlessui-state="selected"
              aria-labelledby="headlessui-tabs-tab-:r8:"
            >
              <div className="group dark:bg-secondary-1000/2.5">
                <div className="flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-secondary-1000/2.5 bg-zinc-500 px-4 dark:border-b-white/5 dark:bg-secondary-1000/1">
                  <span className="font-mono text-xs text-white font-semibold">
                    {title}
                  </span>
                </div>
                <div className="relative flex flex-col markdown-body">
                  <Markdown
                    className="text-wrap p-3 pb-0 text-xs text-zinc-700 dark:text-white pr-3"
                    linkTarget="_blank"
                  >
                    {desc}
                  </Markdown>
                  <div className="flex justify-end p-2">
                    <button className="btn" onClick={() => incStep()}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
