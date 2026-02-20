import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

export default function Privacy(): JSX.Element {
  return (
    <Layout
      title={translate({ id: 'privacy.meta.title', message: 'Privacy Policy — BetaReader' })}
      description={translate({
        id: 'privacy.meta.description',
        message: 'BetaReader privacy policy.',
      })}
    >
      <div className="br-static-page">
        <h1>
          <Translate id="privacy.title">Privacy Policy</Translate>
        </h1>
        <p className="br-page-meta">
          <Translate id="privacy.updated">Last updated: January 2025</Translate>
        </p>

        <h2>
          <Translate id="privacy.s1.title">1. Data We Collect</Translate>
        </h2>
        <p>
          <Translate id="privacy.s1.body">
            In demo mode, BetaReader does not collect, store, or transmit any text you enter.
            All processing happens locally in your browser. We do not use cookies beyond those
            strictly necessary for the site to function.
          </Translate>
        </p>

        <h2>
          <Translate id="privacy.s2.title">2. Analytics</Translate>
        </h2>
        <p>
          <Translate id="privacy.s2.body">
            We may collect anonymised usage statistics (page views, browser type) to improve the
            product. No personally identifiable information is collected.
          </Translate>
        </p>

        <h2>
          <Translate id="privacy.s3.title">3. Third Parties</Translate>
        </h2>
        <p>
          <Translate id="privacy.s3.body">
            We do not sell or share your data with third parties. The demo version makes no
            external API calls.
          </Translate>
        </p>

        <h2>
          <Translate id="privacy.s4.title">4. Contact</Translate>
        </h2>
        <p>
          <Translate id="privacy.s4.body">
            Questions about this policy? Write to us at contact@betareader.app.
          </Translate>
        </p>
      </div>
    </Layout>
  );
}
