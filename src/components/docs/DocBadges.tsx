import React from 'react';

type DocBadgesProps = {
  items: string[];
};

export default function DocBadges({ items }: DocBadgesProps) {
  if (!items.length) {
    return null;
  }
  return (
    <ul className={'components-docs-docbadges__badges'}>
      {items.map((item) => (
        <li key={item} className={'components-docs-docbadges__badge'}>
          {item}
        </li>
      ))}
    </ul>
  );
}
