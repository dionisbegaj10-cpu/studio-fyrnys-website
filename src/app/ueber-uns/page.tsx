import LeistungenNav from '../leistungen/LeistungenNav';

const NB_FOOTER = (
  <footer style={{ margin: '0 -16px', padding: '20px 20px', backgroundColor: '#ffffff' }}>
    <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0 }}>
      Impressum&nbsp;&nbsp;|&nbsp;&nbsp;Datenschutz&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
    </p>
  </footer>
);

export default function UeberUnsPage() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '0 16px' }}>
      <LeistungenNav />

      {/* Full-bleed hero image */}
      <div style={{ width: '100%', flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/leistungen/empathie-01-portrait.webp"
          alt="Über uns"
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
          Über uns
        </h2>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: '#2d2926', marginBottom: '16px' }}>
          Fyrnys GmbH verbindet Innenarchitektur und hochwertiges Schreinerhandwerk. Von unserem Studio in Frankfurt aus erarbeiten wir gemeinsam mit Ihnen Raum- und Möblierungskonzepte für private Wohnräume und Gewerbeflächen, die in enger Verbindung mit unserer Manufakturschreinerei in Leingarten weitergedacht und umgesetzt werden können. Dort realisieren wir seit 1969 individuelle Einbauten, Küchen und Möbel nach Maß.
        </p>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: '#2d2926', marginBottom: '16px' }}>
          Wir begleiten Projekte im In- und Ausland von der ersten Idee bis zum fertigen Raum. Dazu gehören Möblierungs- und Leuchtenkonzepte, die Ausarbeitung gestalterischer Planungen sowie die Abstimmung mit den beteiligten Gewerken während der Umsetzung. Unsere Arbeit reicht von Möblierungskonzepten über maßgefertigte Schreinerausbauten bis zur vollständigen Neugestaltung einzelner Räume oder ganzer Objekte.
        </p>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: '#2d2926' }}>
          Unser Ziel ist eine Gestaltung, die zur Nutzung, zur Architektur und zu den Menschen passt. Dafür verbinden wir klare Planung, hochwertige Materialien und handwerkliche Präzision mit einer engen gestalterischen Begleitung im Projekt.
        </p>
      </div>

      {NB_FOOTER}
    </div>
  );
}
