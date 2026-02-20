import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import TrustSection from '@site/src/components/TrustSection';
import EditorPanel from '@site/src/components/EditorPanel';
import ResultsPanel, { StatusType } from '@site/src/components/ResultsPanel';
import { getMockIssues, Issue } from '@site/src/utils/mockIssues';
import { getSampleText } from '@site/src/utils/sampleText';
import styles from './index.module.css';

function getStatus(text: string): StatusType {
  if (!text.trim()) return 'no-text';
  if (text.length < 200) return 'too-short';
  return 'ready';
}

export default function Home(): JSX.Element {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  const [text, setText] = useState('');
  const [issues, setIssues] = useState<Issue[]>([]);
  const [hasChecked, setHasChecked] = useState(false);

  const status = getStatus(text);

  const handleCheck = () => {
    setHasChecked(true);
    if (status === 'ready') {
      setIssues(getMockIssues(currentLocale, text.length));
    } else {
      setIssues([]);
    }
  };

  const handleClear = () => {
    setText('');
    setIssues([]);
    setHasChecked(false);
  };

  const handleLoadSample = () => {
    setText(getSampleText(currentLocale));
    setIssues([]);
    setHasChecked(false);
  };

  const pageTitle = translate({
    id: 'homepage.meta.title',
    message: 'BetaReader — AI Beta Reader for Authors',
  });

  const pageDescription = translate({
    id: 'homepage.meta.description',
    message:
      'Free AI manuscript checker. Paste your text and get instant feedback on logic, repetitions, and pacing.',
  });

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <Head>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/img/og-image.svg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <TrustSection />

      <section className={styles.editorSection}>
        <div className={styles.editorLayout}>
          <EditorPanel
            text={text}
            onChange={setText}
            onCheck={handleCheck}
            onClear={handleClear}
            onLoadSample={handleLoadSample}
          />
          <ResultsPanel issues={issues} status={status} hasChecked={hasChecked} />
        </div>
      </section>
    </Layout>
  );
}
