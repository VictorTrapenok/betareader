import React, { useState } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function CtaSection(): JSX.Element {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    // Wire up to Mailchimp / ConvertKit / etc. before going live
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'email_signup', { event_category: 'cta' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <Translate id="cta.title">Get early access</Translate>
        </h2>
        <p className={styles.subtitle}>
          <Translate id="cta.subtitle">
            Leave your email and we'll notify you when the full AI-powered version is ready.
          </Translate>
        </p>

        {submitted ? (
          <p className={styles.success}>
            <Translate id="cta.success">✓ Thank you! We'll be in touch.</Translate>
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={translate({ id: 'cta.placeholder', message: 'your@email.com' })}
              className={styles.input}
              required
              aria-label={translate({ id: 'cta.inputLabel', message: 'Your email address' })}
            />
            <button type="submit" className={styles.btn}>
              <Translate id="cta.btn">Notify me</Translate>
            </button>
          </form>
        )}

        <p className={styles.note}>
          <Translate id="cta.note">No spam. Unsubscribe at any time.</Translate>
        </p>
      </div>
    </section>
  );
}
