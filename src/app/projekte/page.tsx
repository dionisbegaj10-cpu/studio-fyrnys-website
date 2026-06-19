'use client';

import { useEffect, useRef } from 'react';
import LeistungenNav from '../leistungen/LeistungenNav';

const projects = [
  { id: 1,  name: 'Frankenallee',        image: '/images/leistungen/empathie-01-portrait.webp' },
  { id: 2,  name: 'Sachsenhausen',        image: '/images/leistungen/empathie-05-wide.webp' },
  { id: 3,  name: 'Westend',              image: '/images/leistungen/innen-07-wide.webp' },
  { id: 4,  name: 'Nordend',              image: '/images/leistungen/innen-03-portrait.webp' },
  { id: 5,  name: 'Bornheim',             image: '/images/leistungen/handwerk-09-portrait.webp' },
  { id: 6,  name: 'Bockenheim',           image: '/images/leistungen/handwerk-16-wide.webp' },
  { id: 7,  name: 'Leingarten',           image: '/images/leistungen/moeblierung-01.webp' },
  { id: 8,  name: 'Bad Vilbel',           image: '/images/leistungen/moeblierung-02.webp' },
  { id: 9,  name: 'Hanauer Landstraße',   image: '/images/leistungen/projekt-17-portrait.webp' },
  { id: 10, name: 'Mörfelder Landstraße', image: '/images/leistungen/projekt-pb-01.webp' },
  { id: 11, name: 'Grüneburg',            image: '/images/leistungen/projekt-08-wide.webp' },
  { id: 12, name: 'Konstablerwache',      image: '/images/leistungen/empathie-01-portrait.webp' },
];

const GAP = 5;

export default function ProjektePage() {
  const rootRef       = useRef<HTMLDivElement>(null);
  const scrollspaceRef = useRef<HTMLDivElement>(null);
  const viewportRef   = useRef<HTMLDivElement>(null);
  const trackRef      = useRef<HTMLUListElement>(null);
  const stateRef      = useRef({ travelX: 0, lastProgress: -1, ticking: false });

  useEffect(() => {
    const root        = rootRef.current;
    const scrollspace = scrollspaceRef.current;
    const viewport    = viewportRef.current;
    const track       = trackRef.current;
    if (!root || !scrollspace || !viewport || !track) return;

    const isTouch = 'ontouchstart' in window || window.matchMedia('(pointer: coarse)').matches;

    function getHeaderH() {
      const h = document.querySelector<HTMLElement>('header');
      return h ? h.offsetHeight : 56;
    }

    function cardWidth() {
      // One card = viewport width minus gap (same as Nate Berkus: 370px in 375px viewport)
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
      // Set all items to the computed card width
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
                  {/* Background image */}
                  <span
                    className="il-bg"
                    style={{
                      position: 'absolute', inset: 0, zIndex: 0,
                      backgroundImage: `url('${project.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      display: 'block',
                    }}
                    aria-hidden="true"
                  />
                  {/* Overlay with name — matching Nate Berkus exactly */}
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '20px 20px', borderTop: '1px solid #e2ddd6', backgroundColor: '#f7f6f0' }}>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0 }}>
          Impressum&nbsp;&nbsp;|&nbsp;&nbsp;Datenschutz&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
        </p>
      </footer>
    </div>
  );
}
