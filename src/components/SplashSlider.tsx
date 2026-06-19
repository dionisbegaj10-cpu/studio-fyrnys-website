'use client';

import { useEffect, useRef, useState } from 'react';

const slides = [
  { src: '/images/slide-1.jpg', alt: 'CG Lobby' },
  { src: '/images/slide-2.jpg', alt: 'Greenpoint Lobby' },
  { src: '/images/slide-3.jpg', alt: 'Market Street Lobby' },
  { src: '/images/slide-4.jpg', alt: '90 Furman' },
  { src: '/images/slide-5.jpg', alt: 'Tower 31 Lobby' },
  { src: '/images/slide-6.jpg', alt: 'Master Bathroom Rendering' },
  { src: '/images/slide-7.jpg', alt: 'Pequot Family Room Rendering' },
];

const INTERVAL_MS = 4000;
const TRANSITION_MS = 800;

export default function SplashSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function goTo(next: number) {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(next);
      setTransitioning(false);
    }, TRANSITION_MS);
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % slides.length;
        return next;
      });
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
        overflow: 'hidden',
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== current}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${slide.src})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            opacity: i === current ? 1 : 0,
            transition: `opacity ${TRANSITION_MS}ms ease-in-out`,
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Dot navigation (hidden per original but keep accessible) */}
      <div
        role="tablist"
        aria-label="Slider navigation"
        style={{ display: 'none' }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Show slide ${i + 1} of ${slides.length}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
