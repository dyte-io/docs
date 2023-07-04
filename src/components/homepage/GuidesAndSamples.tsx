import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import {
  AppsAddInRegular,
  ArrowRightFilled,
  DocumentRegular,
  OpenRegular,
  RecordRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import clsx from 'clsx';
import { ChevronRight, GitHub } from 'react-feather';

const guides = [
  {
    title: 'Start Recording a Meeting',
    icon: RecordRegular,
    text: 'Check out an example of this integration of recording a meeting.',
  },
  {
    title: 'Migrate from Twilio or OpenTok',
    icon: VideoRegular,
    text: 'Migration simplified. Refer the guide.',
  },
  {
    title: 'Create a Breakout Room',
    icon: AppsAddInRegular,
    text: 'Easily split a meeting in separate sessions.',
  },
];

const samples = [
  {
    title: 'Slack Clone App',
    platform: 'React Native',
    source: 'hello',
    demo: 'hello',
  },
  {
    title: 'Slack Clone App',
    platform: 'Flutter',
    blog: 'hello',
    demo: 'hello',
  },
  {
    title: 'Slack Clone App',
    platform: 'Swift',
    blog: 'hello',
    source: 'hello',
  },
];

function Guide({ title, text, icon: Icon }: (typeof guides)[0]) {
  return (
    <Link className="group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary">
      <Icon className="h-6 w-6" />

      <div className="flex flex-col">
        <h4 className="mb-1 font-semibold">{title}</h4>
        <p className="mb-0 text-sm text-text-400">{text}</p>
      </div>

      <ChevronRight className="ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}

function Sample({ title, platform, blog, source, demo }: (typeof samples)[0]) {
  return (
    <div className="group flex cursor-pointer items-center justify-between rounded-lg border-2 border-transparent p-3 text-text-400/60 transition-colors hover:border-primary hover:text-primary">
      <div className="flex flex-col">
        <h4 className="mb-1 text-black group-hover:text-primary dark:text-white">
          {title}
        </h4>
        <div className="text-sm text-text-400">{platform}</div>
      </div>

      <div className="flex items-center gap-2.5">
        {blog && (
          <Link to={blog} className="text-inherit">
            <DocumentRegular className="h-5 w-5" />
          </Link>
        )}

        {demo && (
          <Link to={demo} className="text-inherit">
            <OpenRegular className="h-5 w-5" />
          </Link>
        )}

        {source && (
          <Link
            to={source}
            className="flex items-center gap-1 rounded-lg py-1 px-3 text-inherit transition-colors group-hover:bg-primary group-hover:text-white"
          >
            <GitHub className="h-4 w-4" />
            <span className="font-semibold">Clone</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function GuidesAndSamples() {
  return (
    <section className="mx-auto my-32 flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0">Popular how to guides</h3>

          <Link to="" className="font-jakarta text-sm font-semibold">
            View more guides <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {guides.map((guide) => (
            <Guide {...guide} key={guide.title} />
          ))}
        </div>
      </div>

      <div
        className={clsx(
          'mx-8 block flex-shrink-0 bg-gradient-to-b from-transparent via-secondary-700 to-transparent',
          'hidden w-px md:block'
        )}
      />

      <div className="w-full max-w-sm">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0">Popular sample apps</h3>

          <Link to="" className="font-jakarta text-sm font-semibold">
            All apps <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {samples.map((sample) => (
            <Sample {...sample} key={sample.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
