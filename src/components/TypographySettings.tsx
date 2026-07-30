'use client';

import { useEffect } from 'react';

export const TYPOGRAPHY_STORAGE_KEY = 'fyrnys-typography-settings';

export const FONT_OPTIONS = [
  { label: 'Fraunces (aktuell)', value: 'var(--font-fraunces), Georgia, serif' },
  { label: 'Playfair Display', value: 'var(--font-playfair), Georgia, serif' },
  { label: 'Libre Baskerville', value: 'var(--font-libre), Georgia, serif' },
  { label: 'Bodoni Moda (elegant, hoher Kontrast)', value: 'var(--font-bodoni), Georgia, serif' },
  { label: 'Cormorant Garamond (fein, klassisch)', value: 'var(--font-cormorant), Georgia, serif' },
  { label: 'DM Serif Display (kräftig, editorial)', value: 'var(--font-dm-serif), Georgia, serif' },
  { label: 'Space Grotesk (modern, geometrisch)', value: 'var(--font-space-grotesk), sans-serif' },
  { label: 'Caveat (verspielt, handgeschrieben)', value: 'var(--font-caveat), cursive' },
  { label: 'Grumpy 24 (fett, seosuite.studio)', value: "'Grumpy 24', sans-serif" },
  { label: 'Halis R (original)', value: "'Halis R', Georgia, serif" },
  { label: 'TT Norms Pro (serifenlos)', value: "'TT Norms Pro', sans-serif" },
  { label: 'Georgia (System-Serif)', value: 'Georgia, serif' },
];

export function applyTypographySettings(settings: { font: string; headlineScale: number; bodyScale: number }) {
  const root = document.documentElement;
  root.style.setProperty('--font-halis', settings.font);
  root.style.setProperty('--headline-scale', String(settings.headlineScale));
  root.style.setProperty('--body-scale', String(settings.bodyScale));
}

export default function TypographySettings() {
  useEffect(() => {
    const saved = localStorage.getItem(TYPOGRAPHY_STORAGE_KEY);
    if (saved) {
      try {
        applyTypographySettings(JSON.parse(saved));
      } catch {
        // ignore malformed storage
      }
    }
  }, []);

  return null;
}
