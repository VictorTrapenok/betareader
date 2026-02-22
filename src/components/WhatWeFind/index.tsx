import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const items = [
  {
    id: 'find.item1',
    en: 'Repetitions & tautologies',
    descId: 'find.item1.desc',
    enDesc: 'Words, phrases, or sentence patterns repeated too close together.',
  },
  {
    id: 'find.item2',
    en: 'Inconsistencies',
    descId: 'find.item2.desc',
    enDesc: 'Facts, character details, or scene logic that contradict each other.',
  },
  {
    id: 'find.item3',
    en: 'Pacing & sagging scenes',
    descId: 'find.item3.desc',
    enDesc: 'Scenes that drag on, rush, or lose narrative momentum without purpose.',
  },
  {
    id: 'find.item4',
    en: 'Character motivation',
    descId: 'find.item4.desc',
    enDesc: 'Actions or decisions that feel unexplained or out of character.',
  },
  {
    id: 'find.item5',
    en: 'Potential plot holes',
    descId: 'find.item5.desc',
    enDesc: 'Story elements that seem missing, unresolved, or internally contradictory.',
  },
];

export default function WhatWeFind(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <Translate id="find.title">What we find in your manuscript</Translate>
        </h2>
        <p className={styles.subtitle}>
          <Translate id="find.subtitle">
            Five categories of potential issues, each marked with a severity level.
          </Translate>
        </p>

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.dot} aria-hidden="true" />
              <div>
                <strong className={styles.itemTitle}>
                  <Translate id={item.id}>{item.en}</Translate>
                </strong>
                <p className={styles.itemDesc}>
                  <Translate id={item.descId}>{item.enDesc}</Translate>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.more}>
          <Link to="/what-we-check" className={styles.link}>
            <Translate id="find.learnmore">See detailed descriptions of each check</Translate>
            {' →'}
          </Link>
        </p>
      </div>
    </section>
  );
}
