import React from 'react';
import UIKitDocs from '@dytesdk/ui-kit/dist/docs/docs-components.json';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const REFERENCE_PROPS = {
  config: {
    path: '../reference/interfaces/UIConfig',
    name: 'UIConfig',
  },
  iconPack: {
    path: '../reference/#iconpack',
    name: 'IconPack',
  },
  t: {
    path: '../reference/#dytei18n',
    name: 'DyteI18n',
  },
  // participant: {
  //   path: '../reference/participant',
  //   name: 'Participant',
  // },
  states: {
    path: '../reference/interfaces/States',
    name: 'States',
  },
  notification: {
    path: '../reference/interfaces/Notification',
    name: 'Notification',
  },
  // poll: {
  //   path: '../reference/poll',
  //   name: 'Poll',
  // },
  plugins: {
    path: '/web-core/reference/DytePlugin',
    name: 'DytePlugin[]',
  },
  plugin: {
    path: '/web-core/reference/DytePlugin',
    name: 'DytePlugin',
  },
};

const WEB_CORE_TYPE_REFERENCES = {
  DyteClient: {
    path: '/web-core/reference/DyteClient',
    name: 'DyteClient',
  },
};

function PropType({ prop }) {
  if (prop.name === 'participant') {
    return (
      <pre className={styles.propType}>
        <code>
          <Link href="/web-core/reference/DyteParticipant">
            DyteParticipant
          </Link>{' '}
          | <Link href="/web-core/reference/DyteSelf">DyteSelf</Link>
        </code>
      </pre>
    );
  }

  if (prop.type === 'Peer[]') {
    return (
      <pre className={styles.propType}>
        <code>
          (
          <Link href="/web-core/reference/DyteParticipant">
            DyteParticipant
          </Link>{' '}
          | <Link href="/web-core/reference/DyteSelf">DyteSelf</Link>)[]
        </code>
      </pre>
    );
  }

  const ref = REFERENCE_PROPS[prop.name] || WEB_CORE_TYPE_REFERENCES[prop.type];

  if (ref) {
    return (
      <pre className={styles.propType}>
        <code>
          <Link href={ref.path}>{ref.name}</Link>
        </code>
      </pre>
    );
  }

  return <CodeBlock language="ts">{prop.type}</CodeBlock>;
}

function PropCard({ prop }) {
  return (
    <div className={styles.card}>
      <h4>
        <code>{prop.name}</code>
      </h4>
      <div>
        {prop.required && (
          <p>
            <code data-code="required">required</code>
          </p>
        )}
        <p className={styles.docs}>{prop.docs}</p>
        {prop.default && prop.default.length > 0 && (
          <div>
            <h5>Default</h5>
            <CodeBlock language="ts">{prop.default}</CodeBlock>
          </div>
        )}
        <div>
          <h5>Type</h5>
          <PropType prop={prop} />
        </div>
      </div>
    </div>
  );
}

export default function PropsTable({ of }) {
  const doc = UIKitDocs.components.find((component) => component.tag === of);

  if (!doc) return null;

  const { props } = doc;

  // brings required props to start
  props.sort((a) => (a.required ? -1 : 1));

  return (
    <div className={styles.root}>
      <div className={styles.props}>
        {props.map((prop) => (
          <PropCard prop={prop} key={prop.name} />
        ))}
      </div>
    </div>
  );
}
