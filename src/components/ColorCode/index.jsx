import React from 'react';
import styles from './styles.module.css';

export default function ColorCode({ color, colorCode, children }) {
  return (
    <div className={styles.root}>
      <div className={styles.color} style={{ backgroundColor: color }}></div>
      <div className={styles.content}>
        {colorCode ? <code>{color}</code> : children}
      </div>
    </div>
  );
}
