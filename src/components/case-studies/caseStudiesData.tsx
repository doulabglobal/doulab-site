import type { ReactNode } from 'react';

export type CaseStudy = {
  slug: string;
  title: string;
  to: string;
  imageBase: string;   // e.g. /img/afp-siembra-card
  imageAlt: string;
  sector?: string;
  capabilities?: string;
  excerpt: ReactNode;
  dataCtaBase: string; // e.g. cta.cases.card.afp_siembra
};

/** Canonical order — used site-wide */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'afp-siembra',
    title: 'AFP Siembra: Alcanza & SILAB',
    to: '/case-studies/afp-siembra',
    imageBase: '/img/afp-siembra-card',
    imageAlt: 'AFP Siembra — Alcanza product and SILAB innovation lab.',
    sector: 'Financial services',
    capabilities: 'Innovation lab; Digital product; Gate reviews',
    excerpt: 'From strategy to repeatable delivery: digital savings product and a working innovation lab.',
    dataCtaBase: 'cta.cases.card.afp_siembra',
  },
  {
    slug: 'alpha-inversiones',
    title: 'Alpha Inversiones: Alpha Escalable & Alpha en Línea',
    to: '/case-studies/alpha-inversiones',
    imageBase: '/img/alpha-hero',
    imageAlt: 'Alpha Inversiones — program and delivery snapshots.',
    sector: 'Financial services',
    capabilities: 'Training & Programs; Evidence packs; Gate reviews',
    excerpt: 'Evidence-led delivery with clear checkpoints and measurable outcomes.',
    dataCtaBase: 'cta.cases.card.alpha',
  },
  {
    slug: 'fundapec',
    title: 'FUNDAPEC: Alumni Platform',
    to: '/case-studies/fundapec',
    imageBase: '/img/fundapec-card',
    imageAlt: 'Comunidad FUNDAPEC — alumni platform and engagement.',
    sector: 'Education & finance',
    capabilities: 'Alumni platform; Engagement journeys; Evidence packs',
    excerpt: 'Redesign & relaunch into a reliable engagement engine with clear governance.',
    dataCtaBase: 'cta.cases.card.fundapec',
  },
  {
    slug: 'ogtic-redlab',
    title: 'OGTIC — RedLab Innovation Network',
    to: '/case-studies/ogtic-redlab',
    imageBase: '/img/ogtic-redlab-card',
    imageAlt: 'OGTIC — Red de Laboratorios de Innovación (RedLab) cohort sessions.',
    sector: 'Public sector',
    capabilities: 'Innovation network; Programs; Gate reviews',
    excerpt: 'Structured capability, shared methods, and cohort learning across public institutions.',
    dataCtaBase: 'cta.cases.card.ogtic_redlab',
  },
];
