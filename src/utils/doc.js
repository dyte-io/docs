/**
 * This code is unused, keeping it for reference later
 */

/* eslint-disable */

import { useEffect } from 'react';
import { useActiveDocContext } from '@theme/hooks/useDocs';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import { useHistory } from 'react-router-dom';

// TODO: The below doc doesn't work as expected
// It should only redirect to the new path on the first page load (the first time),
// and not on every path change or change in `preferredVersion`.

/**
 * Working code for handling preferred documentation version.
 * @param {string} docId
 */
export const handlePreferredDoc = (docId) => {
  const pluginId = docId;
  const { activeVersion, activeDoc } = useActiveDocContext(pluginId);
  const { preferredVersion } = useDocsPreferredVersion(pluginId);
  const history = useHistory();

  useEffect(() => {
    if (preferredVersion && preferredVersion.name !== activeVersion?.name) {
      const doc = docIdExists(activeDoc?.id, preferredVersion.docs);
      if (doc) {
        // navigate to the same route in preferred version
        history.push(doc.path);
      } else {
        // navigate to mainDocId
        history.push(`${preferredVersion.path}/${preferredVersion.mainDocId}`);
      }
    }
  }, [activeVersion, preferredVersion]);
};
