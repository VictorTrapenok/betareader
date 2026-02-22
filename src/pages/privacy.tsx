import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export default function Privacy(): JSX.Element {
  return (
    <Layout
      title={translate({ id: 'privacy.meta.title', message: 'Privacy Policy — BetaReader' })}
      description={translate({
        id: 'privacy.meta.description',
        message: 'BetaReader privacy policy — data collection, storage, and AI training.',
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
          <Translate id="privacy.s1.title">1. Text You Enter</Translate>
        </h2>
        <p>
          <Translate id="privacy.s1.body">
            The text you paste into BetaReader is sent to our server for AI analysis. It is
            processed securely, never stored in a database, never published, and never shared with
            any third party. Once analysis is complete, the text is discarded.
          </Translate>
        </p>

        <h2>
          <Translate id="privacy.s2.title">2. AI Training</Translate>
        </h2>
        <p>
          <Translate id="privacy.s2.body">
            Your manuscripts are not used to train, fine-tune, evaluate, or otherwise improve
            any AI model — by us or by any third party. This applies to the current demo and will
            remain our policy in future paid versions unless you explicitly opt in.
          </Translate>
        </p>

        <h2>
          <Translate id="privacy.s3.title">3. Analytics</Translate>
        </h2>
        <p>
          <Translate id="privacy.s3.body">
            We may collect anonymised usage data (page views, browser type, country) to improve
            the product. No personally identifiable information is linked to these events.
          </Translate>
        </p>

        <h2>
          <Translate id="privacy.s4.title">4. Email Address</Translate>
        </h2>
        <p>
          <Translate id="privacy.s4.body">
            If you submit your email via the early-access form, we store it only to send you
            product updates. We will never sell or share your email address. You can unsubscribe
            at any time by replying to any email from us.
          </Translate>
        </p>

        <h2>
          <Translate id="privacy.s5.title">5. Cookies</Translate>
        </h2>
        <p>
          <Translate id="privacy.s5.body">
            We use only essential cookies required for the site to function (e.g. language
            preference). No advertising or tracking cookies are set.
          </Translate>
        </p>

        <h2>
          <Translate id="privacy.s6.title">6. Third Parties</Translate>
        </h2>
        <p>
          <Translate id="privacy.s6.body">
            We use a third-party AI provider to analyse your text. Your text is transmitted
            securely. The provider does not store it and does not use it for AI training. This
            policy will be updated if our data handling changes.
          </Translate>
        </p>

        <h2>
          <Translate id="privacy.s7.title">7. Contact</Translate>
        </h2>
        <p>
          <Translate id="privacy.s7.body">Questions about this policy?</Translate>
          {' '}
          <a href="mailto:contact@betareader.app">contact@betareader.app</a>
        </p>

        <p style={{ marginTop: '2rem' }}>
          <Link to="/trust">
            <Translate id="privacy.link.trust">← Trust & Privacy overview</Translate>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
