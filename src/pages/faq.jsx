import React, { useState } from 'react';
import Layout from '@theme/Layout';
import HomeFooter from '../components/homepage/HomeFooter';
import clsx from 'clsx';
import { useMemo } from 'react';
import {
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
import { paramCase } from 'param-case';

import FAQs from '../faq';

const tags = FAQs.reduce((allTags, faq) => {
  for (const tag of faq.tags) {
    if (!allTags.includes(tag)) {
      allTags.push(tag);
    }
  }
  return allTags;
}, []);

function Accordion({ title, tags, children, open: defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);

  const headingId = paramCase(title);
  const panelId = headingId + '-panel';

  return (
    <div
      className={clsx(
        'dyte-accordion border-0 border-solid p-6',
        open && 'rounded-2xl bg-secondary-800',
        !open && 'border-b border-zinc-300 pb-6 dark:border-zinc-700'
      )}
    >
      {/* Tag */}
      {tags && tags.length > 0 && (
        <div
          className={clsx(
            'mb-2 flex select-none items-center gap-2',
            open ? 'block' : 'hidden'
          )}
        >
          {tags.map((tag) => (
            <div
              className="rounded-full bg-secondary-700 px-2 py-px text-xs text-black dark:text-white"
              key={tag}
              data-tag={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      )}

      {/* Summary */}
      <button
        role="heading"
        tabIndex={0}
        className={clsx(
          'flex w-full cursor-pointer select-none items-center justify-between border-0 border-solid bg-transparent px-0 text-lg font-semibold',
          open && 'text-primary-100'
        )}
        onClick={() => setOpen((open) => !open)}
        id={headingId}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <div className="">{title}</div>
        <div className="text-zinc-300">
          <MinusIcon
            className={clsx(
              'h-4 w-4 text-zinc-500 dark:text-zinc-300',
              !open && 'hidden'
            )}
          />
          <PlusIcon
            className={clsx(
              'h-4 w-4 text-primary-100',
              open ? 'hidden' : 'block'
            )}
          />
        </div>
      </button>

      {/* Contents */}
      <div
        role="region"
        id={panelId}
        aria-labelledby={headingId}
        className={clsx('accordion-content mt-3', open ? 'block' : 'hidden')}
      >
        {children}
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const filteredFAQs = useMemo(() => {
    if (query.trim() === '') {
      if (activeTab === 'All') {
        return FAQs;
      }
      return FAQs.filter((faq) => faq.tags.includes(activeTab));
    }

    return FAQs.filter((faq) => {
      const str = faq.question + ' ' + faq.answer + ' ' + faq.tags.join(' ');
      return str.toLowerCase().includes(query.toLowerCase());
    });
  }, [activeTab, query]);

  return (
    <Layout wrapperClassName="faq-page bg-secondary-1000" noFooter>
      {/* Hero? */}
      <section className="bg-gradient-to-b from-primary to-secondary-1000 px-6 py-24">
        <div className="mx-auto flex max-w-7xl flex-col place-items-center justify-center">
          <div className="font-semibold text-zinc-200 dark:text-zinc-300">
            Frequently Asked Questions
          </div>
          <div className="my-8 text-center text-4xl font-bold leading-tight text-white lg:text-6xl">
            <div>Any questions?</div>
            <div>We got you.</div>
          </div>
          <div className="relative flex w-full max-w-md items-center text-zinc-700">
            <MagnifyingGlassIcon className="z-10 h-5 w-5 translate-x-1.5" />
            <input
              type="text"
              className="-ml-5 h-10 flex-1 rounded-md border-none bg-white px-3 pl-8 text-sm text-zinc-700"
              placeholder="Search your query...(sdk, api, write code)"
              value={query}
              onInput={(e) => setQuery(e.currentTarget.value)}
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          {query.trim() !== '' ? (
            filteredFAQs.length === 0 ? (
              <div>
                <div className="mb-12 text-4xl font-semibold">
                  Sorry, no results matched your search terms
                </div>
              </div>
            ) : (
              <div className="mb-12 text-xl font-semibold">
                🙌 Showing {filteredFAQs.length} results for &quot;{query}&quot;
              </div>
            )
          ) : (
            <div className="flex items-center gap-3">
              <button
                className={clsx(
                  'cursor-pointer rounded-full border-none bg-secondary-800 px-3 py-2',
                  activeTab === 'All'
                    ? 'bg-primary text-white'
                    : 'text-black dark:text-white'
                )}
                data-tag="All"
                onClick={() => setActiveTab('All')}
              >
                All
              </button>
              {tags.map((tag) => (
                <button
                  className={clsx(
                    'cursor-pointer rounded-full border-none bg-secondary-800 px-3 py-2',
                    activeTab === tag
                      ? 'bg-primary text-white'
                      : 'text-black dark:text-white'
                  )}
                  key={tag}
                  data-tag={tag}
                  onClick={() => setActiveTab(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* FAQs */}
          <div className="mt-12 flex flex-col gap-4">
            {filteredFAQs.map((faq, index) => (
              <Accordion
                title={faq.question}
                tags={faq.tags}
                key={faq.question}
                open={index === 0}
              >
                {faq.answer}
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <HomeFooter />
    </Layout>
  );
}
