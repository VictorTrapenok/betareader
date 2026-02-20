import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './pricing.module.css';

interface PlanFeature {
  id: string;
  en: string;
}

const freeFeatures: PlanFeature[] = [
  { id: 'pricing.free.feature1', en: 'Up to 5 checks per day' },
  { id: 'pricing.free.feature2', en: 'Basic analysis (repetitions, logic, pace)' },
  { id: 'pricing.free.feature3', en: 'No sign-up required' },
];

const proFeatures: PlanFeature[] = [
  { id: 'pricing.pro.feature1', en: 'Unlimited checks' },
  { id: 'pricing.pro.feature2', en: 'Deep AI analysis with explanations' },
  { id: 'pricing.pro.feature3', en: 'Export results as PDF or Markdown' },
  { id: 'pricing.pro.feature4', en: 'Priority support' },
];

export default function Pricing(): JSX.Element {
  return (
    <Layout
      title={translate({ id: 'pricing.meta.title', message: 'Pricing — BetaReader' })}
      description={translate({
        id: 'pricing.meta.description',
        message: 'Simple, transparent pricing for BetaReader.',
      })}
    >
      <div className="br-static-page">
        <h1>
          <Translate id="pricing.title">Pricing</Translate>
        </h1>
        <p className="br-page-meta">
          <Translate id="pricing.subtitle">Simple, transparent pricing.</Translate>
        </p>

        <div className={styles.plans}>
          {/* Free plan */}
          <div className={styles.plan}>
            <div className={styles.planHeader}>
              <h2 className={styles.planName}>
                <Translate id="pricing.free.title">Free</Translate>
              </h2>
              <p className={styles.planPrice}>
                <Translate id="pricing.free.price">$0 / month</Translate>
              </p>
              <p className={styles.planDesc}>
                <Translate id="pricing.free.desc">
                  Perfect for trying out BetaReader
                </Translate>
              </p>
            </div>
            <ul className={styles.featureList}>
              {freeFeatures.map((f) => (
                <li key={f.id}>
                  <span className={styles.check}>✓</span>
                  <Translate id={f.id}>{f.en}</Translate>
                </li>
              ))}
            </ul>
            <a href="/" className={styles.ctaBtn}>
              <Translate id="pricing.free.cta">Try the demo</Translate>
            </a>
          </div>

          {/* Pro plan */}
          <div className={`${styles.plan} ${styles.planFeatured}`}>
            <div className={styles.planHeader}>
              <h2 className={styles.planName}>
                <Translate id="pricing.pro.title">Pro</Translate>
              </h2>
              <p className={styles.planPrice}>
                <Translate id="pricing.pro.price">Coming soon</Translate>
              </p>
              <p className={styles.planDesc}>
                <Translate id="pricing.pro.desc">For serious authors</Translate>
              </p>
            </div>
            <ul className={styles.featureList}>
              {proFeatures.map((f) => (
                <li key={f.id}>
                  <span className={styles.check}>✓</span>
                  <Translate id={f.id}>{f.en}</Translate>
                </li>
              ))}
            </ul>
            <button type="button" className={`${styles.ctaBtn} ${styles.ctaBtnDisabled}`} disabled>
              <Translate id="pricing.pro.cta">Notify me</Translate>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
