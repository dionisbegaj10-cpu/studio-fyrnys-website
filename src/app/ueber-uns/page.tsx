import LeistungenNav from '../leistungen/LeistungenNav';

const NB_FOOTER = (
  <footer style={{ margin: '0 -16px', padding: '20px 20px', backgroundColor: '#f7f6f0' }}>
    <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0 }}>
      Impressum&nbsp;&nbsp;|&nbsp;&nbsp;Datenschutz&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
    </p>
  </footer>
);

export default function UeberUnsPage() {
  return (
    <div style={{ backgroundColor: '#f7f6f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '0 16px' }}>
      <LeistungenNav />

      {/* Full-bleed hero image */}
      <div style={{ width: '100%', flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/leistungen/ueber-uns-neu.webp"
          alt="Über uns"
          style={{ width: '100%', height: '70vw', maxHeight: '520px', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* White gap */}
      <div style={{ backgroundColor: '#f7f6f0', height: '32px', flexShrink: 0 }} />

      {/* Cream content block */}
      <div style={{ backgroundColor: '#f7f6f0', padding: '32px 20px 48px', flex: 1 }}>
        <div style={{ width: '100%', maxWidth: '560px', height: '1px', backgroundColor: '#d8d3c9', marginBottom: '24px' }} />
        <h2 style={{
          fontFamily: 'var(--font-halis)',
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
          Von unserem Studio in Frankfurt aus planen wir individuelle private Wohnräume und Gewerbeflächen. Dabei begleiten wir jedes Projekt persönlich und mit viel Gespür für Details – von der ersten Idee über die Planung bis hin zur Umsetzung.
        </p>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: '#2d2926', marginBottom: '16px' }}>
          Je nach Aufgabe entwickeln wir Raum-, Möblierungs- und Leuchtenkonzepte, planen individuelle Einbauten und klären gestalterische Details mit den beteiligten Gewerken. Unsere Arbeit reicht von der Auswahl einzelner Möbel bis zur vollständigen Neugestaltung von Wohnungen, Häusern, Praxen und Büroflächen.
        </p>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: '#2d2926', marginBottom: '16px' }}>
          Eng verbunden ist das Studio mit unserer familiengeführten Manufakturschreinerei in Leingarten. Dort entstehen seit 1969 individuelle Küchen, Möbel und Innenausbauten nach Maß. Viele unserer Entwürfe können wir dadurch gemeinsam mit den Schreinern bis ins Detail entwickeln und umsetzen.
        </p>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: '#2d2926' }}>
          Uns ist wichtig, dass eine Gestaltung zum Gebäude, zur Nutzung und zu den Menschen passt. Eine klare Planung, sorgfältig ausgewählte Materialien und eine präzise Ausführung bilden dafür die Grundlage.
        </p>
      </div>

      {NB_FOOTER}
    </div>
  );
}
