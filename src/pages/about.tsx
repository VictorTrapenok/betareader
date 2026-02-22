import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import TryItNow from '@site/src/components/TryItNow';
import styles from './info.module.css';

const audience = [
  { id: 'about.for.1', en: 'Fiction authors working on a draft and wanting a second opinion' },
  { id: 'about.for.2', en: 'Self-publishing authors preparing for the final edit' },
  {
    id: 'about.for.3',
    en: 'Writers getting ready to submit to an editor, agent, or publisher',
  },
  { id: 'about.for.4', en: 'Anyone who wants a structured way to review their own manuscript' },
];

export default function About(): JSX.Element {
  const title = translate({ id: 'about.meta.title', message: 'About — BetaReader' });
  const description = translate({
    id: 'about.meta.desc',
    message:
      'BetaReader is an AI manuscript analysis tool for fiction authors. Currently in beta.',
  });

  return (
    <Layout title={title} description={description}>
      <div className="br-static-page">
        <p className={styles.eyebrow}>
          <Translate id="about.eyebrow">About the project</Translate>
        </p>
        <h1 className={styles.pageTitle}>
          <Translate id="about.title">A second pair of eyes for your manuscript</Translate>
        </h1>
        <p className={styles.lead}>
          <Translate id="about.lead">
            BetaReader is a tool for fiction authors who want structured, impartial feedback on
            their manuscript — before it goes to a human editor or beta reader.
          </Translate>
        </p>

        <h2 className={styles.sectionTitle}>
          <Translate id="about.for.heading">Who it's for</Translate>
        </h2>
        <ul className={styles.simpleList}>
          {audience.map((a) => (
            <li key={a.id}>
              <Translate id={a.id}>{a.en}</Translate>
            </li>
          ))}
        </ul>

        <h2 className={styles.sectionTitle}>
          <Translate id="about.status.heading">Current status</Translate>
        </h2>
        <p>
          <Translate id="about.status.body">
            BetaReader is currently in beta. The demo version produces pre-generated,
            illustrative feedback to show what the full analysis will look like. We are actively
            collecting feedback from authors to shape the real AI-powered version.
          </Translate>
        </p>
        <p>
          <Translate id="about.status.body2">
            If you try the demo and have thoughts — on the types of issues flagged, the way
            results are presented, or anything else — we'd love to hear from you.
          </Translate>
        </p>

        <h2 className={styles.sectionTitle}>
          <Translate id="about.contact.heading">Get in touch</Translate>
        </h2>
        <p>
          <Translate id="about.contact.body">
            Write to us at{' '}
          </Translate>
          <a href="mailto:contact@betareader.app">contact@betareader.app</a>
          <Translate id="about.contact.body2">
            {' '}with feedback, questions, or early-access requests.
          </Translate>
        </p>

        <p className={styles.internalLinks}>
          <Link to="/how-it-works">
            <Translate id="about.link.hiw">How it works →</Translate>
          </Link>
          {'  ·  '}
          <Link to="/what-we-check">
            <Translate id="about.link.wwc">What we check →</Translate>
          </Link>
          {'  ·  '}
          <Link to="/trust">
            <Translate id="about.link.trust">Trust & Privacy →</Translate>
          </Link>
        </p>

        <TryItNow />
      </div>
    </Layout>
  );
}
