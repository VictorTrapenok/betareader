import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

export default function Terms(): JSX.Element {
  return (
    <Layout
      title={translate({ id: 'terms.meta.title', message: 'Terms of Service — BetaReader' })}
      description={translate({
        id: 'terms.meta.description',
        message: 'BetaReader terms of service.',
      })}
    >
      <div className="br-static-page">
        <h1>
          <Translate id="terms.title">Terms of Service</Translate>
        </h1>
        <p className="br-page-meta">
          <Translate id="terms.updated">Last updated: January 2025</Translate>
        </p>

        <h2>
          <Translate id="terms.s1.title">1. Acceptance</Translate>
        </h2>
        <p>
          <Translate id="terms.s1.body">
            By using BetaReader you agree to these terms. If you do not agree, please do not use
            the service.
          </Translate>
        </p>

        <h2>
          <Translate id="terms.s2.title">2. Nature of the Service</Translate>
        </h2>
        <p>
          <Translate id="terms.s2.body">
            BetaReader is provided as an analysis tool for informational and creative purposes.
            The demo version produces pre-generated, illustrative feedback — it is not a
            substitute for professional editorial services. Findings are suggestions only.
          </Translate>
        </p>

        <h2>
          <Translate id="terms.s3.title">3. Intellectual Property</Translate>
        </h2>
        <p>
          <Translate id="terms.s3.body">
            You retain all rights to text you enter into BetaReader. We claim no ownership,
            licence, or interest in your content. See our Privacy Policy for how text is handled.
          </Translate>
        </p>

        <h2>
          <Translate id="terms.s4.title">4. Disclaimer of Warranties</Translate>
        </h2>
        <p>
          <Translate id="terms.s4.body">
            The service is provided "as is" and "as available" without warranty of any kind,
            express or implied. We do not warrant that results are accurate, complete, or suitable
            for any particular purpose.
          </Translate>
        </p>

        <h2>
          <Translate id="terms.s5.title">5. Limitation of Liability</Translate>
        </h2>
        <p>
          <Translate id="terms.s5.body">
            To the fullest extent permitted by law, BetaReader is not liable for any indirect,
            incidental, or consequential damages arising from your use of the service.
          </Translate>
        </p>

        <h2>
          <Translate id="terms.s6.title">6. Contact</Translate>
        </h2>
        <p>
          <Translate id="terms.s6.body">Questions?</Translate>
          {' '}
          <a href="mailto:contact@betareader.app">contact@betareader.app</a>
        </p>
      </div>
    </Layout>
  );
}
