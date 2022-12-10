import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function ColorPalette({ name, shades, desc, rgb }) {
  let shadesArr = Object.keys(shades);

  if (desc) {
    shadesArr.sort((a, b) => +b - +a);
  }

  return (
    <div className={styles.root}>
      <div className={styles.name}>{name}</div>
      <div className={styles.shades}>
        {shadesArr.map((shade) => {
          const color = shades[shade];

          return (
            <div key={shade} className={styles.shade}>
              <div
                className={styles.color}
                style={{ backgroundColor: color }}
              />
              <div className={clsx(styles.info, rgb && styles.infoRGB)}>
                <div>{shade}</div>
                <div className={styles.colorCode}>{color}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
