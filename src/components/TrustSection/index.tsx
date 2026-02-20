import React from 'react';
import Translate from '@docusaurus/Translate';
import LanguageNotice from '@site/src/components/LanguageNotice';
import styles from './styles.module.css';

const bullets = [
  { id: 'trust.bullet.no-publish', en: 'Your text is never published or stored' },
  { id: 'trust.bullet.beta-reader', en: 'Works like a human beta reader' },
  { id: 'trust.bullet.checks', en: 'Checks logic, repetitions, and pace' },
  { id: 'trust.bullet.drafts', en: 'Works with rough drafts — no polish required' },
  { id: 'trust.bullet.free', en: 'Free demo, no sign-up required' },
];

export default function TrustSection(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <Translate id="trust.title">BetaReader — AI manuscript check</Translate>
        </h1>

        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b.id} className={styles.bullet}>
              <span className={styles.checkmark} aria-hidden="true">✓</span>
              <Translate id={b.id}>{b.en}</Translate>
            </li>
          ))}
        </ul>

        <p className={styles.disclaimer}>
          <Translate id="trust.disclaimer">
            This is a demo. Results are approximate and for illustration only.
          </Translate>
        </p>

        <div className={styles.notice}>
          <LanguageNotice />
        </div>
      </div>
    </section>
  );
}
