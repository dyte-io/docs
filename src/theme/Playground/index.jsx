import React, { useEffect } from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { usePrismTheme } from '@docusaurus/theme-common';
import styles from './styles.module.css';
import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';
import { provideDyteDesignSystem } from '@dytesdk/react-ui-kit';
import { useColorMode } from '@docusaurus/theme-common';

function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}

function LivePreviewLoader() {
  // Is it worth improving/translating?
  return <div>Loading...</div>;
}

function ResultWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.result"
          description="The result label of the live codeblocks"
        >
          Preview
        </Translate>
      </Header>
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      <div className={styles.playgroundPreview}>
        <BrowserOnly fallback={<LivePreviewLoader />}>
          {() => (
            <>
              <LivePreview />
              <LiveError />
            </>
          )}
        </BrowserOnly>
      </div>
    </>
  );
}

function ThemedLiveEditor() {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      className={clsx(
        styles.playgroundEditor,
        'border border-secondary-800 !pb-4'
      )}
    />
  );
}
function EditorWithHeader() {
  return (
    <div className="relative">
      <div className="-mb-1 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-2 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900">
        <Translate
          id="theme.Playground.liveEditor"
          description="The live editor label of the live codeblocks"
        >
          LIVE EDITOR
        </Translate>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="ml-2 h-4"
        >
          <path
            fill="#FFD43B"
            d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
          />
        </svg>
      </div>
      <ThemedLiveEditor />
    </div>
  );
}

const initInProgress = {
  value: false,
};

export default function Playground({ children, transformCode, ...props }) {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();

  const {
    liveCodeBlock: { playgroundPosition },
  } = themeConfig;

  const prismTheme = usePrismTheme();

  const [meeting, initMeeting] = useDyteClient();
  const { colorMode } = useColorMode();

  // TODO: Uncomment following block of code after adding mock web-core package
  useEffect(() => {
    if (initInProgress.value) return;
    initInProgress.value = true;
    initMeeting({
      roomName: 'qplrfc-uuujcj',
      authToken:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds',
      defaults: {
        audio: false,
        video: false,
      },
    }).then((m) => {
      // Object.defineProperty(m.self.permissions, 'produceAudio', {
      //   value: 'ALLOWED',
      // });
      // Object.defineProperty(m.self.permissions.produceVideo, 'allow', {
      //   value: 'ALLOWED',
      // });
      // Object.defineProperty(m, 'connectedMeetings', {
      //   value: {
      //     supportsConnectedMeetings: false,
      //   },
      // });
      if (location.href.includes('build-pre-call-ui') == false) {
        m.join();
      }
      window.meeting = m;
      m.meta.meetingStartedTimestamp = new Date();
      m.participants.setMockParticipantCount(5, 5);
      // m.recording.recordingState = 'RECORDING';
      const theme = document.getElementsByTagName('html')[0].dataset['theme'];
      provideDyteDesignSystem(document.body, {
        theme,
      });
      initInProgress.value = false;
    });
  }, []);

  useEffect(() => {
    provideDyteDesignSystem(document.body, {
      theme: colorMode,
    });
  }, [colorMode]);

  return (
    <div
      className={clsx(styles.playgroundContainer, '!rounded-none !shadow-none')}
    >
      <DyteProvider value={meeting}>
        {/* @ts-expect-error: type incompatibility with refs */}
        <LiveProvider
          code={children.replace(/\n$/, '')}
          transformCode={transformCode ?? ((code) => `${code};`)}
          theme={prismTheme}
          {...props}
        >
          {playgroundPosition === 'top' ? (
            <>
              <ResultWithHeader />
              <EditorWithHeader />
            </>
          ) : (
            <>
              <EditorWithHeader />
              <ResultWithHeader />
            </>
          )}
        </LiveProvider>
      </DyteProvider>
    </div>
  );
}
