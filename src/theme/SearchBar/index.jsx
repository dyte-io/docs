import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DocSearchButton, useDocSearchKeyboardEvents } from '@docsearch/react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import {
  isRegexpStringMatch,
  useSearchLinkCreator,
} from '@docusaurus/theme-common';
import {
  useAlgoliaContextualFacetFilters,
  useSearchResultUrlProcessor,
} from '@docusaurus/theme-search-algolia/client';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { createPortal } from 'react-dom';
import translations from '@theme/SearchTranslations';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { ChatBot } from '@dytesdk/docs-ai-react';

import { Search } from 'react-feather';
import { DyteAISearchIcon } from '@site/src/icons';

let DocSearchModal = null;
function Hit({ hit, children }) {
  return <Link to={hit.url}>{children}</Link>;
}
function ResultsFooter({ state, onClose }) {
  const createSearchLink = useSearchLinkCreator();
  return (
    <Link to={createSearchLink(state.query)} onClick={onClose}>
      <Translate
        id="theme.SearchBar.seeAll"
        values={{ count: state.context.nbHits }}
      >
        {'See all {count} results'}
      </Translate>
    </Link>
  );
}
function mergeFacetFilters(f1, f2) {
  const normalize = (f) => (typeof f === 'string' ? [f] : f);
  return [...normalize(f1), ...normalize(f2)];
}
function DocSearch({ contextualSearch, externalUrlRegex, ...props }) {
  const { siteMetadata } = useDocusaurusContext();
  const processSearchResultUrl = useSearchResultUrlProcessor();
  const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();
  const configFacetFilters = props.searchParameters?.facetFilters ?? [];
  const facetFilters = contextualSearch
    ? // Merge contextual search filters with config filters
      mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
    : // ... or use config facetFilters
      configFacetFilters;
  // We let user override default searchParameters if she wants to
  const searchParameters = {
    ...props.searchParameters,
    facetFilters,
  };
  const history = useHistory();
  const searchContainer = useRef(null);
  const searchButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState(undefined);
  const importDocSearchModalIfNeeded = useCallback(() => {
    if (DocSearchModal) {
      return Promise.resolve();
    }
    return Promise.all([
      import('@docsearch/react/modal'),
      import('@docsearch/react/style'),
      import('./styles.css'),
    ]).then(([{ DocSearchModal: Modal }]) => {
      DocSearchModal = Modal;
    });
  }, []);
  const onOpen = useCallback(() => {
    importDocSearchModalIfNeeded().then(() => {
      searchContainer.current = document.createElement('div');
      document.body.insertBefore(
        searchContainer.current,
        document.body.firstChild
      );
      setIsOpen(true);
    });
  }, [importDocSearchModalIfNeeded, setIsOpen]);
  const onClose = useCallback(() => {
    setIsOpen(false);
    searchContainer.current?.remove();
  }, [setIsOpen]);
  const onInput = useCallback(
    (event) => {
      importDocSearchModalIfNeeded().then(() => {
        setIsOpen(true);
        setInitialQuery(event.key);
      });
    },
    [importDocSearchModalIfNeeded, setIsOpen, setInitialQuery]
  );
  const navigator = useRef({
    navigate({ itemUrl }) {
      // Algolia results could contain URL's from other domains which cannot
      // be served through history and should navigate with window.location
      if (isRegexpStringMatch(externalUrlRegex, itemUrl)) {
        window.location.href = itemUrl;
      } else {
        history.push(itemUrl);
      }
    },
  }).current;
  const transformItems = useRef((items) =>
    props.transformItems
      ? // Custom transformItems
        props.transformItems(items)
      : // Default transformItems
        items.map((item) => ({
          ...item,
          url: processSearchResultUrl(item.url),
        }))
  ).current;
  const resultsFooterComponent = useMemo(
    () => (footerProps) => <ResultsFooter {...footerProps} onClose={onClose} />,
    [onClose]
  );
  const transformSearchClient = useCallback(
    (searchClient) => {
      searchClient.addAlgoliaAgent(
        'docusaurus',
        siteMetadata.docusaurusVersion
      );
      return searchClient;
    },
    [siteMetadata.docusaurusVersion]
  );
  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  const [selectedIndex, setSelectedIndex] = useState(() => {
    return typeof localStorage !== 'undefined' &&
      localStorage.getItem('search') === 'docsearch'
      ? 1
      : 0;
  });

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('search', selectedIndex === 0 ? 'ai' : 'docsearch');
    }
  }, [selectedIndex]);

  return (
    <>
      <Head>
        {/* This hints the browser that the website will load data from Algolia,
        and allows it to preconnect to the DocSearch cluster. It makes the first
        query faster, especially on mobile. */}
        <link
          rel="preconnect"
          href={`https://${props.appId}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </Head>

      <div className="relative flex items-center gap-2">
        <div
          className="group flex h-9 cursor-pointer items-center gap-2 rounded-lg border-2 border-transparent bg-[var(--docsearch-searchbox-background)] px-3 transition-colors hover:border-primary hover:dark:border-primary-100"
          title="Dyte AI Chatbot"
          onClick={() => {
            setSelectedIndex(0);
            onOpen();
          }}
        >
          <DyteAISearchIcon className="h-6 w-6" />
          <span className="sr-only pointer-events-none text-xs font-medium text-[var(--docsearch-muted-color)] transition-all group-hover:xl:not-sr-only">
            Dyte AI
          </span>
        </div>

        <DocSearchButton
          onTouchStart={importDocSearchModalIfNeeded}
          onFocus={importDocSearchModalIfNeeded}
          onMouseOver={importDocSearchModalIfNeeded}
          onClick={() => {
            setSelectedIndex(1);
            onOpen();
          }}
          ref={searchButtonRef}
          translations={translations.button}
          id="search-bar"
        />
      </div>

      {isOpen &&
        DocSearchModal &&
        searchContainer.current &&
        createPortal(
          <div
            className={clsx(
              'fixed inset-0 z-[300] flex flex-col overflow-y-auto',
              selectedIndex === 0 &&
                'bg-gradient-to-br from-blue-600/40 to-red-600/40'
            )}
            onClick={(e) => {
              if (
                e.target === e.currentTarget ||
                e.target.classList.contains('overlay')
              ) {
                onClose();
              }
            }}
          >
            <div
              className={clsx(
                'overlay absolute inset-0 z-0 bg-black/40 backdrop-blur-sm',
                selectedIndex === 0 ? 'block' : 'hidden'
              )}
            />

            <Tab.Group
              selectedIndex={selectedIndex}
              onChange={(index) => {
                setSelectedIndex(index);
              }}
            >
              <Tab.List className="z-[300] mx-auto my-5 flex w-full max-w-xs space-x-1 rounded-xl border-0 bg-secondary-700 p-1">
                <Tab
                  className={({ selected }) =>
                    clsx(
                      'flex flex-1 items-center justify-center gap-2 rounded-lg border-0 bg-transparent py-2 px-4 text-sm font-medium leading-5',
                      'cursor-pointer focus:outline-none',
                      selected
                        ? 'bg-white text-primary shadow dark:bg-secondary dark:text-white'
                        : 'text-text-400'
                    )
                  }
                >
                  <DyteAISearchIcon className="h-5 w-5" />
                  Dyte AI
                  <span className="text-[9px] uppercase text-primary-100">
                    Beta
                  </span>
                </Tab>

                <Tab
                  className={({ selected }) =>
                    clsx(
                      'flex flex-1 items-center justify-center gap-2 rounded-lg border-0 bg-transparent py-2 px-4 text-sm font-medium leading-5',
                      'cursor-pointer focus:outline-none',
                      selected
                        ? 'bg-white text-primary shadow dark:bg-secondary dark:text-white'
                        : 'text-text-400'
                    )
                  }
                >
                  <Search className="h-4 w-4" />
                  Search
                </Tab>
              </Tab.List>

              <Tab.Panels>
                <Tab.Panel>
                  <div className="absolute left-1/2 w-full max-w-[720px] -translate-x-1/2 overflow-clip rounded-lg">
                    <ChatBot />
                  </div>
                </Tab.Panel>

                <Tab.Panel>
                  <DocSearchModal
                    onClose={onClose}
                    initialScrollY={window.scrollY}
                    initialQuery={initialQuery}
                    navigator={navigator}
                    transformItems={transformItems}
                    hitComponent={Hit}
                    transformSearchClient={transformSearchClient}
                    {...(props.searchPagePath && {
                      resultsFooterComponent,
                    })}
                    {...props}
                    searchParameters={searchParameters}
                    placeholder={translations.placeholder}
                    translations={translations.modal}
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>,
          searchContainer.current
        )}
    </>
  );
}
export default function SearchBar() {
  const { siteConfig } = useDocusaurusContext();
  return <DocSearch {...siteConfig.themeConfig.algolia} />;
}
