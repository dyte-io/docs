import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function APIVersionSwitcher() {
  return (
    <Menu>
      <Menu.Button className="absolute top-16 right-1 flex items-center px-4 py-3">
        API Versions
        <ChevronDownIcon className="ml-1 h-4 text-text-100" />
      </Menu.Button>
      <Menu.Items className="absolute top-28 right-4 z-20 flex w-32 flex-col overflow-hidden rounded-lg bg-background-100 py-2 text-text-100 shadow-xl ring-1 ring-background-300">
        <Menu.Item>
          <Link
            className={clsx(
              'px-4 py-2 text-right text-text-100 hover:bg-background-200 hover:text-text hover:no-underline'
            )}
            href="/api/"
          >
            v1
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            className={clsx(
              'px-4 py-2 text-right text-text hover:bg-background-200 hover:text-text hover:no-underline'
            )}
            href="/api/v2/"
          >
            v2
          </Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
