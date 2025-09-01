import React from 'react';
import Link from '@docusaurus/Link';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';

/** Minimal types for docs data */
type DocMeta = {
    id: string;
    title: string;
    description?: string;
    permalink: string;
    tags?: string[];
};
type DocsVersion = { isLast?: boolean; docs: DocMeta[] };
type DocsPluginData = { versions: DocsVersion[] };

/** Props (optional) */
type Props = {
    title?: string;
    limit?: number;
    sectionId?: string;
};

export default function WhitepaperCards({
    title = 'Latest Whitepapers',
    limit = 3,
    sectionId = 'latest-whitepapers',
}: Props) {
    const allDocsData = useAllDocsData();
    const docsPluginData = (allDocsData?.['default'] as unknown as DocsPluginData | undefined);

    const latestVersion =
        docsPluginData?.versions?.find((v) => v.isLast) ?? docsPluginData?.versions?.[0];

    const docs: DocMeta[] = latestVersion?.docs ?? [];

    // Prefer tag discipline over path heuristics
    const whitepapers = docs.filter((d) => (d.tags ?? []).includes('whitepaper'));

    // Naive "latest" by id desc; adjust if you add date fields later
    const latest = [...whitepapers].sort((a, b) => b.id.localeCompare(a.id)).slice(0, limit);

    if (latest.length === 0) return null;

    return (
        <section className="section" id={sectionId} aria-labelledby={`${sectionId}-title`}>
            <h2 id={`${sectionId}-title`}>{title}</h2>

            <div className="cardGrid">
                {latest.map((paper, idx) => (
                    <article key={paper.permalink ?? idx} className="card" aria-labelledby={`${sectionId}-card-${idx}-title`}>
                        <h3 id={`${sectionId}-card-${idx}-title`}>{paper.title}</h3>
                        {paper.description ? <p>{paper.description}</p> : null}
                        <div className="cardFooter">
                            <Link
                                className="cardCta"
                                to={paper.permalink}
                                data-cta="cta.whitepaper.read"
                                aria-label={`Read ${paper.title}`}
                            >
                                Read paper →
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
