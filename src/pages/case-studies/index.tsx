import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function CaseStudiesPage() {
    return (
        <Layout title="Case Studies" description="Selected outcomes from Doulab client work.">
            <main style={{ maxWidth: 960, margin: '0 auto', padding: '2rem 1rem' }}>
                <h1>Case Studies</h1>
                <p>We’re assembling highlights. Meanwhile, see <Link to="/ecosystems/redlab">RedLab</Link> or <Link to="/vigia-futura">Vigía Futura</Link>.</p>
                <p>Want specifics for your context? <Link to="/contact">Book a discovery call →</Link></p>
            </main>
        </Layout>
    );
}
