import React from 'react';
import DocBadges from './DocBadges';

type EntityHeaderProps = {
  title: string;
  subtitle?: string;
  entityLabel?: string;
  updated?: string;
  badges?: string[];
};

export default function EntityHeader({ title, subtitle, entityLabel, updated, badges = [] }: EntityHeaderProps) {
  return (
    <header className={'components-docs-entityheader__header'}>
      {entityLabel ? <p className={'components-docs-entityheader__eyebrow'}>{entityLabel}</p> : null}
      <h1 className={'components-docs-entityheader__title'}>{title}</h1>
      {subtitle ? <p className={'components-docs-entityheader__subtitle'}>{subtitle}</p> : null}
      {badges.length ? <DocBadges items={badges} /> : null}
      {updated ? <p className={`microcopy ${'components-docs-entityheader__meta'}`}>Updated: {updated}</p> : null}
    </header>
  );
}
