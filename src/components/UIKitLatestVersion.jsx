import React, { useEffect, useState } from 'react';

export default function UIKitLatestVersion({ pkg = 'ui-kit' }) {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    fetch(`https://registry.npmjs.com/@dytesdk/${pkg}`)
      .then((res) => res.json())
      .then((data) => {
        const v = data['dist-tags']['latest'];
        setVersion(v);
      });
  }, []);

  if (!version) return null;

  return (
    <div>
      The latest version right now is: <code>{version}</code>
    </div>
  );
}
