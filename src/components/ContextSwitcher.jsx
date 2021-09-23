import React, { useState, useEffect, Fragment, memo } from 'react';
import clsx from 'clsx';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { withRouter } from '@docusaurus/router';
import { useAllDocsData } from '@theme/hooks/useDocs';

const CONTEXTS = [
  {
    id: 'react',
    name: 'React',
    icon: '/icons/react.svg',
  },
  {
    id: 'flutter',
    name: 'Flutter',
    icon: '/icons/flutter.svg',
  },
];

const getContext = (id) => CONTEXTS.find((context) => context.id === id);

export const getCurrentPageInfo = () => {
  return window.location.pathname.split('/').slice(1);
};

const pathExists = (path, data) => {
  return data.docs.some((doc) => doc.path === path);
};

const ContextSwitcher = ({ className, history }) => {
  const [context, setContext] = useState(CONTEXTS[0]);
  const data = useAllDocsData();

  useEffect(() => {
    const [doc] = getCurrentPageInfo();

    const currContext = getContext(doc);
    if (currContext && currContext.id !== context.id) {
      setContext(currContext);
    }
  }, []);

  const handleChange = (newValue) => {
    setContext(newValue);

    const [, ...docPath] = getCurrentPageInfo();

    const newDoc = newValue.id;

    let path = `/${newDoc}/${docPath.join('/')}`;

    const lastVersion = data[newDoc].versions.find(
      (version) => version.isLast === true
    );

    if (pathExists(path, lastVersion)) {
      if (window.location.hash) path += window.location.hash;
      history.push(path);
    } else {
      const { mainDocId } = lastVersion;
      history.push(`/${newDoc}/${mainDocId}`);
    }
  };

  if (history.location.pathname.split('/')[1] === 'docs') {
    // don't show contextSwitcher for /docs
    return null;
  }

  return (
    <Listbox
      value={context}
      onChange={handleChange}
      className={clsx('relative', className)}
    >
      <div className="relative mt-1">
        <Listbox.Button className="relative flex items-center w-full py-2 pl-3 pr-10 text-left bg-background-100 rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm outline-none border-none">
          <img
            src={context.icon}
            className="w-8 h-8 object-cover mr-2"
            alt={context.name}
            aria-hidden="true"
          />
          <span className="block truncate text-text">{context.name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <div className="relative w-full">
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-2 mt-1 z-10 overflow-auto text-base bg-background-100 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm p-0 list-none">
              {CONTEXTS.map((context) => (
                <Listbox.Option
                  key={context.id}
                  className={({ active }) =>
                    clsx(
                      'cursor-pointer select-none relative py-2 px-4',
                      active && 'bg-background-200'
                    )
                  }
                  value={context}
                >
                  {({ selected, active }) => (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={context.icon}
                          className="w-8 h-8 object-fit mr-2"
                          alt={context.name}
                          aria-hidden="true"
                        />
                        <span
                          className={clsx(
                            'block truncate',
                            selected ? 'font-medium' : 'font-normal'
                          )}
                        >
                          {context.name}
                        </span>
                      </div>
                      {selected ? (
                        <span className="text-blue-600 left-0 flex items-center pl-3">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </div>
    </Listbox>
  );
};

export default memo(withRouter(ContextSwitcher));
