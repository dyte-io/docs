/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useCallback } from 'react';
import { MDXProvider } from '@mdx-js/react';
import renderRoutes from '@docusaurus/renderRoutes';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import MDXComponents from '@theme/MDXComponents';
import NotFound from '@theme/NotFound';
import BackToTopButton from '@theme/BackToTopButton';
import { matchPath } from '@docusaurus/router';
import clsx from 'clsx';
import styles from './styles.module.css';
import { ThemeClassNames, docVersionSearchTag } from '@docusaurus/theme-common';
import Head from '@docusaurus/Head';
import { ChevronRightIcon } from '@heroicons/react/outline';

function DocPageContent({ currentDocRoute, versionMetadata, children }) {
  const { pluginId, version } = versionMetadata;
  const sidebarName = currentDocRoute.sidebar;
  const sidebar = sidebarName
    ? versionMetadata.docsSidebars[sidebarName]
    : undefined;
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }

    setHiddenSidebarContainer(!hiddenSidebarContainer);
  }, [hiddenSidebar]);
  return (
    <Layout
      wrapperClassName={ThemeClassNames.wrapper.docsPages}
      pageClassName={ThemeClassNames.page.docsDocPage}
      searchMetadatas={{
        version,
        tag: docVersionSearchTag(pluginId, version),
      }}
    >
      <div className={styles.docPage}>
        <BackToTopButton />

        {sidebar && (
          <aside
            className={clsx(styles.docSidebarContainer, {
              [styles.docSidebarContainerHidden]: hiddenSidebarContainer,
            })}
            onTransitionEnd={(e) => {
              if (
                !e.currentTarget.classList.contains(styles.docSidebarContainer)
              ) {
                return;
              }

              if (hiddenSidebarContainer) {
                setHiddenSidebar(true);
              }
            }}
          >
            <DocSidebar
              key={
                // Reset sidebar state on sidebar changes
                // See https://github.com/facebook/docusaurus/issues/3414
                sidebarName
              }
              sidebar={sidebar}
              path={currentDocRoute.path}
              onCollapse={toggleSidebar}
              isHidden={hiddenSidebar}
            />

            {hiddenSidebar && (
              <div className="relative top-0 flex h-full border border-border">
                <button
                  className="fixed top-20 left-[16px] flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-background-200"
                  onClick={toggleSidebar}
                  tabIndex={0}
                  aria-label="Collapse sidebar"
                >
                  <ChevronRightIcon className="h-3 text-text" />
                </button>
              </div>
            )}
          </aside>
        )}
        <main
          className={clsx(styles.docMainContainer, {
            [styles.docMainContainerEnhanced]:
              hiddenSidebarContainer || !sidebar,
          })}
        >
          <div
            className={clsx(
              'padding-top--md padding-bottom--lg container',
              styles.docItemWrapper,
              {
                [styles.docItemWrapperEnhanced]: hiddenSidebarContainer,
              }
            )}
          >
            <MDXProvider components={MDXComponents}>{children}</MDXProvider>
          </div>
        </main>
      </div>
    </Layout>
  );
}

function DocPage(props) {
  const {
    route: { routes: docRoutes },
    versionMetadata,
    location,
  } = props;
  const currentDocRoute = docRoutes.find((docRoute) =>
    matchPath(location.pathname, docRoute)
  );

  if (!currentDocRoute) {
    return <NotFound {...props} />;
  }

  return (
    <>
      <Head>
        {/* TODO we should add a core addRoute({htmlClassName}) generic plugin option */}
        <html className={versionMetadata.className} />
      </Head>
      <DocPageContent
        currentDocRoute={currentDocRoute}
        versionMetadata={versionMetadata}
      >
        {renderRoutes(docRoutes, {
          versionMetadata,
        })}
      </DocPageContent>
    </>
  );
}

export default DocPage;
