'use client';

export default function HeroVideo() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#383126',
        overflow: 'hidden',
      }}
    >
      <video
        className="hero-video"
        src="/videos/hero.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectPosition: '50% 50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          pointerEvents: 'none',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fyrnys-logo-transparent.png"
          alt="Studio Fyrnys"
          style={{
            width: 'min(40vw, 320px)',
            height: 'auto',
            filter: 'brightness(0) invert(1)',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-halis)',
            fontSize: 'clamp(26px, 3.6vw, 42px)',
            fontWeight: 400,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#ffffff',
          }}
        >
          Fyrnys
        </span>
      </div>
    </div>
  );
}
