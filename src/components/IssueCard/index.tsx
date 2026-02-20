import React from 'react';
import type { Issue } from '@site/src/utils/mockIssues';
import styles from './styles.module.css';

interface Props {
  issue: Issue;
}

const QUOTE_MAX = 120;

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max).trimEnd() + '…';
}

export default function IssueCard({ issue }: Props): JSX.Element {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.category}>{issue.category}</span>
        <span className={`${styles.badge} ${styles[`badge${issue.severity}`]}`}>
          {issue.severity}
        </span>
      </div>
      <p className={styles.description}>{issue.description}</p>
      {issue.quote && (
        <blockquote className={styles.quote}>
          {truncate(issue.quote, QUOTE_MAX)}
        </blockquote>
      )}
    </article>
  );
}
