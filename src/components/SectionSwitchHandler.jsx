import React, { useEffect, useState } from 'react';
import ContextSwitcher from './ContextSwitcher';
import VersionDropdown from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import { getDocId } from '../utils/doc';
import { NON_UI_SDKS, PREBUILT_SDKS, UI_SDKS } from '../utils/constants';

const SectionSwitchHandler = () => {
  const [section, setSection] = useState('home');
  const docId = getDocId();

  useEffect(() => {
    if (PREBUILT_SDKS.includes(docId)) {
      setSection('prebuilt');
    } else if (UI_SDKS.includes(docId)) {
      setSection('ui-sdks');
    } else if (NON_UI_SDKS.includes(docId)) {
      setSection('non-ui-sdks');
    }
  }, [docId]);

  if (section === 'home') {
    // no section switcher for / -> /docs
    return null;
  }

  if (section === 'prebuilt') {
    return (
      <div className="px-4">
        <div className="my-4 flex items-center justify-end">
          <ContextSwitcher className="flex-[3]" section="prebuilt" />
          <VersionDropdown
            dropdownItemsBefore={[]}
            dropdownItemsAfter={[]}
            docsPluginId={docId}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 mb-6 px-4">
      <div>
        <div className="space-x-1 text-sm text-text-100">
          <input
            type="radio"
            className="accent-primary-100"
            checked={section === 'ui-sdks'}
            name="ui-non-ui-section"
            id="ui-non-ui-section"
          />
          <label>UI SDKs</label>
        </div>
        <div className="my-4 flex items-center justify-end">
          <ContextSwitcher className="flex-[3]" section="ui-sdks" />
          {section === 'ui-sdks' && (
            <VersionDropdown
              dropdownItemsBefore={[]}
              dropdownItemsAfter={[]}
              docsPluginId={docId}
            />
          )}
        </div>
      </div>
      <div>
        <div className="space-x-1 text-sm text-text-100">
          <input
            type="radio"
            className="accent-primary-100"
            checked={section === 'non-ui-sdks'}
            name="ui-non-ui-section"
            id="ui-non-ui-section"
          />
          <label>Non UI SDKs</label>
        </div>
        <div className="my-4 flex items-center justify-end">
          <ContextSwitcher className="flex-[3]" section="non-ui-sdks" />
          {section === 'non-ui-sdks' && (
            <VersionDropdown
              dropdownItemsBefore={[]}
              dropdownItemsAfter={[]}
              docsPluginId={docId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionSwitchHandler;
