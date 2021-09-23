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
import IconArrow from '@theme/IconArrow';
import { translate } from '@docusaurus/Translate';
import { DocSidebarItems } from '@theme/DocSidebarItem';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';
import DocsLogo from '@site/src/components/Logo';
import ContextSwitcher from '@site/src/components/ContextSwitcher';
import { ChevronLeftIcon } from '@heroicons/react/outline';

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
    <div className="absolute top-0 right-0 w-1 h-full flex ">
      <button
        className="absolute right-[-10px] w-5 h-5 mt-24 rounded-md bg-background-200 cursor-pointer"
        onClick={onClick}
        onKeyDown={onClick}
        tabIndex={0}
        aria-label="Collapse sidebar"
      >
        <ChevronLeftIcon className="h-2 text-text" />
      </button>
    </div>
  );
}

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
        <Link to="/" className={clsx('hidden lg:block p-4')}>
          <DocsLogo tabIndex={-1} className={clsx('h-7 self-start')} />
        </Link>
      )}
      <nav
        className={clsx('menu thin-scrollbar', styles.menu, {
          [styles.menuWithAnnouncementBar]:
            !isAnnouncementBarClosed && showAnnouncementBar,
        })}
      >
        <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
          <ContextSwitcher />
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
      <ContextSwitcher />
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
