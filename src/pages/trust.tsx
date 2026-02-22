import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import TryItNow from '@site/src/components/TryItNow';
import styles from './info.module.css';

const dontItems = [
  {
    id: 'trust.dont.1',
    en: "We don't rewrite your style or voice",
    descId: 'trust.dont.1.desc',
    enDesc:
      'The tool only reads your text. Nothing is changed, rephrased, or deleted. Your prose remains exactly as you wrote it.',
  },
  {
    id: 'trust.dont.2',
    en: "We don't add to your plot or characters",
    descId: 'trust.dont.2.desc',
    enDesc:
      "BetaReader generates no new text. It doesn't suggest alternative sentences or story directions.",
  },
  {
    id: 'trust.dont.3',
    en: "We don't publish or share your text",
    descId: 'trust.dont.3.desc',
    enDesc:
      'Your text is processed on our server but never published, stored after analysis, or shared with any third party.',
  },
  {
    id: 'trust.dont.4',
    en: "We don't use your text for AI training",
    descId: 'trust.dont.4.desc',
    enDesc:
      'Your manuscripts are not used to train, fine-tune, or evaluate any AI models — now or in the future.',
  },
];

const doItems = [
  {
    id: 'trust.do.1',
    en: 'We highlight potential issues with severity badges',
    descId: 'trust.do.1.desc',
    enDesc:
      'Each flag shows a category, severity level (Low / Med / High), a short description, and a relevant excerpt from your text.',
  },
  {
    id: 'trust.do.2',
    en: 'We give you context, not commands',
    descId: 'trust.do.2.desc',
    enDesc:
      "The report explains why something might be a problem. It's a starting point for your own editorial review, not a list of things to fix.",
  },
  {
    id: 'trust.do.3',
    en: 'We let you decide',
    descId: 'trust.do.3.desc',
    enDesc:
      'Every finding can be accepted, ignored, or disagreed with. You are the author — the final word is always yours.',
  },
];

export default function TrustPage(): JSX.Element {
  const title = translate({
    id: 'trustpage.meta.title',
    message: 'Trust & Privacy — BetaReader',
  });
  const description = translate({
    id: 'trustpage.meta.desc',
    message:
      'BetaReader never rewrites your text, never publishes it, and never uses it for AI training.',
  });

  return (
    <Layout title={title} description={description}>
      <div className="br-static-page">
        <p className={styles.eyebrow}>
          <Translate id="trustpage.eyebrow">Trust & Privacy</Translate>
        </p>
        <h1 className={styles.pageTitle}>
          <Translate id="trustpage.title">We don't write for you</Translate>
        </h1>
        <p className={styles.lead}>
          <Translate id="trustpage.lead">
            BetaReader is an analysis tool, not a ghostwriter. Here's exactly what we do and
            don't do with your manuscript.
          </Translate>
        </p>

        <h2 className={styles.sectionTitle}>
          <Translate id="trustpage.dont.heading">What we DON'T do</Translate>
        </h2>
        <ul className={styles.trustList}>
          {dontItems.map((item) => (
            <li key={item.id} className={styles.trustItem}>
              <span className={styles.dontMark} aria-hidden="true">✗</span>
              <div>
                <strong>
                  <Translate id={item.id}>{item.en}</Translate>
                </strong>
                <p>
                  <Translate id={item.descId}>{item.enDesc}</Translate>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <h2 className={styles.sectionTitle}>
          <Translate id="trustpage.do.heading">What we DO</Translate>
        </h2>
        <ul className={styles.trustList}>
          {doItems.map((item) => (
            <li key={item.id} className={styles.trustItem}>
              <span className={styles.doMark} aria-hidden="true">✓</span>
              <div>
                <strong>
                  <Translate id={item.id}>{item.en}</Translate>
                </strong>
                <p>
                  <Translate id={item.descId}>{item.enDesc}</Translate>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.callout}>
          <strong>
            <Translate id="trustpage.read.title">How to read the report</Translate>
          </strong>
          <p>
            <Translate id="trustpage.read.body">
              Every signal in the report is a hypothesis, not a fact. Not every flag will be a
              genuine problem in your manuscript — some may be intentional stylistic choices. Use
              the report as one perspective, the same way you'd use notes from a beta reader. You
              remain the authority on your own story.
            </Translate>
          </p>
        </div>

        <p className={styles.internalLinks}>
          <Link to="/privacy">
            <Translate id="trustpage.link.privacy">Full Privacy Policy →</Translate>
          </Link>
          {'  ·  '}
          <Link to="/how-it-works">
            <Translate id="trustpage.link.hiw">How it works →</Translate>
          </Link>
        </p>

        <TryItNow />
      </div>
    </Layout>
  );
}
