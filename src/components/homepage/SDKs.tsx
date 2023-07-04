import React from 'react';
import Link from '@docusaurus/Link';

function SDK({ icon, name }: { icon: string; name: string }) {
  return (
    <Link className="flex cursor-pointer items-center rounded-lg border border-secondary-700 p-2.5 text-inherit hover:border-primary hover:text-primary">
      <img src={icon} className="mr-2 h-7 w-7" />
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function SDKs() {
  return (
    <section className="mx-auto mb-32 flex w-full max-w-5xl flex-col p-4 py-0">
      <span className="mb-2 uppercase tracking-wider text-text-400">
        SDK Documentation
      </span>

      <h3 className="mb-12 text-4xl">
        Build the way you want in the framework you want!
      </h3>

      <div className="mb-10">
        <h4 className="mb-2 text-2xl">UI Kit + Core</h4>

        <p className="mb-6 text-text-400">
          Build faster with a prebuilt design library of UI components.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-2xl">
          Core{' '}
          <span className="text-sm font-normal text-text-400">(advanced)</span>
        </h4>

        <p className="mb-6 text-text-400">
          Build faster with a prebuilt design library of UI components.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
          <SDK name="React" icon="/static/landing-page/sdk-icons/react.png" />
        </div>
      </div>
    </section>
  );
}
