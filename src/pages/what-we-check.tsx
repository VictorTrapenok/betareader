import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import TryItNow from '@site/src/components/TryItNow';
import styles from './info.module.css';

interface CheckItem {
  anchor: string;
  id: string;
  en: string;
  whyId: string;
  enWhy: string;
  reportId: string;
  enReport: string;
}

const checks: CheckItem[] = [
  {
    anchor: 'repetitions',
    id: 'wwc.rep.title',
    en: 'Repetitions & tautologies',
    whyId: 'wwc.rep.why',
    enWhy:
      "Repeated words or phrases within a short passage can make prose feel flat and less engaging. Authors often don't notice them during drafting.",
    reportId: 'wwc.rep.report',
    enReport:
      'The report flags the word or phrase and shows a short quote where it reoccurs. Severity depends on how often and how close the repetitions appear.',
  },
  {
    anchor: 'inconsistencies',
    id: 'wwc.inc.title',
    en: 'Inconsistencies',
    whyId: 'wwc.inc.why',
    enWhy:
      'A character leaves a room but appears in the next scene without entering. A prop changes colour. These continuity errors can break reader immersion.',
    reportId: 'wwc.inc.report',
    enReport:
      'Each inconsistency is listed with the relevant quote and marked High severity, since they tend to be genuine structural issues.',
  },
  {
    anchor: 'pacing',
    id: 'wwc.pac.title',
    en: 'Pacing & sagging scenes',
    whyId: 'wwc.pac.why',
    enWhy:
      "Scenes that drag with excessive internal monologue, or that rush through key moments, affect how readers experience the story's momentum.",
    reportId: 'wwc.pac.report',
    enReport:
      'Pacing signals are usually Low or Med severity and include a description of the pattern observed (e.g. "high density of introspection with no action beats").',
  },
  {
    anchor: 'motivation',
    id: 'wwc.mot.title',
    en: 'Character motivation',
    whyId: 'wwc.mot.why',
    enWhy:
      "When a character acts in a way that contradicts their established personality or goals, readers notice — even if they can't articulate why.",
    reportId: 'wwc.mot.report',
    enReport:
      'Motivation flags include a short description of the apparent contradiction and a quote. These are hypotheses — the author may have intentional reasons for the behaviour.',
  },
  {
    anchor: 'plot-holes',
    id: 'wwc.plot.title',
    en: 'Potential plot holes',
    whyId: 'wwc.plot.why',
    enWhy:
      "Unresolved story threads, missing cause-and-effect chains, or events that don't follow from earlier setup can undermine the story's credibility.",
    reportId: 'wwc.plot.report',
    enReport:
      'Plot hole signals are typically Med or High. They point to a specific element that appears to be missing or unresolved, inviting the author to reconsider.',
  },
];

export default function WhatWeCheck(): JSX.Element {
  const title = translate({ id: 'wwc.meta.title', message: 'What we check — BetaReader' });
  const description = translate({
    id: 'wwc.meta.desc',
    message:
      'Five categories of manuscript issues: repetitions, inconsistencies, pacing, character motivation, and plot holes.',
  });

  return (
    <Layout title={title} description={description}>
      <div className="br-static-page">
        <p className={styles.eyebrow}>
          <Translate id="wwc.eyebrow">What we check</Translate>
        </p>
        <h1 className={styles.pageTitle}>
          <Translate id="wwc.title">Five categories of potential manuscript issues</Translate>
        </h1>
        <p className={styles.lead}>
          <Translate id="wwc.lead">
            Each category targets a specific type of problem that commonly appears in fiction
            drafts. All findings are suggestions — not corrections.
          </Translate>
        </p>

        {checks.map((c) => (
          <section key={c.anchor} id={c.anchor} className={styles.checkSection}>
            <h2 className={styles.checkTitle}>
              <Translate id={c.id}>{c.en}</Translate>
            </h2>

            <h3 className={styles.checkSubtitle}>
              <Translate id="wwc.why.label">Why it matters</Translate>
            </h3>
            <p>
              <Translate id={c.whyId}>{c.enWhy}</Translate>
            </p>

            <h3 className={styles.checkSubtitle}>
              <Translate id="wwc.report.label">How it appears in the report</Translate>
            </h3>
            <p>
              <Translate id={c.reportId}>{c.enReport}</Translate>
            </p>
          </section>
        ))}

        <div className={styles.callout}>
          <strong>
            <Translate id="wwc.severity.title">Severity levels</Translate>
          </strong>
          <p>
            <Translate id="wwc.severity.body">
              Each issue is tagged Low, Med, or High. High means the problem is likely to affect
              reader experience. Low means it's worth a second look but may be intentional.
            </Translate>
          </p>
        </div>

        <p className={styles.internalLinks}>
          <Link to="/how-it-works">
            <Translate id="wwc.link.hiw">How the analysis works →</Translate>
          </Link>
          {'  ·  '}
          <Link to="/trust">
            <Translate id="wwc.link.trust">Trust & Privacy →</Translate>
          </Link>
        </p>

        <TryItNow />
      </div>
    </Layout>
  );
}
