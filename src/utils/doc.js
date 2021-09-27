import { useActiveDocContext } from '@theme/hooks/useDocs';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import { useHistory } from 'react-router-dom';

/**
 * Working code for handling preferred documentation version.
 * @param {docId} docId
 */
export const handlePreferredDoc = (docId) => {
  const pluginId = docId;
  const { activeVersion, activeDoc } = useActiveDocContext(pluginId);
  const { preferredVersion } = useDocsPreferredVersion(pluginId);
  const history = useHistory();

  useEffect(() => {
    if (preferredVersion && activeVersion.name !== preferredVersion.name) {
      if (preferredVersion.docs.find((doc) => doc.id === activeDoc.id)) {
        // check if the doc with the id exists and go to that id
        history.push(`${preferredVersion.path}/${activeDoc.id}`);
      } else {
        // go to main doc id if the id doesn't exist
        history.push(`${preferredVersion.path}/${preferredVersion.mainDocId}`);
      }
    }
  }, [activeVersion, preferredVersion]);
};
