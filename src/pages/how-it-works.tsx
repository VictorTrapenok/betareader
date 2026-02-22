import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import TryItNow from '@site/src/components/TryItNow';
import styles from './info.module.css';

const steps = [
  {
    num: '01',
    id: 'hiw.step1.title',
    en: 'Paste your text',
    descId: 'hiw.step1.desc',
    enDesc:
      'Paste a chapter or excerpt (minimum 200 characters) into the editor on the homepage. No registration or login required.',
  },
  {
    num: '02',
    id: 'hiw.step2.title',
    en: 'Analysis runs on our server',
    descId: 'hiw.step2.desc',
    enDesc:
      'Your text is sent to our server for AI analysis. It is processed securely, never published, and never shared with any third party.',
  },
  {
    num: '03',
    id: 'hiw.step3.title',
    en: 'Review the report',
    descId: 'hiw.step3.desc',
    enDesc:
      'You get a list of flagged potential issues grouped by category. Each item has a severity level and a short quote from your text.',
  },
];

const signalTypes = [
  { id: 'hiw.signal1', en: 'Category name (e.g. "Repetitions", "Logic", "Pacing")' },
  { id: 'hiw.signal2', en: 'Severity badge: Low / Med / High' },
  { id: 'hiw.signal3', en: 'Short description of the potential issue' },
  { id: 'hiw.signal4', en: 'Relevant quote from your text (truncated)' },
];

export default function HowItWorks(): JSX.Element {
  const title = translate({ id: 'hiw.meta.title', message: 'How it works — BetaReader' });
  const description = translate({
    id: 'hiw.meta.desc',
    message:
      'Three simple steps: paste text, get analysis, review the report. No sign-up, no rewrites.',
  });

  return (
    <Layout title={title} description={description}>
      <div className="br-static-page">
        <p className={styles.eyebrow}>
          <Translate id="hiw.eyebrow">How it works</Translate>
        </p>
        <h1 className={styles.pageTitle}>
          <Translate id="hiw.title">Three steps — no rewrites, no publishing</Translate>
        </h1>
        <p className={styles.lead}>
          <Translate id="hiw.lead">
            Your text is sent to our server for AI analysis. We never publish, store, or share
            it with anyone.
          </Translate>
        </p>

        <div className={styles.steps}>
          {steps.map((s) => (
            <div key={s.id} className={styles.step}>
              <span className={styles.stepNum}>{s.num}</span>
              <div>
                <h2 className={styles.stepTitle}>
                  <Translate id={s.id}>{s.en}</Translate>
                </h2>
                <p className={styles.stepDesc}>
                  <Translate id={s.descId}>{s.enDesc}</Translate>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.callout}>
          <strong>
            <Translate id="hiw.callout.title">No auto-corrections — ever</Translate>
          </strong>
          <p>
            <Translate id="hiw.callout.body">
              The tool never modifies, rephrases, or deletes any part of your text. It only reads
              and generates a report. All editorial decisions stay with you.
            </Translate>
          </p>
        </div>

        <h2 className={styles.subheading}>
          <Translate id="hiw.signals.title">What a signal looks like</Translate>
        </h2>
        <p>
          <Translate id="hiw.signals.intro">Each item in the report contains:</Translate>
        </p>
        <ul className={styles.signalList}>
          {signalTypes.map((s) => (
            <li key={s.id}>
              <Translate id={s.id}>{s.en}</Translate>
            </li>
          ))}
        </ul>
        <p>
          <Translate id="hiw.signals.note">
            Signals are hypotheses, not facts. Not every flag will be a real problem in your
            manuscript — treat them as a starting point for your own review.
          </Translate>
        </p>

        <p className={styles.internalLinks}>
          <Link to="/what-we-check">
            <Translate id="hiw.link.wwc">What exactly do we check →</Translate>
          </Link>
          {'  ·  '}
          <Link to="/trust">
            <Translate id="hiw.link.trust">Trust & Privacy →</Translate>
          </Link>
        </p>

        <TryItNow />
      </div>
    </Layout>
  );
}
