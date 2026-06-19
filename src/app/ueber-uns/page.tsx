import LeistungenNav from '../leistungen/LeistungenNav';

const NB_FOOTER = (
  <footer style={{ padding: '20px 20px', borderTop: '1px solid #e2ddd6' }}>
    <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0 }}>
      Impressum&nbsp;&nbsp;|&nbsp;&nbsp;Datenschutz&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
    </p>
  </footer>
);

export default function UeberUnsPage() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
          Studio Fyrnys ist ein Innenarchitektur- und Einrichtungsstudio mit Sitz in Frankfurt am Main. Wir gestalten private Wohnräume, Büros und Hotels mit einem Fokus auf zeitlose Ästhetik, hochwertige Materialien und handwerkliche Präzision.
        </p>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: '#2d2926', marginBottom: '16px' }}>
          Jedes Projekt beginnt mit einem tiefen Verständnis für die Menschen, die darin leben und arbeiten werden. Wir hören zu, beobachten und übersetzen individuelle Bedürfnisse in Räume, die sowohl funktional als auch emotional berühren.
        </p>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: '#2d2926' }}>
          Unser Team vereint Kompetenzen aus Innenarchitektur, Handwerk und Produktdesign. Von der ersten Skizze bis zur Endabnahme begleiten wir unsere Kunden durch alle Phasen des Projekts — mit Sorgfalt, Transparenz und einem unverwechselbaren Blick für das Wesentliche.
        </p>
      </div>

      {NB_FOOTER}
    </div>
  );
}
