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
import ReactMarkdown from 'react-markdown';

import FAQs from '../faq';
import { useEffect } from 'react';

const tags = FAQs.reduce((allTags, faq) => {
  if (!faq.tags) return allTags;

  for (const tag of faq.tags) {
    if (!allTags.includes(tag)) {
      allTags.push(tag);
    }
  }
  return allTags;
}, []);

function Accordion({ title, tags, children, open, onOpen, onClose }) {
  const headingId = paramCase(title);
  const panelId = headingId + '-panel';

  const handleOpen = () => {
    if (!open) {
      onOpen();
      history.pushState({}, '', '#' + headingId);
    } else {
      onClose();
      history.pushState({}, '', '');
    }
  };

  return (
    <div
      id={'parent-' + headingId}
      className={clsx(
        'dyte-accordion cursor-pointer border-0 border-solid last-of-type:border-0',
        open
          ? 'mb-4 rounded-2xl bg-secondary-800'
          : 'border-b border-zinc-300 dark:border-zinc-700'
      )}
      role="tab"
      aria-expanded={open}
      aria-controls={panelId}
    >
      {/* Summary */}
      <div
        role="heading"
        className={clsx(
          'flex w-full cursor-pointer select-none items-center justify-between border-0 border-solid bg-transparent p-6 text-lg font-semibold',
          open && 'pb-0 text-primary dark:text-primary-100'
        )}
        tabIndex={0}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpen();
          }
        }}
        id={headingId}
      >
        <h3 id={headingId}>{title}</h3>
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
      </div>

      {/* Contents */}
      <div
        role="region"
        id={panelId}
        aria-labelledby={headingId}
        className={clsx(
          'accordion-content mt-3 p-6 pt-0',
          open ? 'block' : 'hidden'
        )}
      >
        {children}

        {/* Tag */}
        {tags && tags.length > 0 && (
          <div
            className={clsx(
              'mt-3 flex select-none items-center gap-2',
              open ? 'block' : 'hidden'
            )}
          >
            {tags.map((tag) => (
              <div
                className="w-fit rounded-full bg-secondary-700 px-2 py-px text-xs text-black dark:text-white"
                key={tag}
                data-tag={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeFAQ, setActiveFAQ] = useState('');
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const faqId = window.location.hash.substring(1);

    if (faqId !== '') {
      setActiveFAQ(faqId);
      document.querySelector('#parent-' + faqId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, []);

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

  function Pill({ tag }) {
    return (
      <button
        className={clsx(
          'cursor-pointer rounded-md border-none bg-secondary-800 px-3.5 py-1.5 font-jakarta text-sm font-medium',
          activeTab === tag
            ? 'bg-primary text-white'
            : 'text-black dark:text-white'
        )}
        data-tag={tag}
        onClick={() => setActiveTab(tag)}
      >
        {tag}
      </button>
    );
  }

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

      <section className="mb-20 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          {query.trim() !== '' ? (
            filteredFAQs.length === 0 ? (
              <div className="mb-12 text-2xl font-semibold">
                😢 Sorry, no results matched your search terms
              </div>
            ) : (
              <div className="mb-12 text-xl font-semibold">
                🙌 Showing {filteredFAQs.length} results for &quot;{query}&quot;
              </div>
            )
          ) : (
            <div className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
              <Pill tag="All" />
              {tags.map((tag) => (
                <Pill tag={tag} key={tag} />
              ))}
            </div>
          )}

          {/* FAQs */}
          <div className="mt-12 flex flex-col gap-3">
            {filteredFAQs.map((faq) => {
              const id = paramCase(faq.question);
              return (
                <Accordion
                  title={faq.question}
                  tags={faq.tags || []}
                  key={faq.question}
                  open={activeFAQ === id}
                  onOpen={() => {
                    setActiveFAQ(id);
                  }}
                  onClose={() => {
                    setActiveFAQ('');
                  }}
                >
                  <ReactMarkdown>{faq.answer}</ReactMarkdown>
                </Accordion>
              );
            })}
          </div>
        </div>
      </section>

      <HomeFooter />
    </Layout>
  );
}
