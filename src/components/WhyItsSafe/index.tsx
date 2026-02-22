import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const items = [
  {
    id: 'safe.item1',
    en: "We don't rewrite",
    descId: 'safe.item1.desc',
    enDesc: 'Nothing in your text is changed. The tool only reads and highlights potential issues.',
  },
  {
    id: 'safe.item2',
    en: 'You decide',
    descId: 'safe.item2.desc',
    enDesc: "Every finding is a suggestion. Accept, ignore, or disagree — it's your story.",
  },
  {
    id: 'safe.item3',
    en: 'Your text stays private',
    descId: 'safe.item3.desc',
    enDesc: 'Your text is processed on our server and never published, shared, or stored after analysis.',
  },
  {
    id: 'safe.item4',
    en: 'No AI training on your text',
    descId: 'safe.item4.desc',
    enDesc: 'Your manuscripts are not used to train AI models.',
  },
];

export default function WhyItsSafe(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <Translate id="safe.title">Why it's safe for your manuscript</Translate>
        </h2>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <span className={styles.check} aria-hidden="true">✓</span>
              <div>
                <strong className={styles.cardTitle}>
                  <Translate id={item.id}>{item.en}</Translate>
                </strong>
                <p className={styles.cardDesc}>
                  <Translate id={item.descId}>{item.enDesc}</Translate>
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.more}>
          <Link to="/trust" className={styles.link}>
            <Translate id="safe.learnmore">Full trust & privacy policy</Translate>
            {' →'}
          </Link>
        </p>
      </div>
    </section>
  );
}
