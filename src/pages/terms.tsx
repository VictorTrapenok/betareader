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
          <Translate id="terms.s2.title">2. Use of the Service</Translate>
        </h2>
        <p>
          <Translate id="terms.s2.body">
            BetaReader is provided as-is for informational and creative purposes. The demo version
            produces pre-generated illustrative feedback — it is not a substitute for professional
            editorial services.
          </Translate>
        </p>

        <h2>
          <Translate id="terms.s3.title">3. Intellectual Property</Translate>
        </h2>
        <p>
          <Translate id="terms.s3.body">
            You retain all rights to text you enter into BetaReader. We claim no ownership over
            your content.
          </Translate>
        </p>

        <h2>
          <Translate id="terms.s4.title">4. Disclaimer</Translate>
        </h2>
        <p>
          <Translate id="terms.s4.body">
            The service is provided "as is" without warranty of any kind. We are not liable for
            any damages arising from your use of BetaReader.
          </Translate>
        </p>

        <h2>
          <Translate id="terms.s5.title">5. Contact</Translate>
        </h2>
        <p>
          <Translate id="terms.s5.body">
            Questions? Contact us at contact@betareader.app.
          </Translate>
        </p>
      </div>
    </Layout>
  );
}
