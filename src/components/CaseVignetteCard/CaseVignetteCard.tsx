import React from "react";
import styles from "./CaseVignetteCard.module.css";

type CaseVignetteCardProps = {
  title: string;
  context: string;
  intervention: string;
  outcome: string;
  lesson: string;
  source: React.ReactNode; // allow links/citations
};

export default function CaseVignetteCard({
  title,
  context,
  intervention,
  outcome,
  lesson,
  source,
}: CaseVignetteCardProps) {
  return (
    <aside className={styles.card} aria-label={`Case vignette: ${title}`}>
      <div className={styles.header}>
        <span className={styles.kicker}>Case vignette</span>
        <h4 className={styles.title}>{title}</h4>
      </div>

      <div className={styles.grid}>
        <div className={styles.col}>
          <div className={styles.item}>
            <div className={styles.label}>Context</div>
            <div className={styles.value}>{context}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Intervention</div>
            <div className={styles.value}>{intervention}</div>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.item}>
            <div className={styles.label}>Outcome</div>
            <div className={styles.value}>{outcome}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Lesson</div>
            <div className={styles.value}>{lesson}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Source</div>
            <div className={styles.value}>{source}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
