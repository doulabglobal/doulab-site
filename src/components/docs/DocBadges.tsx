import React from 'react';
import styles from './DocBadges.module.css';

type DocBadgesProps = {
  items: string[];
};

export default function DocBadges({ items }: DocBadgesProps) {
  if (!items.length) {
    return null;
  }
  return (
    <ul className={styles.badges}>
      {items.map((item) => (
        <li key={item} className={styles.badge}>
          {item}
        </li>
      ))}
    </ul>
  );
}
