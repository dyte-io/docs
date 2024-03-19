import { CheckmarkCircleFilled } from '@fluentui/react-icons';
import React, { useEffect, useRef, useState } from 'react';
import { faker } from '@faker-js/faker';
import CodeBlock from '@theme/CodeBlock';
import useConnectedLine from './Onboarding/useConnectedLine';
import Line from './Onboarding/Line';

const tabs = [
  { name: 'Request', href: '#', current: true },
  { name: 'Response', href: '#', current: false },
];

const steps = [
  {
    href: '#',
    name: 'Create a meeting',
    status: 'complete',
  },
  {
    href: '#add-participant',
    name: 'Add a participant',
    status: 'current',
  },
  {
    href: '#init-sdk',
    name: 'Initialize SDK',
  },
  {
    href: '#join-meeting',
    name: 'Join meeting',
  },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function InteractiveOnboarding() {
  const [selected, setSelected] = useState(steps[0].href);
  const lineRef = useRef();
  const [s1, e1, p1] = useConnectedLine({
    lineElem: lineRef,
    startElemPos: 'right-center',
    endElemPos: 'left-center',
  });
  const [s2, e2, p2] = useConnectedLine({
    lineElem: lineRef,
    startElemPos: 'right-center',
    endElemPos: 'left-center',
  });

  return (
    <div className="api-demo flex min-h-screen w-full">
      <div className="hidden border-secondary-700 lg:block">
        <div className="flex h-full min-w-[256px] flex-col gap-2">
          <div className="flex h-14 items-center border-b">
            <div className="flex items-center gap-2 font-semibold text-text-400/80">
              <span className="">Getting Started</span>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4 pl-1">
            <ol className="!list-none space-y-2 pl-0">
              {steps.map((step) => (
                <li key={step.name}>
                  {step.href === selected ? (
                    <a
                      href={step.href}
                      onClick={() => setSelected(step.href)}
                      className="flex items-start rounded-md bg-secondary-700 p-2 hover:no-underline"
                      aria-current="step"
                    >
                      <span
                        className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                        aria-hidden="true"
                      >
                        <span className="absolute h-5 w-5 rounded-full bg-indigo-200" />
                        <span className="relative block h-3 w-3 rounded-full bg-primary" />
                      </span>
                      <span className="ml-3 text-sm font-medium text-primary">
                        {step.name}
                      </span>
                    </a>
                  ) : step.status === 'complete' ? (
                    <a
                      href={step.href}
                      onClick={() => setSelected(step.href)}
                      className="flex rounded-md p-2 hover:bg-secondary-700/60 hover:no-underline"
                    >
                      <span className="flex items-start">
                        <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                          <CheckmarkCircleFilled
                            className="h-full w-full text-green-600 group-hover:text-indigo-800"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="ml-3 text-sm font-medium text-text-400 group-hover:text-gray-900">
                          {step.name}
                        </span>
                      </span>
                    </a>
                  ) : (
                    <a
                      href={step.href}
                      onClick={() => setSelected(step.href)}
                      className="flex rounded-md p-2 hover:bg-secondary-700/60 hover:no-underline"
                    >
                      <div className="flex items-start">
                        <div
                          className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                          aria-hidden="true"
                        >
                          <div className="bg-text-300 h-2 w-2 rounded-full group-hover:bg-gray-400" />
                        </div>
                        <div className="text-text-300 ml-3 text-sm font-medium group-hover:text-gray-900">
                          {step.name}
                        </div>
                      </div>
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <main className="flex flex-1 flex-col p-4">
          <div className="grid h-[756px] rounded-xl border border-secondary-700">
            <Line refX={lineRef} pathRefs={[p1, p2]} />
            <div className="flex h-full items-center justify-start space-x-32">
              <div className="relative pl-4">
                <div
                  className="simulator absolute m-4 mr-6 ml-8 h-[560px] w-[280px] overflow-y-auto overflow-x-hidden p-4"
                  ref={s1}
                >
                  <div className="h-full w-full rounded-[48px]">
                    <DoctorBookMeeting />
                  </div>
                </div>
                <img
                  src="/static/guides/cutout.png"
                  alt="mobile-simulator"
                  className="mobile-simulator z-20 h-[600px] w-[340px]"
                />
              </div>
              <div ref={e1}>
                <div
                  className="rounded-lg bg-secondary-700 px-2 py-3 text-text-400"
                  ref={s2}
                >
                  Your server
                </div>
              </div>
              <div className='flex flex-col items-center space-y-32'>
                <div ref={e2}>
                  <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {tabs.map((tab) => (
                        <a
                          key={tab.name}
                          href={tab.href}
                          className={classNames(
                            tab.current
                              ? 'border-indigo-500 text-indigo-600'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                          )}
                          aria-current={tab.current ? 'page' : undefined}
                        >
                          {tab.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <CodeBlock
                    language="http"
                    title="POST /meetings"
                    showLineNumbers
                    className="mt-2"
                    children={`{ \n   title: "Meeting with Dr. Jovan"\n }
                    `}
                  />
                </div>
                <div className='flex w-4 h-4 bg-red-300'></div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function DoctorBookMeeting() {
  return (
    <div className="w-full">
      <main className="mt-6 grid gap-6 px-0 pb-6">
        <div>
          <h1 className="mt-2 text-xl font-bold">Find a Doctor</h1>
          <div className="w-full max-w-[400px]">
            <input
              type="search"
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring -mt-2 flex h-10 w-full rounded-md border border-secondary-700 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search by name or specialty"
            />
          </div>
        </div>
        <div className="grid gap-6">
          {['Cardiology', 'Dermatology', 'Pediatrics', 'Psychiatrist'].map(
            (e, index) => (
              <div
                key={e}
                className="bg-card text-card-foreground rounded-lg border border-secondary-700 shadow-sm"
                data-v0-t="card"
              >
                <div className="p-4">
                  <div className="flex flex-col">
                    <div className="mb-4 flex flex-row items-center justify-between">
                      <img
                        src={faker.image.avatar()}
                        width="40"
                        height="40"
                        alt="Dr. Smith"
                        className="mx-2 aspect-square overflow-hidden rounded-full object-cover"
                      />
                      <div className="flex flex-1 flex-col pl-4">
                        <p className="text-md mb-0 font-semibold">
                          Dr {faker.name.firstName()} {faker.name.lastName()}
                        </p>
                        <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">
                          {e}
                        </p>
                      </div>
                    </div>
                    <button className="book-now relative cursor-pointer">
                      {index === 0 && (
                        <div className="absolute -right-1 -top-1">
                          <span className="relative h-4 w-4">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75"></span>
                            <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500">
                              <span className="text-xs font-bold">1</span>
                            </span>
                          </span>
                        </div>
                      )}
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}
