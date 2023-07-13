#!/usr/bin/env node

const fs = require('fs');
const { writeMDXFile } = require('./utils.cjs');
const { pascalCase } = require('pascal-case');

const {
  components,
} = require('@dytesdk/ui-kit/dist/docs/docs-components.json');

/** @typedef {import('@dytesdk/ui-kit/dist/docs/docs-components').JsonDocsComponent} Component */

const basePaths = {
  core: 'docs/ui-kit/components',
  react: 'docs/react-ui-kit/components',
  angular: 'docs/angular-ui-kit/components',
};

/**
 *
 * @param {Component} component
 * @param {'core' | 'react' | 'angular' | 'vue'} framework
 * @returns
 */
function generateFile(component, framework = 'core') {
  const { tag, docs, props, usage } = component;

  function getFrontmatter() {
    const path = `/static/ui-kit/1.x.x/components/${tag}.svg`;
    if (fs.existsSync(`static${path}`)) {
      return ['---', `image: ${path}`, '---'];
    }
    return [];
  }

  function getTitle() {
    let title = tag;

    if (framework === 'react') {
      title = pascalCase(tag);
    }

    return title;
  }

  function getExample() {
    let docName = 'html-example';

    if (framework === 'react') {
      docName = 'react-example';
    } else if (framework === 'angular') {
      docName = 'angular-example';
    } else if (framework === 'vue') {
      docName = 'vue-example';
    }

    const exampleCode = usage[docName];

    return exampleCode ? [exampleCode, ''] : [];
  }

  const text = [
    ...getFrontmatter(),
    '',
    `# ${getTitle()}`,
    '',
    docs,
    '\n',
    ...getExample(),
    ...(props.length > 0 ? [`## Props`, `<PropsTable of="${tag}" />`] : []),
    '',
  ]
    .filter((line) => line)
    .join('\n');

  return text;
}

for (const component of components) {
  const { tag } = component;

  if (tag.startsWith('dyte-breakout') || tag.startsWith('dyte-ai')) {
    continue;
  }

  /** If there is no readme, skip component */
  if (
    (!component || component.docs.trim() === '') &&
    component.tag !== 'dyte-clock'
  ) {
    continue;
  }

  /** If there is no usage documentation for any framework, skip component */
  if (component?.usage && Object.keys(component.usage) === 0) {
    continue;
  }

  writeMDXFile(`${basePaths.core}/${tag}.mdx`, generateFile(component));

  writeMDXFile(
    `${basePaths.react}/${tag}.mdx`,
    generateFile(component, 'react')
  );

  writeMDXFile(
    `${basePaths.angular}/${tag}.mdx`,
    generateFile(component, 'angular')
  );
}
