import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import type { Issue } from '@site/src/utils/mockIssues';
import IssueCard from '@site/src/components/IssueCard';
import styles from './styles.module.css';

export type StatusType = 'no-text' | 'too-short' | 'ready';

interface Props {
  issues: Issue[];
  status: StatusType;
  hasChecked: boolean;
}

function StatusBadge({ status }: { status: StatusType }): JSX.Element {
  const classMap: Record<StatusType, string> = {
    'no-text': styles.statusNeutral,
    'too-short': styles.statusWarning,
    ready: styles.statusReady,
  };

  // Use translate() (string) rather than <Translate> (ReactNode) to avoid type issues in Record
  const labelMap: Record<StatusType, string> = {
    'no-text': translate({ id: 'results.status.no-text', message: 'No text' }),
    'too-short': translate({ id: 'results.status.too-short', message: 'Too short' }),
    ready: translate({ id: 'results.status.ready', message: 'Checked' }),
  };

  return (
    <span className={`${styles.statusBadge} ${classMap[status]}`}>
      {labelMap[status]}
    </span>
  );
}

function EmptyState({
  status,
  hasChecked,
}: {
  status: StatusType;
  hasChecked: boolean;
}): JSX.Element | null {
  if (!hasChecked) {
    return (
      <p className={styles.emptyMsg}>
        <Translate id="results.empty.waiting">
          Click "Validate" to see results
        </Translate>
      </p>
    );
  }

  if (status === 'no-text') {
    return (
      <p className={styles.emptyMsg}>
        <Translate id="results.empty.notext">No text to check</Translate>
      </p>
    );
  }

  if (status === 'too-short') {
    return (
      <p className={styles.emptyMsg}>
        <Translate id="results.empty.tooshort">
          Enter at least 200 characters to validate
        </Translate>
      </p>
    );
  }

  return null;
}

export default function ResultsPanel({ issues, status, hasChecked }: Props): JSX.Element {
  const showEmpty = issues.length === 0;

  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2 className={styles.panelTitle}>
          <Translate id="results.title">Validation result</Translate>
        </h2>
        {hasChecked && <StatusBadge status={status} />}
      </div>

      {!showEmpty && (
        <p className={styles.issueCount}>
          {translate(
            { id: 'results.count', message: '{count} issue(s) found' },
            { count: issues.length },
          )}
        </p>
      )}

      <div className={styles.issueList}>
        {showEmpty ? (
          <EmptyState status={status} hasChecked={hasChecked} />
        ) : (
          issues.map((issue) => <IssueCard key={issue.id} issue={issue} />)
        )}
      </div>
    </div>
  );
}
