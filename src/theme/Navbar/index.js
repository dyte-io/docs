/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Toggle from '@theme/Toggle';
import useThemeContext from '@theme/hooks/useThemeContext';
import {
  useThemeConfig,
  useMobileSecondaryMenuRenderer,
  usePrevious,
  useHistoryPopHandler,
} from '@docusaurus/theme-common';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import useWindowSize from '@theme/hooks/useWindowSize';
import NavbarItem from '@theme/NavbarItem';
import IconCloseThin from '@theme/IconCloseThin';
import styles from './styles.module.css'; // retrocompatible with v1

import Link from '@docusaurus/Link';
import Logo from '@site/src/components/Logo';

import useIsBrowser from '@docusaurus/useIsBrowser';

import {
  SearchIcon,
  MenuIcon,
  ExternalLinkIcon,
} from '@heroicons/react/outline';
import { Github } from '@styled-icons/boxicons-logos';
import { DiscordIcon } from '../../assets/icons';
import ThemeSwitcher from '@site/src/components/ThemeSwitcher';
import SearchBar from '@theme/SearchBar';
import { NON_UI_SDKS, PREBUILT_SDKS, UI_SDKS } from '../../utils/constants';
import Quickstart from '../../components/Quickstart';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
} // If split links by left/right
// if position is unspecified, fallback to right (as v1)

function useMobileSidebar() {
  const windowSize = useWindowSize(); // Mobile sidebar not visible on hydration: can avoid SSR rendering

  const shouldRender = windowSize === 'mobile'; // || windowSize === 'ssr';

  const [shown, setShown] = useState(false); // Close mobile sidebar on navigation pop
  // Most likely firing when using the Android back button (but not only)

  useHistoryPopHandler(() => {
    if (shown) {
      setShown(false); // Should we prevent the navigation here?
      // See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846
      // return false; // prevent pop navigation
    }

    return undefined;
  });
  const toggle = useCallback(() => {
    setShown((s) => !s);
  }, []);
  useEffect(() => {
    if (windowSize === 'desktop') {
      setShown(false);
    }
  }, [windowSize]);
  return {
    shouldRender,
    toggle,
    shown,
  };
}

function useColorModeToggle() {
  const {
    colorMode: { disableSwitch },
  } = useThemeConfig();
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  const toggle = useCallback(
    (e) => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme]
  );
  return {
    isDarkTheme,
    toggle,
    disabled: disableSwitch,
  };
}

function useSecondaryMenu({ sidebarShown, toggleSidebar }) {
  const content = useMobileSecondaryMenuRenderer()?.({
    toggleSidebar,
  });
  const previousContent = usePrevious(content);
  const [shown, setShown] = useState(() => {
    // /!\ content is set with useEffect,
    // so it's not available on mount anyway
    // "return !!content" => always returns false
    return false;
  }); // When content is become available for the first time (set in useEffect)
  // we set this content to be shown!

  useEffect(() => {
    const contentBecameAvailable = content && !previousContent;

    if (contentBecameAvailable) {
      setShown(true);
    }
  }, [content, previousContent]);
  const hasContent = !!content; // On sidebar close, secondary menu is set to be shown on next re-opening
  // (if any secondary menu content available)

  useEffect(() => {
    if (!hasContent) {
      setShown(false);
      return;
    }

    if (!sidebarShown) {
      setShown(true);
    }
  }, [sidebarShown, hasContent]);
  const hide = useCallback(() => {
    setShown(false);
  }, []);
  return {
    shown,
    hide,
    content,
  };
}

function NavbarMobileSidebar({ sidebarShown, toggleSidebar }) {
  useLockBodyScroll(sidebarShown);
  const items = useNavbarItems();
  const colorModeToggle = useColorModeToggle();
  const secondaryMenu = useSecondaryMenu({
    sidebarShown,
    toggleSidebar,
  });
  return (
    <div className="navbar-sidebar">
      <div className="navbar-sidebar__brand">
        <Logo className="h-6" />
        {!colorModeToggle.disabled && (
          <Toggle
            className={styles.navbarSidebarToggle}
            checked={colorModeToggle.isDarkTheme}
            onChange={colorModeToggle.toggle}
          />
        )}
        <button
          type="button"
          className="clean-btn navbar-sidebar__close"
          onClick={toggleSidebar}
        >
          <IconCloseThin
            width={20}
            height={20}
            className={styles.navbarSidebarCloseSvg}
          />
        </button>
      </div>

      <div
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenu.shown,
        })}
      >
        <div className="navbar-sidebar__item menu">
          <ul className="menu__list">
            {items.map((item, i) => (
              <NavbarItem mobile {...item} onClick={toggleSidebar} key={i} />
            ))}
            <li className="menu__list-item">
              <Link href="https://community.dyte.io" className="menu__link">
                Community
              </Link>
            </li>
            <li className="menu__list-item">
              <Link href="https://github.com/dyte-in" className="menu__link">
                GitHub
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-sidebar__item menu">
          {items.length > 0 && (
            <button
              type="button"
              className="clean-btn navbar-sidebar__back"
              onClick={secondaryMenu.hide}
            >
              <Translate
                id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel"
                description="The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"
              >
                ← Back to main menu
              </Translate>
            </button>
          )}
          {secondaryMenu.content}
        </div>
      </div>
    </div>
  );
}

