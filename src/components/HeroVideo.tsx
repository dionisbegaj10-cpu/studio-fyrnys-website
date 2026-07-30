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
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          padding: '0 16px',
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
            fontFamily: "'TT Norms Pro', sans-serif",
            fontSize: 'clamp(18px, 2.6vw, 30px)',
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#ffffff',
            whiteSpace: 'nowrap',
          }}
        >
          Interior Design
        </span>
      </div>
    </div>
  );
}
