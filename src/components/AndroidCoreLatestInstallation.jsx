import React, { useEffect, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function UIKitLatestVersion({ pkg = 'ui-kit' }) {
  const [version, setVersion] = useState('+');

  useEffect(() => {
    const raw = JSON.stringify({
      "androidCore": true
    });
    
    const requestOptions = {
      method: 'POST',
      body: raw,
    };
    
    fetch("https://b72qj023g7.execute-api.ap-south-1.amazonaws.com/default/android-core-latest", requestOptions)
      .then(response => response.json()).then(result => setVersion(result.latestVersion)).catch((e) => {});
  }, []);
  return (
    <div>
      <CodeBlock
        language="groovy">
        {`dependencies {
    // (other dependencies)
    implementation 'io.dyte:core:${version}'
}`}
      </CodeBlock>
    </div>
  );
}