const getPage = () => {
  const [, doc] = window.location.pathname.split('/');

  switch (doc) {
    case 'api':
      return 'api';
    case 'docs':
      return 'home';
    case 'guides':
      return 'guides';
    default:
      if (PREBUILT_SDKS.includes(doc)) {
        return 'prebuilt-sdks';
      } else if (UI_SDKS.concat(NON_UI_SDKS).includes(doc)) {
        return 'web-sdks';
      }
      return null;
  }
};

function Navbar() {
  const mobileSidebar = useMobileSidebar();

  const isBrowser = useIsBrowser();
  const page = isBrowser ? getPage() : null;

  return (
    <nav
      className={clsx(
        'relative',
        mobileSidebar.shown && 'navbar-sidebar--show'
      )}
    >
      <header className="relative z-10 flex h-14 items-center justify-between border-b !border-border bg-background px-4 py-2">
        <div className="flex items-center space-x-10 font-medium">
          <div className="flex items-center space-x-2">
            <button
              onClick={mobileSidebar.toggle}
              className="bg-transparent lg:hidden"
            >
              <MenuIcon className="h-6 text-text-100" />
            </button>

            <Link to="/" className="flex">
              <Logo />
            </Link>
          </div>

          <div className="hidden space-x-6 text-text-100 lg:flex">
            <Link
              to="/react/quickstart"
              className={clsx(
                'inline-flex items-center text-sm font-medium hover:no-underline',
                page === 'prebuilt-sdks' ? 'text-primary-100' : 'text-text-100'
              )}
            >
              Prebuilt SDKs
              <span className="pill pill-warning ml-2">OLD</span>
            </Link>
            <Link
              to="/react-ui-kit/installation"
              className={clsx(
                'inline-flex items-center text-sm font-medium hover:no-underline',
                page === 'web-sdks' ? 'text-primary-100' : 'text-text-100'
              )}
            >
              Web SDKs
              <span className="pill ml-2">NEW</span>
            </Link>
            <Link
              to="/react-native-core/installation"
              className={clsx(
                'inline-flex items-center text-sm font-medium hover:no-underline',
                page === 'mobile-sdks' ? 'text-primary-100' : 'text-text-100'
              )}
            >
              Mobile SDKs
              <span className="pill ml-2">NEW</span>
            </Link>
            <a
              href="/api/"
              className={clsx(
                'text-sm font-medium hover:no-underline',
                page === 'api' ? 'text-primary-100' : 'text-text-100'
              )}
            >
              API Reference
            </a>
            <Link
              to="/guides/integrating-with-webhooks"
              className={clsx(
                'text-sm font-medium hover:no-underline',
                page === 'guides' ? 'text-primary-100' : 'text-text-100'
              )}
            >
              Guides
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Link
              className="flex items-center text-sm font-medium text-text-100 hover:no-underline"
              href="https://github.com/dyte-in"
            >
              <Github className="mr-2 h-7" aria-hidden={true} />
           </Link>
           <Link
              className="flex items-center text-sm font-medium text-text-100 hover:no-underline"
              href="https://community.dyte.io"
            >
              <DiscordIcon className="mr-2 h-6" />
           </Link>
          <SearchBar />

          <div className="hidden items-center lg:flex">
            <Link
              href="https://dev.dyte.in"
              target="_blank"
              className="ml-4 flex h-9 items-center rounded-[4px] bg-primary px-4 text-sm font-bold text-white hover:text-white hover:no-underline"
            >
              Login/Sign Up
              <ExternalLinkIcon className="ml-2 h-4" aria-hidden={true} />
            </Link>
          </div>
        </div>
        <Quickstart />
        <ThemeSwitcher />
      </header>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={mobileSidebar.toggle}
      />
      {mobileSidebar.shouldRender && (
        <NavbarMobileSidebar
          sidebarShown={mobileSidebar.shown}
          toggleSidebar={mobileSidebar.toggle}
        />
      )}
    </nav>
  );
}

export default Navbar;
