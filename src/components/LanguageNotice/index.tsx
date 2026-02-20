import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function LanguageNotice(): JSX.Element {
  return (
    <p className={styles.notice}>
      <Translate id="notice.text">
        Demo mode — no AI calls are made. All results are pre-generated and illustrative only.
      </Translate>
    </p>
  );
}
