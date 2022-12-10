import Link from '@docusaurus/Link';
import React from 'react';
import styles from './styles.module.css';

/**
 * @typedef {{name: string, component: string}} ComponentEntry
 */

/**
 * @param {{ item: ComponentEntry, basePath: string }}
 */
function Card({ item, basePath }) {
  return (
    <Link
      className={styles.card}
      to={`./components/${item.component}`}
      key={item.component}
    >
      <div className={styles.imageContainer}>
        <img
          src={`${basePath}/${item.component}.svg`}
          alt=""
          className={styles.image}
        />
      </div>
      <div>{item.name}</div>
    </Link>
  );
}

/**
 * @param {{ items: ComponentEntry[], basePath: string }}
 */
export default function ComponentsGrid({ items, basePath = '/' }) {
  items.sort((a, b) => {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    return 0;
  });

  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        {items.map((item) => (
          <Card key={item.component} item={item} basePath={basePath} />
        ))}
      </div>
    </div>
  );
}
