import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function TrustSection(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>
          <Translate id="hero.eyebrow">AI manuscript analysis · demo</Translate>
        </p>

        <h1 className={styles.title}>
          <Translate id="hero.title">
            Find problems in your manuscript — without rewriting your style
          </Translate>
        </h1>

        <p className={styles.subtitle}>
          <Translate id="hero.subtitle">
            The tool highlights potential weak spots: logic, repetitions, inconsistencies.
            The decisions are always yours.
          </Translate>
        </p>

        <p className={styles.disclaimer}>
          <Translate id="hero.disclaimer">We don't automatically change your text.</Translate>
        </p>

        <nav className={styles.links} aria-label="Learn more">
          <Link to="/how-it-works" className={styles.link}>
            <Translate id="hero.link.hiw">How it works</Translate>
            {' →'}
          </Link>
          <Link to="/what-we-check" className={styles.link}>
            <Translate id="hero.link.wwc">What we check</Translate>
            {' →'}
          </Link>
          <Link to="/trust" className={styles.link}>
            <Translate id="hero.link.trust">Trust &amp; Privacy</Translate>
            {' →'}
          </Link>
        </nav>
      </div>
    </section>
  );
}
