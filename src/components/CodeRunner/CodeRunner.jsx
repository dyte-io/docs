import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackCodeViewer,
} from '@codesandbox/sandpack-react';
import React, { useState, useEffect } from 'react';
import ReactBoilerplate from './ReactBoilerplate';
import AngularBoilerplate from './AngularBoilerplate';
import { useColorMode } from '@docusaurus/theme-common';
import { atomDark, aquaBlue } from "@codesandbox/sandpack-themes";

type FrameworkType = 'react-ts' | 'angular';
type HighlightLines = {
  start: number,
  end: number,
};
type CodeRunnerProps = {
  files?: { [key: string]: string },
  file?: string,
  framework?: FrameworkType,
  entry?: string,
  highlight?: HighlightLines[],
  additionalDecorators?: any[],
  hide?: HighlightLines[],
  minHeight?: string
};

type GetFilesReturn = {
  files: { [key: string]: string },
  activeFile: string,
  visibleFiles: string[],
  scripts: string[],
}
const getFiles = (framework: FrameworkType, colorMode: string, customFile: string, files: { [key: string]: string } = {}): GetFilesReturn => {
  if (framework == 'react-ts') {
    return {
      files: { 
        '/App.tsx' : ReactBoilerplate(colorMode),
        '/meeting.tsx': customFile,
      },
      activeFile: '/meeting.tsx',
      visibleFiles: ['/meeting.tsx', ...Object.keys(files)],
      scripts: [],
    };
  }
  if(framework == 'angular'){
    return {
      files: { 
        '/src/app/app.component.html': `<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>`,
        '/src/app/app.component.ts': customFile,
        '/src/app/app.module.ts': AngularBoilerplate,
      },
      activeFile: '/src/app/app.component.ts',
      visibleFiles: ['/src/app/app.module.ts', '/src/app/app.component.ts','/src/app/app.component.html', ...Object.keys(files)],
      scripts: [],
    };
  }
  return {
    activeFile: '/index.html',
    visibleFiles: ['/index.html'],
    files: {
      '/index.html': customFile
    },
    scripts: [
      'https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js',
      'https://assets.dyte.io/docs/web.js'
    ]
  }
};

const getDeps = (framework: FrameworkType): { [key: string]: string } => {
  if (framework == 'react-ts') {
    return {
      '@dytesdk/react-ui-kit': '1.66.0',
      '@dytesdk/react-web-core': '1.36.4-stripped.1',
      '@dytesdk/web-core': '1.31.0-stripped.2',
    };
  }
  if (framework == 'angular') {
    return {
      '@dytesdk/angular-ui-kit': '1.66.0',
      '@dytesdk/web-core': '1.31.0-stripped.2',
    }
  }
  return {};
};

const buildDecorators = (lines: HighlightLines[], hide: HighlightLines[]) => {
  let cols: any[] = [];
  lines.forEach((l) => {
    for (let i = l.start; i <= l.end; i++) {
      cols.push({ className: 'highlight', line: i });
    }
  });
  hide.forEach((l) => {
    for (let i = l.start; i <= l.end; i++) {
      cols.push({ className: 'hide', line: i });
    }
  });
  return cols;
};

const getTheme = (theme: string) => {
  if(theme === 'light') return aquaBlue;
  else return atomDark;
}

export default function CodeRunner({
  file,
  files = {},
  framework = 'react-ts',
  entry,
  highlight = [],
  additionalDecorators = [],
  hide = [],
  minHeight = '480px'
}: CodeRunnerProps) {
  const { colorMode } = useColorMode();

  const filesObj = getFiles(framework, colorMode, file ?? '', files)
;
  const deps = getDeps(framework);

  const decorators = [...additionalDecorators, ...buildDecorators(highlight, hide)];

  const [editMode, setEditMode] = useState(decorators.length === 0);

  useEffect(() => {
    const clickListener = () => {
      if(decorators.length !== 0 && editMode == true) {
        setEditMode(false);
      }
    }
    window.addEventListener('click', clickListener);
    return () => {
      window.removeEventListener('click', clickListener);
    }
  }, [decorators.length, editMode]);

  return (
    <SandpackProvider
      template={framework}
      customSetup={{
        dependencies: {
          ...deps,
        },
      }}
      theme={getTheme(colorMode)}
      options={{
        activeFile: filesObj.activeFile,
        visibleFiles: filesObj.visibleFiles,
        externalResources: ['https://assets.dyte.io/docs/tailwind.js', ...filesObj.scripts],
      }}
      files={filesObj.files}
    >
      <div className="relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900">
        <span>LIVE EDITOR</span>
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
      <div className="flex flex-col rounded-sm border border-secondary-700 mb-4">
        <div onClick={(e) => {
          e.stopPropagation();
          setEditMode(true)
        }} className="cursor-text">
          {editMode ? (
            <SandpackCodeEditor
              showLineNumbers
              showInlineErrors
              className="code-viewer"
              style={{
                flexGrow: 0,
                flexShrink: 1,
                flexBasis: 'max-content',
                maxHeight: '500px',
                overflow: 'scroll'
              }}
            />
          ) : (
            <SandpackCodeViewer
              className="code-viewer"
              initMode='immediate'
              decorators={decorators}
              style={{
                flexGrow: 0,
                flexShrink: 1,
                flexBasis: 'max-content',
                maxHeight: '500px',
              }}
            />
          )}
        </div>
        <SandpackPreview
          showOpenInCodeSandbox={false}
          className="border-t-2 border-t-secondary-700"
          style={{ flex: 1, minHeight }}
        />
      </div>
    </SandpackProvider>
  );
}
