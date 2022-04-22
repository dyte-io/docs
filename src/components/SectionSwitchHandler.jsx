import React, { useEffect, useState } from 'react';
import ContextSwitcher from './ContextSwitcher';
import VersionDropdown from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import { getDocId } from '../utils/doc';
import { NON_UI_SDKS, PREBUILT_SDKS, UI_SDKS } from '../utils/constants';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SectionSwitchHandler = (props) => {
  const { mobile } = props;
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

  const switchSection = (sec) => {
    setSection(sec);
  };

  const sections = [
    {
      name: 'ui-sdks',
      label: 'With UI',
      desc: 'Use our pre-built UI components as a base to build on top of.',
    },
    {
      name: 'non-ui-sdks',
      label: 'Without UI',
      desc: 'Build your own UI from scratch, use our low level APIs',
    },
  ];

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
    <div className="newSwitcher mx-4 mt-4 mb-6 rounded-md bg-background-100">
      {sections.map((el) => (
        <div
          key={el.name}
          onClick={() => switchSection(el.name)}
          className={clsx(
            'rounded-md pl-4 pr-2 pt-2 pb-1 text-sm text-text-100',
            section === el.name && 'dyte-transparent-blue'
          )}
        >
          <input
            type="radio"
            className="mr-2 accent-primary-100"
            checked={section === el.name}
            name="ui-non-ui-section"
            id="ui-non-ui-section"
          />
          <label>
            <b className="ml-1 fill-text-100">{el.label}</b>
            {section !== el.name && <p className="ml-2 pt-2">{el.desc}</p>}
          </label>
          {section === el.name && (
            <div className="my-4 flex items-center justify-end">
              <ContextSwitcher
                className="flex-[3]"
                section={el.name}
                mobile={mobile}
              />
              {section === el.name && (
                <VersionDropdown
                  dropdownItemsBefore={[]}
                  dropdownItemsAfter={[]}
                  docsPluginId={docId}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionSwitchHandler;

SectionSwitchHandler.propTypes = {
  mobile: PropTypes.bool,
};
