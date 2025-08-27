import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAllDocsData} from '@docusaurus/plugin-content-docs/client';

export default function WhitepaperCards() {
  const {siteConfig} = useDocusaurusContext();
  const allDocsData = useAllDocsData();

  const whitepapers =
    allDocsData?.default?.docs?.filter(doc =>
      doc.id.startsWith('whitepapers/')
    ) ?? [];

  const latestWhitepapers = whitepapers.slice(0, 3); // Adjust how many you want to show

  return (
    <section className="container margin-vert--xl">
      <div className="row">
        <div className="col">
          <h2 className="text--center">Latest Whitepapers</h2>
        </div>
      </div>
      <div className="row">
        {latestWhitepapers.map((paper, idx) => (
          <div key={idx} className="col col--4 margin-vert--md">
            <div className="card">
              <div className="card__header">
                <h3>{paper.title}</h3>
              </div>
              <div className="card__body">
                <p>{paper.description ?? 'No description available.'}</p>
              </div>
              <div className="card__footer">
                <Link
