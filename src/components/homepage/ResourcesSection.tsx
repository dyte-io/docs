import Link from '@docusaurus/Link';
import React, { useState } from 'react';
import clsx from 'clsx';
import { ArrowRightFilled } from '@fluentui/react-icons';

const RESOURCES = [
  {
    url: '/guides/v2-migration-guide',
    type: 'blog',
    title: 'Migrate to v2 REST API',
    description:
      'Excited to announce the release of our v2 REST APIs, which are faster, more idiomatic, and easier to use.',
    image:
      'https://dyte.io/blog/content/images/size/w1000/2023/02/Dyte-Blog---v2-APIs.jpg',
    duration: '3 min',
  },
  {
    url: 'https://dyte.io/blog/schedule-send-meeting-invites-dyte/',
    type: 'blog',
    title: 'How to Schedule and Send Meeting Invites via Dyte?',
    description:
      'Scheduling and sending meeting invites from your own application made simpler with Dyte SDKs.',
    image:
      'https://dyte.io/blog/content/images/size/w1000/2022/12/Dyte-Blog---Calendar-2.png',
    duration: '4 min',
  },
  {
    url: 'https://www.youtube.com/watch?v=eVUqkNNHh1o',
    type: 'video',
    title: 'Integrating React UI Kit',
    description:
      'In this video learn how to use React UI Kit prebuilt components to add live video and audio to your React application.',
    image: 'https://img.youtube.com/vi/eVUqkNNHh1o/hqdefault.jpg',
    duration: '5 min',
  },
];

export default function ResourcesSection() {
  const [activeType, setActiveType] = useState<'all' | 'blog' | 'video'>('all');

  const resources =
    activeType === 'all'
      ? RESOURCES
      : RESOURCES.filter((r) => r.type === activeType);

  return (
    <section className="no-underline-links my-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="dyte-badge">RESOURCES</span>
            <h2 className="mb-6 text-4xl">Want to know more?</h2>
          </div>
          <Link
            to="#"
            className="font-jakarta text-sm font-semibold text-primary"
          >
            All Blogs <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="mb-6 inline-flex gap-1 rounded-lg bg-secondary-700 p-2 font-jakarta text-sm font-semibold dark:bg-secondary-700">
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'all' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('all')}
          >
            All
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'blog' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('blog')}
          >
            Blogs
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'video' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('video')}
          >
            Videos
          </button>
        </div>

        <div className="no-underline-links grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Link
              className="group flex flex-col justify-between"
              key={resource.title}
              href={resource.url}
            >
              <div>
                <div className="mb-3 overflow-hidden rounded-lg">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    loading="lazy"
                    className="aspect-video h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
                  {resource.title}
                </h3>
                <p className="leading-snug text-text-400">
                  {resource.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-text-400">
                  {`${resource.duration} ${
                    resource.type === 'Video' ? 'watch' : 'read'
                  }`}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
