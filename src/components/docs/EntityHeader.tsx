import React from 'react';
import DocBadges from './DocBadges';
import styles from './EntityHeader.module.css';

type EntityHeaderProps = {
  title: string;
  subtitle?: string;
  entityLabel?: string;
  updated?: string;
  badges?: string[];
};

export default function EntityHeader({ title, subtitle, entityLabel, updated, badges = [] }: EntityHeaderProps) {
  return (
    <header className={styles.header}>
      {entityLabel ? <p className={styles.eyebrow}>{entityLabel}</p> : null}
      <h1 className={styles.title}>{title}</h1>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      {badges.length ? <DocBadges items={badges} /> : null}
      {updated ? <p className={`microcopy ${styles.meta}`}>Updated: {updated}</p> : null}
    </header>
  );
}
