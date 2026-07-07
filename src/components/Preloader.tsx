'use client';

import { useEffect, useState } from 'react';

const DISPLAY_MS = 1400;
const FADE_MS = 600;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const dismiss = () => setFading(true);
    const fadeTimer = setTimeout(dismiss, DISPLAY_MS);
    return () => clearTimeout(fadeTimer);
  }, []);

  useEffect(() => {
    if (!fading) return;
    const removeTimer = setTimeout(() => setVisible(false), FADE_MS);
    return () => clearTimeout(removeTimer);
  }, [fading]);

  if (!visible) return null;

  return (
    <div
      onClick={() => setFading(true)}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#f7f6f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease`,
        pointerEvents: fading ? 'none' : 'auto',
        cursor: 'pointer',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/fyrnys-logo-new.png"
        alt="Studio Fyrnys"
        style={{ width: '220px', maxWidth: '50vw', height: 'auto' }}
      />
    </div>
  );
}
