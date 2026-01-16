import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './red-incubadoras.module.css';

export default function RedIncubadorasPage() {
    return (
        <Layout title="Red de Incubadoras Público‑Privadas" description="Coordinated incubator network to scale startups.">
            <main className={styles.main}>
                <h1>Red de Incubadoras Público‑Privadas</h1>
                <p>Launching 2025. We’ll share milestones, member orgs and startup stats here.</p>
                <p><Link to="/contact">Join the list →</Link></p>
            </main>
        </Layout>
    );
}
