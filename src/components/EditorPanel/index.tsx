import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

interface Props {
  text: string;
  onChange: (value: string) => void;
  onCheck: () => void;
  onClear: () => void;
  onLoadSample: () => void;
}

export default function EditorPanel({
  text,
  onChange,
  onCheck,
  onClear,
  onLoadSample,
}: Props): JSX.Element {
  const placeholder = translate({
    id: 'editor.textarea.placeholder',
    message: 'Paste your manuscript here (minimum 200 characters)…',
  });

  return (
    <div className={styles.panel}>
      <h2 className={styles.panelTitle}>
        <Translate id="editor.title">Text</Translate>
      </h2>

      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={translate({ id: 'editor.title', message: 'Text' })}
        spellCheck
      />

      <div className={styles.footer}>
        <span className={styles.charCount}>
          {text.length}{' '}
          <Translate id="editor.chars.label">characters</Translate>
        </span>

        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.btnSecondary}
            onClick={onLoadSample}
            title={translate({ id: 'editor.btn.sample', message: 'Load sample' })}
          >
            <Translate id="editor.btn.sample">Load sample</Translate>
          </button>

          <button
            type="button"
            className={styles.btnSecondary}
            onClick={onClear}
            disabled={!text}
            title={translate({ id: 'editor.btn.clear', message: 'Clear' })}
          >
            <Translate id="editor.btn.clear">Clear</Translate>
          </button>

          <button
            type="button"
            className={styles.btnPrimary}
            onClick={onCheck}
            title={translate({ id: 'editor.btn.check', message: 'Validate' })}
          >
            <Translate id="editor.btn.check">Validate</Translate>
          </button>
        </div>
      </div>
    </div>
  );
}
