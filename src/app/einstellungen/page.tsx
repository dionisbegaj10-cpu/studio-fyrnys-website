'use client';

import { useEffect, useState } from 'react';
import LeistungenNav from '../leistungen/LeistungenNav';
import {
  TYPOGRAPHY_STORAGE_KEY,
  FONT_OPTIONS,
  applyTypographySettings,
} from '@/components/TypographySettings';

const DEFAULTS = {
  font: FONT_OPTIONS[0].value,
  headlineScale: 1,
  bodyScale: 1,
};

export default function EinstellungenPage() {
  const [font, setFont] = useState(DEFAULTS.font);
  const [headlineScale, setHeadlineScale] = useState(DEFAULTS.headlineScale);
  const [bodyScale, setBodyScale] = useState(DEFAULTS.bodyScale);

  useEffect(() => {
    const saved = localStorage.getItem(TYPOGRAPHY_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFont(parsed.font ?? DEFAULTS.font);
        setHeadlineScale(parsed.headlineScale ?? DEFAULTS.headlineScale);
        setBodyScale(parsed.bodyScale ?? DEFAULTS.bodyScale);
      } catch {
        // ignore malformed storage
      }
    }
  }, []);

  useEffect(() => {
    const settings = { font, headlineScale, bodyScale };
    applyTypographySettings(settings);
    localStorage.setItem(TYPOGRAPHY_STORAGE_KEY, JSON.stringify(settings));
  }, [font, headlineScale, bodyScale]);

  function reset() {
    setFont(DEFAULTS.font);
    setHeadlineScale(DEFAULTS.headlineScale);
    setBodyScale(DEFAULTS.bodyScale);
  }

  return (
    <div style={{ backgroundColor: '#f7f6f0', minHeight: '100vh', padding: '0 16px' }}>
      <LeistungenNav />

      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 8px 96px' }}>
        <h1
          style={{
            fontFamily: "'TT Norms Pro', sans-serif",
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            color: '#2d2926',
            marginBottom: '8px',
            textTransform: 'uppercase',
          }}
        >
          Schriftart &amp; Größen
        </h1>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '13px', color: '#888', marginBottom: '40px' }}>
          Änderungen gelten sofort auf der ganzen Website und werden in diesem Browser gespeichert.
        </p>

        {/* Font family */}
        <label style={{ display: 'block', fontFamily: "'TT Norms Pro', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2d2926', marginBottom: '10px' }}>
          Schriftart (Überschriften)
        </label>
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 14px',
            fontSize: '16px',
            fontFamily: "'TT Norms Pro', sans-serif",
            border: '1px solid #d8d3c9',
            backgroundColor: '#fff',
            color: '#2d2926',
            marginBottom: '32px',
          }}
        >
          {FONT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        <p style={{ fontFamily: 'var(--font-halis)', fontWeight: 700, fontSize: 'calc(28px * var(--headline-scale))', color: '#2d2926', marginBottom: '40px' }}>
          Über uns
        </p>

        {/* Headline size */}
        <label style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'TT Norms Pro', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2d2926', marginBottom: '10px' }}>
          <span>Überschriften-Größe</span>
          <span>{Math.round(headlineScale * 100)}%</span>
        </label>
        <input
          type="range"
          min={0.7}
          max={1.6}
          step={0.05}
          value={headlineScale}
          onChange={(e) => setHeadlineScale(Number(e.target.value))}
          style={{ width: '100%', marginBottom: '32px' }}
        />

        {/* Body size */}
        <label style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'TT Norms Pro', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2d2926', marginBottom: '10px' }}>
          <span>Text-Größe</span>
          <span>{Math.round(bodyScale * 100)}%</span>
        </label>
        <input
          type="range"
          min={0.7}
          max={1.6}
          step={0.05}
          value={bodyScale}
          onChange={(e) => setBodyScale(Number(e.target.value))}
          style={{ width: '100%', marginBottom: '16px' }}
        />
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: 'calc(14px * var(--body-scale))', color: '#666', marginBottom: '40px' }}>
          Beispieltext in der aktuellen Text-Größe, damit du siehst, wie Absätze auf der Website wirken.
        </p>

        <button
          onClick={reset}
          style={{
            fontFamily: "'TT Norms Pro', sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#2d2926',
            background: 'none',
            border: '1px solid #2d2926',
            padding: '12px 24px',
            cursor: 'pointer',
          }}
        >
          Zurücksetzen
        </button>
      </div>
    </div>
  );
}
