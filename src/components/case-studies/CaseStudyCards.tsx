import React from 'react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import { CASE_STUDIES, type CaseStudy } from './caseStudiesData';

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
        <img loading="lazy"
          src={`${cs.imageBase}.jpg`}
          alt={cs.imageAlt}
          width={1200}
          height={720}
          decoding="async"
          className={'components-case-studies-casestudycards__cardImage'}
        />
      </picture>

      <h3 id={`cs-${cs.slug}-title`}>
        <Link
          to={cs.to}
          data-cta={`${cs.dataCtaBase}.title`}
          aria-label={translate(
            { id: 'caseStudies.card.titleAriaLabel', message: 'Read {title} case study' },
            { title: cs.title },
          )}
        >
          {cs.title}
        </Link>
      </h3>

      {(cs.sector || cs.capabilities) && (
        <>
          {cs.sector && (
            <p className="microcopy">
              <strong>
                <Translate id="caseStudies.card.sectorLabel">Sector:</Translate>
              </strong>{' '}
              {cs.sector}
            </p>
          )}
          {cs.capabilities && (
            <p className="microcopy">
              <strong>
                <Translate id="caseStudies.card.capabilitiesLabel">Capabilities:</Translate>
              </strong>{' '}
              {cs.capabilities}
            </p>
          )}
        </>
      )}

      <p>{cs.excerpt}</p>

      <div className="cardFooter">
        <Link
          className="cardCta"
          to={cs.to}
          data-cta={cs.dataCtaBase}
          aria-label={translate(
            { id: 'caseStudies.card.ctaAriaLabel', message: 'Read {title} case study' },
            { title: cs.title },
          )}
        >
          <Translate id="caseStudies.card.cta">Read the case →</Translate>
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
