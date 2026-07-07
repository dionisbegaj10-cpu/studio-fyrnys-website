'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
];

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16" width="20" height="20">
    <path fill="currentColor" d="M1 .5a.5.5 0 1 0 0 1h15.71a.5.5 0 0 0 0-1zM.5 8a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8m0 7a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"/>
  </svg>
);

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const wordmarkStyle: React.CSSProperties = {
    fontFamily: "'TT Norms Pro', sans-serif",
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'var(--marble-white)',
  };

  return (
    <>
      {/* ── TRANSPARENT NAV BAR ─────────────────────────────────────── */}
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          height: '56px',
          backgroundColor: 'transparent',
          color: 'var(--marble-white)',
          width: '100%',
          pointerEvents: menuOpen ? 'none' : 'auto',
          opacity: menuOpen ? 0 : 1,
          transition: 'opacity 0.2s ease',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '100%', padding: '0 20px', display: 'flex', alignItems: 'center', position: 'relative' }}>

          {/* Mobile: wordmark left, hamburger right */}
          <div className="nav-mobile-default" style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
            <Link href="/" style={wordmarkStyle}>Studio Fyrnys</Link>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Menu öffnen"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--marble-white)', padding: 0, display: 'flex', alignItems: 'center' }}
            >
              <HamburgerIcon />
            </button>
          </div>

          {/* Desktop: logo left | Menu + Instagram right */}
          <div className="nav-desktop-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '30px', alignItems: 'center', width: '100%' }}>
            <div>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/fyrnys-logo-transparent.png" alt="Fyrnys" style={{ height: '44px', width: 'auto', display: 'block' }} />
              </Link>
            </div>
            <div />
            <div />
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '24px' }}>
              <button
                onClick={() => setMenuOpen(true)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--marble-white)', fontFamily: 'inherit', fontSize: '14px', fontWeight: 400, padding: 0, transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--linen-beige)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--marble-white)')}
              >
                Menu
              </button>
              <a href="https://www.instagram.com/studio_fyrnys/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/instagram-white.svg" alt="Instagram" style={{ height: '18px', width: 'auto', opacity: 0.85 }} />
              </a>
            </div>
          </div>

        </div>
      </nav>

      {/* ── DESKTOP SLIDE-DOWN OVERLAY ───────────────────────────────── */}
      <div
        className="nav-desktop-only"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 99,
          backgroundColor: '#f7f6f0',
          overflowY: 'auto',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.45s cubic-bezier(0.76, 0, 0.24, 1)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <div style={{ height: '74px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 30px', borderBottom: '1px solid #efefef' }}>
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: 'inline-flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/fyrnys-logo-transparent.png" alt="Fyrnys" style={{ height: '40px', width: 'auto', filter: 'invert(1) brightness(0)' }} />
          </Link>
          <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'TT Norms Pro', sans-serif", fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', padding: 0, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#1a1a1a')}
            onMouseLeave={e => (e.currentTarget.style.color = '#888')}
          >Close</button>
        </div>
        <div style={{ padding: '48px 30px 56px', display: 'flex', flexDirection: 'column' }}>
          {navLinks.map((link, i) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', fontFamily: "'TT Norms Pro', sans-serif", fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, letterSpacing: '0.06em', color: '#1a1a1a', textDecoration: 'none', padding: '18px 0', borderBottom: i < navLinks.length - 1 ? '1px solid #efefef' : 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#b0a898')}
              onMouseLeave={e => (e.currentTarget.style.color = '#1a1a1a')}
            >{link.label}</Link>
          ))}
          <div style={{ marginTop: '40px' }}>
            <a href="https://www.instagram.com/studio_fyrnys/" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'TT Norms Pro', sans-serif", fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1a1a1a')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888')}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/instagram-white.svg" alt="" style={{ height: '14px', width: 'auto', filter: 'invert(0.5)' }} />
              Instagram
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-desktop-only" onClick={() => setMenuOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 98, background: 'rgba(0,0,0,0.3)' }}
        />
      )}

      {/* ── MOBILE FULL-SCREEN MENU ──────────────────────────────────── */}
      {menuOpen && (
        <div
          className="nav-mobile-default"
          style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: '#f7f6f0', flexDirection: 'column' }}
        >
          {/* Top bar: wordmark left, X right */}
          <div style={{ height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px 0 20px', flexShrink: 0 }}>
            <Link href="/" onClick={() => setMenuOpen(false)} style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#2d2926', textDecoration: 'none' }}>
              Studio Fyrnys
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Menü schließen"
              style={{ background: 'none', border: '1px solid #2d2926', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', color: '#2d2926' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="14" height="14">
                <path fill="currentColor" d="M.293.293a1 1 0 0 1 1.414 0L7 5.586 12.293.293a1 1 0 1 1 1.414 1.414L8.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414L7 8.414l-5.293 5.293A1 1 0 0 1 .293 12.707L5.586 7 .293 1.707A1 1 0 0 1 .293.293z"/>
              </svg>
            </button>
          </div>
          {/* Nav links */}
          <nav style={{ display: 'flex', flexDirection: 'column', paddingTop: '8px' }}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#2d2926', textDecoration: 'none', padding: '11px 20px' }}
              >{link.label}</Link>
            ))}
          </nav>
          {/* Instagram */}
          <div style={{ padding: '24px 20px', marginTop: 'auto' }}>
            <a href="https://www.instagram.com/studio_fyrnys/" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', textDecoration: 'none' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/instagram-white.svg" alt="" style={{ height: '11px', width: 'auto', filter: 'invert(0.5)' }} />
              Instagram
            </a>
          </div>
        </div>
      )}
    </>
  );
}
