import React from 'react';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function TryItNow(): JSX.Element {
  const {
    i18n: { currentLocale, defaultLocale },
  } = useDocusaurusContext();

  // Build a locale-aware link to the editor anchor on the homepage
  const editorHref =
    currentLocale === defaultLocale ? '/#editor' : `/${currentLocale}/#editor`;

  return (
    <aside className={styles.box}>
      <p className={styles.text}>
        <Translate id="tryit.text">Ready to check your own text?</Translate>
      </p>
      <a href={editorHref} className={styles.btn}>
        <Translate id="tryit.btn">Open the editor</Translate>
        {' →'}
      </a>
    </aside>
  );
}
