/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  useAnnouncementBar,
  MobileSecondaryMenuFiller,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import useWindowSize from '@theme/hooks/useWindowSize';
import useScrollPosition from '@theme/hooks/useScrollPosition';
import { DocSidebarItems } from '@theme/DocSidebarItem';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';
import DocsLogo from '@site/src/components/Logo';
import ContextSwitcher from '@site/src/components/ContextSwitcher';
import { ChevronLeftIcon } from '@heroicons/react/outline';

import VersionDropdown from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import BrowserOnly from '@docusaurus/BrowserOnly';

function useShowAnnouncementBar() {
  const { isClosed } = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(!isClosed);
  useScrollPosition(({ scrollY }) => {
    if (!isClosed) {
      setShowAnnouncementBar(scrollY === 0);
    }
  });
  return showAnnouncementBar;
}

function HideableSidebarButton({ onClick }) {
  return (
    <div className="absolute top-0 right-0 flex h-full w-1">
      <button
        className="absolute right-[-12px] mt-20 flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-background-200"
        onClick={onClick}
        onKeyDown={onClick}
        tabIndex={0}
        aria-label="Collapse sidebar"
      >
        <ChevronLeftIcon className="h-3 text-text" />
      </button>
    </div>
  );
}

const getDocId = () => {
  const [, doc] = window.location.pathname.split('/');
  if (['docs', '', 'guides'].includes(doc)) return 'default';
  return doc;
};

const DocManager = () => {
  const docId = getDocId();

  if (docId === 'default') {
    // don't show docs for `/docs` or `/`
    return null;
  }

  return (
    <div className="my-4 flex items-center justify-end px-4">
      <ContextSwitcher className="flex-[3]" />
      <VersionDropdown
        dropdownItemsBefore={[]}
        dropdownItemsAfter={[]}
        docsPluginId={docId}
      />
    </div>
  );
};

function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const showAnnouncementBar = useShowAnnouncementBar();
  const {
    navbar: { hideOnScroll },
    hideableSidebar,
  } = useThemeConfig();
  const { isClosed: isAnnouncementBarClosed } = useAnnouncementBar();

  return (
    <div
      className={clsx(styles.sidebar, {
        [styles.sidebarWithHideableNavbar]: hideOnScroll,
        [styles.sidebarHidden]: isHidden,
      })}
    >
      {hideOnScroll && (
        <Link to="/" className={clsx('hidden p-4 lg:block')}>
          <DocsLogo tabIndex={-1} className={clsx('h-7 self-start')} />
        </Link>
      )}
      <nav
        className={clsx(
          'menu thin-scrollbar',
          'overflow-x-visible',
          styles.menu,
          {
            [styles.menuWithAnnouncementBar]:
              !isAnnouncementBarClosed && showAnnouncementBar,
          }
        )}
      >
        <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
          <BrowserOnly>{() => <DocManager />}</BrowserOnly>
          <DocSidebarItems items={sidebar} activePath={path} />
        </ul>
      </nav>
      {hideableSidebar && <HideableSidebarButton onClick={onCollapse} />}
    </div>
  );
}

const DocSidebarMobileSecondaryMenu = ({ toggleSidebar, sidebar, path }) => {
  return (
    <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
      <BrowserOnly>{() => <DocManager />}</BrowserOnly>
      <DocSidebarItems
        items={sidebar}
        activePath={path}
        onItemClick={() => toggleSidebar()}
      />
    </ul>
  );
};

function DocSidebarMobile(props) {
  return (
    <MobileSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

const DocSidebarDesktopMemo = React.memo(DocSidebarDesktop);
const DocSidebarMobileMemo = React.memo(DocSidebarMobile);
export default function DocSidebar(props) {
  const windowSize = useWindowSize(); // Desktop sidebar visible on hydration: need SSR rendering

  const shouldRenderSidebarDesktop =
    windowSize === 'desktop' || windowSize === 'ssr'; // Mobile sidebar not visible on hydration: can avoid SSR rendering

  const shouldRenderSidebarMobile = windowSize === 'mobile';
  return (
    <>
      {shouldRenderSidebarDesktop && <DocSidebarDesktopMemo {...props} />}
      {shouldRenderSidebarMobile && <DocSidebarMobileMemo {...props} />}
    </>
  );
}
