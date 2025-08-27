import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function DiagnosticsPage() {
    return (
        <Layout title="Diagnostics" description="Map your innovation maturity and identify gaps with ClarityScan®.">
            <main style={{ maxWidth: 960, margin: '0 auto', padding: '2rem 1rem' }}>
                <h1>Diagnostics</h1>
                <p>Map your current innovation maturity and find the gaps with evidence‑based tools like <strong>ClarityScan®</strong>.</p>
                <p><Link to="/contact">Request a diagnostic →</Link></p>
            </main>
        </Layout>
    );
}
