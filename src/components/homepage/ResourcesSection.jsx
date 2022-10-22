import Link from '@docusaurus/Link';
import React from 'react';
import RESOURCES from '../../resources';

export default function ResourcesSection() {
  return (
    <section className="px-6 my-20">
      <div className="mx-auto max-w-7xl">
        <span className="dyte-badge">RESOURCES</span>
        <h2 className="lg:text-3xl">Want to know more?</h2>
        <p className="text-text-400">
          Explore a curated set of resources to help you get started with Dyte
          quickly. <br />
          Can&apos;t find what you&apos;re looking for?
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {RESOURCES.map((resource) => (
            <div key={resource.title} className="flex flex-col justify-between">
              <div>
                <img
                  src={resource.image}
                  className="mb-3 aspect-video rounded-lg"
                />
                <h3 className="lg:text-xl font-semibold">
                  <Link href={resource.url} className="text-inherit">{resource.title}</Link>
                </h3>
                <p className="text-text-400 leading-snug">{resource.description}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="rounded-sm bg-primary/20 text-primary px-4 py-1">{resource.type}</div>
                <div className="text-text-400/60">
                  {`${resource.duration} ${
                    resource.type === 'Video' ? 'watch' : 'read'
                  }`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
