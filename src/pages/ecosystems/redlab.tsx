import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './redlab.module.css';

export default function RedLabPage() {
    return (
        <Layout title="Red de Laboratorios de Innovación (RedLab)" description="National network of public innovation labs.">
            <main className={styles.main}>
                <h1>Red de Laboratorios de Innovación (RedLab)</h1>
                <p>Page in progress. We’ll publish program structure, cohorts and outcomes here.</p>
                <p><Link to="/contact">Get RedLab updates →</Link></p>
            </main>
        </Layout>
    );
}
