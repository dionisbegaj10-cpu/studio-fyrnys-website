import LeistungenNav from '../leistungen/LeistungenNav';

const NB_FOOTER = (
  <footer style={{ margin: '0 -16px', padding: '20px 20px', backgroundColor: '#ffffff' }}>
    <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0 }}>
      Impressum&nbsp;&nbsp;|&nbsp;&nbsp;Datenschutz&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
    </p>
  </footer>
);

export default function KontaktPage() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '0 16px' }}>
      <LeistungenNav />

      {/* Full-bleed hero image */}
      <div style={{ width: '100%', flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/leistungen/handwerk-09-portrait.webp"
          alt="Kontakt"
          style={{ width: '100%', height: '70vw', maxHeight: '520px', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* White gap */}
      <div style={{ backgroundColor: '#ffffff', height: '32px', flexShrink: 0 }} />

      {/* Cream content block */}
      <div style={{ backgroundColor: '#f7f6f0', padding: '32px 20px 48px', flex: 1 }}>
        <h2 style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: '30px',
          fontWeight: 400,
          letterSpacing: '2px',
          color: '#2d2926',
          marginBottom: '20px',
          textTransform: 'uppercase',
        }}>
          Kontakt
        </h2>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: '#2d2926', marginBottom: '24px' }}>
          Füllen Sie unser <a href="mailto:studio@fyrnys.de" style={{ color: '#2d2926', textDecoration: 'underline' }}>Kontaktformular</a> aus oder schreiben Sie uns direkt. Für alle weiteren Anfragen erreichen Sie uns unter:
        </p>

        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: '#2d2926', marginBottom: '4px' }}>
          <strong style={{ fontWeight: 700, letterSpacing: '0.06em' }}>STUDIO FYRNYS</strong>
        </p>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', lineHeight: 1.8, color: '#2d2926', margin: 0 }}>Hansaallee 13–15</p>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', lineHeight: 1.8, color: '#2d2926', marginBottom: '4px' }}>60322 Frankfurt am Main</p>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', lineHeight: 1.8, color: '#2d2926', marginBottom: '4px' }}>
          <a href="tel:+4969955037200" style={{ color: '#2d2926', textDecoration: 'none' }}>T +49 69 955 037 20</a>
        </p>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', lineHeight: 1.8, color: '#2d2926', marginBottom: '32px' }}>
          <a href="mailto:studio@fyrnys.de" style={{ color: '#2d2926', textDecoration: 'underline' }}>studio@fyrnys.de</a>
        </p>

        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: '#2d2926' }}>
          Besuchen Sie unsere <a href="https://www.instagram.com/studio_fyrnys/" target="_blank" rel="noopener noreferrer" style={{ color: '#2d2926', textDecoration: 'underline' }}>Instagram-Seite</a>, um aktuelle Projekte und Einblicke in unsere Arbeit zu entdecken.
        </p>
      </div>

      {NB_FOOTER}
    </div>
  );
}
