'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProjectGallery({ images }: { images: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const galleryKey = images.join('|');

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const idx = Math.round(track.scrollLeft / track.clientWidth);
        setActive(idx);
        ticking = false;
      });
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  // Always open a project on its first image. The track is a
  // scroll-snap-type: x mandatory container, so a reflow while images are
  // still decoding can leave it settled on an arbitrary snap point — and
  // browsers may restore a previous scroll offset. Pin it back to the start
  // until the visitor actually swipes.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let interacted = false;
    const reset = () => {
      if (interacted) return;
      track.scrollTo({ left: 0, behavior: 'instant' as ScrollBehavior });
      setActive(0);
    };

    reset();

    const markInteracted = () => { interacted = true; };
    const inputEvents = ['pointerdown', 'touchstart', 'wheel', 'keydown'] as const;
    inputEvents.forEach(e => track.addEventListener(e, markInteracted, { passive: true }));

    // Re-pin as late-loading images reflow the track.
    const pending = Array.from(track.querySelectorAll('img')).filter(img => !img.complete);
    pending.forEach(img => {
      img.addEventListener('load', reset, { once: true });
      img.addEventListener('error', reset, { once: true });
    });

    return () => {
      inputEvents.forEach(e => track.removeEventListener(e, markInteracted));
      pending.forEach(img => {
        img.removeEventListener('load', reset);
        img.removeEventListener('error', reset);
      });
    };
  }, [galleryKey]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="pg-track"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
      >
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            className="pg-img"
            style={{
              flex: '0 0 100%',
              width: '100%',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
              display: 'block',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="pg-dots" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          padding: '16px 0',
        }}>
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Bild ${i + 1} von ${images.length}`}
              onClick={() => goTo(i)}
              style={{
                width: i === active ? '8px' : '6px',
                height: i === active ? '8px' : '6px',
                borderRadius: '50%',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                backgroundColor: i === active ? '#2d2926' : '#d8d3c9',
                transition: 'background-color 0.2s ease, width 0.2s ease, height 0.2s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
