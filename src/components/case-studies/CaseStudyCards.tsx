import React from 'react';
import Link from '@docusaurus/Link';
import { CASE_STUDIES, type CaseStudy } from './caseStudiesData';
import styles from './CaseStudyCards.module.css';

type Props = {
  variant?: 'grid' | 'related';
  slugs?: string[];
  limit?: number;
  className?: string;
};

function byMasterOrder(slugs?: string[]) {
  if (!slugs || slugs.length === 0) return CASE_STUDIES;
  const idx = new Map(CASE_STUDIES.map((c, i) => [c.slug, i]));
  const filtered = CASE_STUDIES.filter(c => slugs.includes(c.slug));
  return filtered.sort((a, b) => (idx.get(a.slug)! - idx.get(b.slug)!));
}

function Card({ cs }: { cs: CaseStudy }) {
  return (
    <article className="card" aria-labelledby={`cs-${cs.slug}-title`}>
      <picture>
        <source srcSet={`${cs.imageBase}.avif`} type="image/avif" />
        <source srcSet={`${cs.imageBase}.webp`} type="image/webp" />
        <img
          src={`${cs.imageBase}.jpg`}
          alt={cs.imageAlt}
          width={1200}
          height={720}
          loading="lazy"
          decoding="async"
          className={styles.cardImage}
        />
      </picture>

      <h3 id={`cs-${cs.slug}-title`}>
        <Link to={cs.to} data-cta={`${cs.dataCtaBase}.title`} aria-label={`Read ${cs.title} case study`}>
          {cs.title}
        </Link>
      </h3>

      {(cs.sector || cs.capabilities) && (
        <>
          {cs.sector && <p className="microcopy"><strong>Sector:</strong> {cs.sector}</p>}
          {cs.capabilities && <p className="microcopy"><strong>Capabilities:</strong> {cs.capabilities}</p>}
        </>
      )}

      <p>{cs.excerpt}</p>

      <div className="cardFooter">
        <Link className="cardCta" to={cs.to} data-cta={cs.dataCtaBase} aria-label={`Read ${cs.title} case study`}>
          Read the case →
        </Link>
      </div>
    </article>
  );
}

export default function CaseStudyCards({ variant = 'grid', slugs, limit, className }: Props) {
  let list = byMasterOrder(slugs);
  if (typeof limit === 'number') list = list.slice(0, limit);

  return (
    <div className={className ?? 'cardGrid'}>
      {list.map(cs => <Card key={cs.slug} cs={cs} />)}
    </div>
  );
}
