import React from 'react';
import ContextSwitcher from './ContextSwitcher';
import propTypes from 'prop-types';

function SelectorElement({ label, name }) {
  return (
    <div className="flex-r my-4 flex items-baseline rounded-md bg-background-100 px-3 py-3">
      <input
        type="radio"
        className="accent-primary-100"
        name={name}
        id={name}
      />
      <span className="ml-4">{label}</span>
    </div>
  );
}

SelectorElement.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
};

function Selector() {
  return (
    <div>
      <SelectorElement
        label="I have mobile apps (android and iOS)"
        name="platform"
      />
      <ContextSwitcher section="mobile-sdks" mobile />
      <SelectorElement label="I have a web apps" name="platform" />
      <ContextSwitcher section="web-sdks" mobile />
      <SelectorElement
        label="I will use customized dyte templates"
        name="ui-non-ui"
      />
      <SelectorElement label="I will build my own UI" name="ui-non-ui" />
    </div>
  );
}

export default Selector;
