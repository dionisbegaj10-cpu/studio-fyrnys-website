'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function LeistungenNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop white bar */}
      <header className="nav-desktop-default" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: '#f7f6f0',
        height: '54px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 60px',
      }}>
        <Link href="/" style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '16px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none', flex: 1 }}>
          Studio Fyrnys
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          {navLinks.map((link, i) => (
            <span key={link.href} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && <span style={{ color: '#c0c0c0', fontSize: '11px', margin: '0 18px' }}>|</span>}
              <Link href={link.href} style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none' }}>
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </header>

      {/* Mobile bar */}
      <header className="nav-mobile-default" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: '#f7f6f0',
        height: '54px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
      }}>
        <Link href="/" style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '15px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none' }}>
          Studio Fyrnys
        </Link>
        <button onClick={() => setMenuOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', color: '#1a1a1a' }} aria-label="Menü öffnen">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16" width="20" height="20">
            <path fill="currentColor" d="M1 .5a.5.5 0 1 0 0 1h15.71a.5.5 0 0 0 0-1zM.5 8a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8m0 7a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 'max(env(safe-area-inset-top, 0px), 47px)', left: 0, right: 0, bottom: 'max(env(safe-area-inset-bottom, 0px), 0px)', zIndex: 200, backgroundColor: '#61695e', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', flexShrink: 0 }}>
            <Link href="/" onClick={() => setMenuOpen(false)} style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none' }}>
              Studio Fyrnys
            </Link>
            <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: '1px solid #ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', color: '#ffffff' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="14" height="14">
                <path fill="currentColor" d="M.293.293a1 1 0 0 1 1.414 0L7 5.586 12.293.293a1 1 0 1 1 1.414 1.414L8.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414L7 8.414l-5.293 5.293A1 1 0 0 1 .293 12.707L5.586 7 .293 1.707A1 1 0 0 1 .293.293z"/>
              </svg>
            </button>
          </div>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#ffffff', flexShrink: 0 }} />
          <nav style={{ display: 'flex', flexDirection: 'column', paddingTop: '16px', gap: '20px', padding: '16px 20px 0' }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
                display: 'inline-block', width: 'fit-content',
                fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase', color: '#ffffff',
                textDecoration: 'none', borderBottom: '1px solid #ffffff', paddingBottom: '4px',
              }}>
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/studio_fyrnys/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'inline-block', width: 'fit-content',
                fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase', color: '#ffffff',
                textDecoration: 'none', borderBottom: '1px solid #ffffff', paddingBottom: '4px',
              }}
            >
              Instagram
            </a>
          </nav>
        </div>
      )}
      {menuOpen && (
        <>
          <div style={{ position: 'fixed', left: 0, right: 0, top: 0, height: 'max(env(safe-area-inset-top, 0px), 47px)', zIndex: 201, backgroundColor: '#f7f6f0', pointerEvents: 'none' }} />
          <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, height: 'env(safe-area-inset-bottom, 0px)', zIndex: 201, backgroundColor: '#f7f6f0', pointerEvents: 'none' }} />
        </>
      )}
      {/* Spacer so page content clears the fixed nav */}
      <div style={{ height: '54px' }} />
    </>
  );
}
