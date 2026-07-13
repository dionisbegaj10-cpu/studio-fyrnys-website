'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function LeistungenNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    const color = menuOpen ? '#61695e' : '#f7f6f0';
    // DIAGNOSTIC: keep the meta green in BOTH states to test whether this
    // iOS/Safari honors theme-color for the top status bar at all.
    const metaColor = '#61695e';

    // iOS Safari derives its top/bottom bar tint from the NORMAL-FLOW document
    // background (it ignores position:fixed overlays) and re-samples only on
    // scroll activity. So paint the whole ancestor chain — every opaque page
    // wrapper between this nav and <html> — plus body/html, and nudge a scroll.
    document.body.style.overflowY = 'scroll';

    // Collect the ancestor wrappers (page root divs with their own background)
    // so a fixed green overlay isn't the only green thing on the page.
    const painted: HTMLElement[] = [];
    let node: HTMLElement | null = markerRef.current?.parentElement ?? null;
    while (node && node !== document.documentElement) {
      painted.push(node);
      node = node.parentElement;
    }
    const prev = painted.map(el => el.style.backgroundColor);

    const apply = () => {
      document.documentElement.style.backgroundColor = color;
      document.body.style.backgroundColor = color;
      painted.forEach(el => { el.style.backgroundColor = color; });
      if (meta) meta.setAttribute('content', metaColor);
    };
    apply();
    let raf = 0;
    const tick = () => {
      apply();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Nudge the scroll so Safari re-samples. The two moves MUST land in
    // different frames well apart (≈120ms) — adjacent frames coalesce to a
    // net-zero scroll before paint and no scroll event ever fires.
    const timers: number[] = [];
    const nudge = () => {
      requestAnimationFrame(() => {
        window.scrollBy(0, 1);
        timers.push(window.setTimeout(() => window.scrollBy(0, -1), 120));
      });
    };
    nudge();
    timers.push(window.setTimeout(nudge, 260));
    timers.push(window.setTimeout(nudge, 520));

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
      document.body.style.overflowY = '';
      painted.forEach((el, i) => { el.style.backgroundColor = prev[i]; });
      if (meta) meta.setAttribute('content', metaColor);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Marker: lets the effect walk up to the page wrapper(s) for iOS bar tinting */}
      <span ref={markerRef} style={{ display: 'none' }} aria-hidden="true" />
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
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: '#61695e', display: 'flex', flexDirection: 'column' }}>
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
      {/* Spacer so page content clears the fixed nav */}
      <div style={{ height: '54px' }} />
    </>
  );
}
