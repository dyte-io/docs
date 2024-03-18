import React, { useEffect, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import latestNPMVersion from '../utils/npm';

export const MavenLatestInstallation = ({ pkg }) => {
  const [version, setVersion] = useState('+');

  useEffect(() => {
    const raw = JSON.stringify({
      maven: pkg,
    });

    const requestOptions = {
      method: 'POST',
      body: raw,
    };

    fetch(
      'https://b72qj023g7.execute-api.ap-south-1.amazonaws.com/default/android-core-latest',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVersion(result.latestVersion ?? '+'));
  }, []);
  return (
    <div>
      <CodeBlock language="groovy">
        {`dependencies {
    // (other dependencies)
    implementation 'io.dyte:${pkg}:${version}'
}`}
      </CodeBlock>
    </div>
  );
};

export const CocoaPodInstallation = ({ pkg, path }) => {
  const [version, setVersion] = useState(undefined);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      body: null,
    };

    const url = `https://api.github.com/repos/CocoaPods/Specs/contents/Specs/${path}/`;

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => setVersion(result[result.length - 1]['name']));
  }, []);

  return (
    <div>
      <CodeBlock language="ruby">
        {`pod '${pkg}' ${version ? `, '${version}'` : ''}`}
      </CodeBlock>
    </div>
  );
};

export const WebCoreCDNInstallation = () => {
  const [version, setVersion] = useState('');
  useEffect(() => {
    async function load() {
      const version = await latestNPMVersion({ pkg: 'web-core' });
      setVersion(`-${version}`);
    }
    load();
  }, []);

  return (
    <CodeBlock language="html">
      {`<script src="https://cdn.dyte.in/core/dyte${version}.js" />`}
    </CodeBlock>
  );
};

export const HTMLUIKitInstallation = () => {
  const [webCoreVersion, setWebCoreVersion] = useState('');
  const [uikitVersion, setUIKitVersion] = useState('');

  useEffect(() => {
    async function load() {
      const versionWC = await latestNPMVersion({ pkg: 'web-core' });
      setWebCoreVersion(`-${versionWC}`);
      const versionUI = await latestNPMVersion({ pkg: 'ui-kit' });
      setUIKitVersion(`@${versionUI}`);
    }
    load();
  }, []);

  return (
    <CodeBlock language="html">
      {`<head>
  <script type="module">
      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${uikitVersion}/loader/index.es2017.js';
      defineCustomElements();
  </script>
  <!-- Import Web Core via CDN too -->
  <script src="https://cdn.dyte.in/core/dyte${webCoreVersion}.js"></script>
</head>`}
    </CodeBlock>
  );
};

export const HTMLUIKitUtilsInstallation = ({
  modules = ['provideDyteDesignSystem', 'extendConfig,'],
}) => {
  const [uikitVersion, setUIKitVersion] = useState('');

  useEffect(() => {
    async function load() {
      const versionUI = await latestNPMVersion({ pkg: 'ui-kit' });
      setUIKitVersion(`@${versionUI}`);
    }
    load();
  }, []);

  return (
    <CodeBlock language="html">
      {`<head>
  <script type="module">
    import {
      ${modules.join(', ')}
    } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${uikitVersion}/dist/esm/index.js';
  </script>
</head>`}
    </CodeBlock>
  );
};