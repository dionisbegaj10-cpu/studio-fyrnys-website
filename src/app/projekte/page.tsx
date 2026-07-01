'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import LeistungenNav from '../leistungen/LeistungenNav';
import { projects } from './data';

const GAP = 5;

export default function ProjektePage() {
  const rootRef       = useRef<HTMLDivElement>(null);
  const scrollspaceRef = useRef<HTMLDivElement>(null);
  const viewportRef   = useRef<HTMLDivElement>(null);
  const trackRef      = useRef<HTMLUListElement>(null);
  const stateRef      = useRef({ travelX: 0, lastProgress: -1, ticking: false });

  useEffect(() => {
    if (!rootRef.current || !scrollspaceRef.current || !viewportRef.current || !trackRef.current) return;
    const root        = rootRef.current!;
    const scrollspace = scrollspaceRef.current!;
    const viewport    = viewportRef.current!;
    const track       = trackRef.current!;

    const isTouch = 'ontouchstart' in window || window.matchMedia('(pointer: coarse)').matches;

    function getHeaderH() {
      const h = document.querySelector<HTMLElement>('header');
      return h ? h.offsetHeight : 56;
    }

    function cardWidth() {
      return viewport.clientWidth - GAP;
    }

    function setupDesktop() {
      const headerH  = getHeaderH();
      const sectionH = window.innerHeight - headerH;
      viewport.style.height = sectionH + 'px';
      viewport.style.top    = headerH + 'px';
      const cw      = cardWidth();
      const totalW  = cw * projects.length + GAP * (projects.length - 1);
      stateRef.current.travelX = Math.max(0, totalW - viewport.clientWidth);
      scrollspace.style.height = `${sectionH + stateRef.current.travelX}px`;
      track.querySelectorAll<HTMLElement>('.il-item').forEach(el => {
        el.style.width = cw + 'px';
        el.style.height = sectionH + 'px';
      });
      applyTransform();
      root.style.opacity = '1';
    }

    function setupMobile() {
      viewport.style.height = '';
      viewport.style.top    = '';
      scrollspace.style.height = '';
      track.style.transform = '';
      stateRef.current.travelX = 0;
      stateRef.current.lastProgress = -1;
      track.querySelectorAll<HTMLElement>('.il-item').forEach(el => {
        el.style.width  = '';
        el.style.height = '';
      });
      root.style.opacity = '1';
    }

    function getProgress() {
      const headerH = parseFloat(viewport.style.top || '56');
      const rect    = scrollspace.getBoundingClientRect();
      const total   = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top + headerH, 0), Math.max(total, 1));
      return total > 0 ? scrolled / total : 0;
    }

    function applyTransform() {
      const p = getProgress();
      if (Math.abs(p - stateRef.current.lastProgress) < 0.0003) return;
      stateRef.current.lastProgress = p;
      track.style.transform = `translate3d(${-stateRef.current.travelX * p}px,0,0)`;
    }

    function isMobile() {
      return isTouch || window.matchMedia('(max-width: 700px)').matches;
    }

    function setup() {
      if (isMobile()) {
        root.classList.add('is-mobile');
        setupMobile();
      } else {
        root.classList.remove('is-mobile');
        setupDesktop();
      }
    }

    function onScroll() {
      if (isMobile() || stateRef.current.ticking) return;
      stateRef.current.ticking = true;
      requestAnimationFrame(() => {
        applyTransform();
        stateRef.current.ticking = false;
      });
    }

    setup();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', setup);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', setup);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <LeistungenNav />

      <div
        ref={rootRef}
        className="il-projekte-root"
        style={{ width: '100%', opacity: 0, transition: 'opacity 0.35s ease', flex: 1 } as React.CSSProperties}
      >
        <div ref={scrollspaceRef} className="il-scrollspace" style={{ position: 'relative' }}>
          <div
            ref={viewportRef}
            className="il-viewport"
            style={{ position: 'sticky', top: '56px', height: 'calc(100vh - 56px)', overflow: 'hidden' }}
          >
            <ul
              ref={trackRef}
              className="il-track"
              style={{ display: 'flex', gap: `${GAP}px`, listStyle: 'none', margin: 0, padding: 0, height: '100%', willChange: 'transform' }}
            >
              {projects.map(project => (
                <li key={project.id} className="il-item" style={{ flexShrink: 0, position: 'relative' }}>
                  <Link href={`/projekte/${project.slug}`} style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}>
                    {/* Background image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="il-bg"
                      src={project.coverImage}
                      alt=""
                      style={{
                        position: 'absolute', inset: 0, zIndex: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block',
                      }}
                    />
                    {/* Overlay with name */}
                    <span
                      className="il-overlay"
                      style={{
                        position: 'absolute', inset: 0, zIndex: 1,
                        display: 'grid', placeItems: 'center',
                        background: 'rgba(0,0,0,0.2)',
                      }}
                    >
                      <p style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: '30px',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: '#f7f6f0',
                        margin: 0,
                        textAlign: 'center',
                        padding: '0 16px',
                      }}>
                        {project.name}
                      </p>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer style={{ padding: '20px 20px', borderTop: '1px solid #e2ddd6', backgroundColor: '#f7f6f0' }}>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0 }}>
          Impressum&nbsp;&nbsp;|&nbsp;&nbsp;Datenschutz&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
        </p>
      </footer>
    </div>
  );
}
