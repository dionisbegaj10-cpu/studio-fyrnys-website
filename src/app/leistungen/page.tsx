import type { Metadata } from 'next';
import LeistungenNav from './LeistungenNav';
import { projects } from '../projekte/data';

export const metadata: Metadata = { title: 'Leistungen – Studio Fyrnys' };

const font: React.CSSProperties = { fontFamily: "'TT Norms Pro', sans-serif" };

export default function LeistungenPage() {
  return (
    <div style={{ ...font, color: '#333', backgroundColor: '#fff', padding: '0 16px' }}>
      <LeistungenNav />

      {/* ── header padding placeholder ── */}
      <div style={{ height: '0px' }} />

      {/* ══ SPACER white sm ══ */}
      <div className="spacer-sm bg-white" />

      {/* ══ HERO ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <h1>Leistungen</h1>
            <p>&nbsp;</p>
            <p>Wir gestalten private und gewerbliche Räume mit einem klaren Blick für Atmosphäre, Funktion und Qualität. Als Studio mit eigener Manufaktur verbinden wir Innenarchitektur, maßgefertigte Lösungen, ausgewählte Möblierung und eine unterstützende Projektbetreuung zu einem durchgängigen Gestaltungskonzept. So erhalten Sie nicht nur einzelne Leistungen, sondern eine abgestimmte Begleitung von der ersten Idee bis zum fertigen Raum.</p>
          </div>
        </div>
      </section>

      <div className="spacer-md" style={{ backgroundColor: '#fff' }} />

      {/* ══ INTERIOR DESIGN heading ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <h2>Interior Design</h2>
            <p>&nbsp;</p>
            <p>Wir entwickeln Raumkonzepte, die Atmosphäre, Funktion und Persönlichkeit verbinden. Gemeinsam mit Ihnen klären wir Wünsche, Nutzung und Anspruch Ihres privaten oder gewerblichen Projekts. Daraus entsteht ein durchgängiges Gestaltungskonzept, in dem Architektur, Materialien, Licht und Möblierung sorgfältig aufeinander abgestimmt sind. So entsteht ein Interieur, das persönlich wirkt, klar funktioniert und langfristig Bestand hat.</p>
          </div>
        </div>
      </section>

      <div className="spacer-sm" style={{ backgroundColor: '#fff' }} />

      {/* ══ INTERIOR DESIGN grid ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="img-grid lg-container">
          <div className="col-full lg-col-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/innen-07-wide.webp" alt="" className="img-landscape" />
          </div>
          <div className="col-half lg-col-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/slide-6.jpg" alt="" className="img-portrait" />
          </div>
          <div className="col-half lg-col-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/innen-03-portrait.webp" alt="" className="img-portrait" />
          </div>
        </div>
      </section>

      <div className="spacer-md" style={{ backgroundColor: '#fff' }} />

      {/* ══ MANUFAKTUR heading ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <h2>Manufaktur</h2>
            <p>&nbsp;</p>
            <p>In unserer Manufaktur realisieren wir seit 1969 individuelle Einbauten, Küchen und Möbel nach Maß. Hier verbinden sich Gestaltung, handwerkliche Präzision und Materialverständnis. Jede Lösung wird passgenau entwickelt, sauber ausgeführt und mit dem Anspruch gefertigt, dem Raum dauerhaft Wert zu verleihen.</p>
          </div>
        </div>
      </section>

      <div className="spacer-sm" style={{ backgroundColor: '#fff' }} />

      {/* ══ MANUFAKTUR grid ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="img-grid lg-container">
          <div className="col-full lg-col-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/handwerk-09-portrait.webp" alt="" className="img-landscape" style={{ aspectRatio: '2/3' }} />
          </div>
          <div className="col-full lg-col-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/handwerk-16-wide.webp" alt="" className="img-landscape" />
          </div>
        </div>
      </section>

      <div className="spacer-md" style={{ backgroundColor: '#fff' }} />
      <div className="spacer-sm bg-egg" />

      {/* ══ MÖBLIERUNG heading ══ */}
      <section className="bg-egg">
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <h2>Möblierung</h2>
            <p>&nbsp;</p>
            <p>Gemeinsam mit Ihnen entwickeln wir eine Ausstattung, die zu Ihrem Stil, zur Architektur und zum gewünschten Anspruch passt. Von einzelnen Akzenten bis zur vollständigen Einrichtung entsteht ein stimmiges Konzept aus Komfort, Qualität und Persönlichkeit. Wir arbeiten mit ausgewählten Herstellern und Marken und finden Möbel, Leuchten und Objekte, die den Raum ergänzen und seine Atmosphäre prägen.</p>
          </div>
        </div>
      </section>

      <div className="spacer-sm bg-egg" />

      {/* ══ MÖBLIERUNG grid ══ */}
      <section className="bg-egg">
        <div className="lg-container">
          <div className="moeblierung-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/leistungen/moeblierung-01.webp" alt="" className="img-portrait" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/leistungen/moeblierung-02.webp" alt="" className="img-portrait" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="img-portrait" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                alignContent: 'center',
                justifyItems: 'center',
                gap: '28px',
                padding: '24px',
                backgroundColor: '#fff',
              }}>
                {[
                  ['/images/leistungen/partners/audo.svg', 'Audo'],
                  ['/images/leistungen/partners/deltalight.png', 'Deltalight'],
                  ['/images/leistungen/partners/domedeco.png', 'Dome Deco'],
                  ['/images/leistungen/partners/flexteam.png', 'Flexteam'],
                  ['/images/leistungen/partners/gommaire.png', 'Gommaire'],
                  ['/images/leistungen/partners/jadams.png', 'J. Adams'],
                  ['/images/leistungen/partners/kvadrat.jpg', 'Kvadrat'],
                  ['/images/leistungen/partners/luiz.svg', 'LUIZ'],
                  ['/images/leistungen/partners/meridiani.png', 'Meridiani'],
                  ['/images/leistungen/partners/prolicht.svg', 'Prolicht'],
                  ['/images/leistungen/partners/sovet.png', 'Sovet'],
                ].map(([src, name]) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={name} src={src} alt={name} style={{ maxWidth: '100%', maxHeight: '32px', width: 'auto', objectFit: 'contain' }} />
                ))}
                <p style={{
                  fontFamily: "'TT Norms Pro', sans-serif",
                  fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em',
                  color: '#333', margin: 0, textAlign: 'center',
                }}>
                  Potocco
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="spacer-sm bg-egg" />
      <div className="spacer-md" style={{ backgroundColor: '#fff' }} />

      {/* ══ PARTNER heading ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <h2>Projektkoordination</h2>
            <p>&nbsp;</p>
            <p>Wir bereiten den ausgearbeiteten Entwurf als Grundlage für die Umsetzung vor und begleiten die Umbauphase im Sinne des festgelegten Gestaltungskonzepts. Dabei stehen wir in enger Abstimmung mit Ihnen und den beteiligten Gewerken, um gestalterische Details zu klären und die Planung nachvollziehbar weiterzuführen. Bei Bedarf empfehlen wir Ihnen zuverlässige Handwerksbetriebe und Spezialisten aus unserem Netzwerk. So bleibt die gestalterische Linie auch in der Ausführung klar erkennbar.</p>
          </div>
        </div>
      </section>

      <div className="spacer-sm" style={{ backgroundColor: '#fff' }} />

      {/* ══ PARTNER grid ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="img-grid lg-container">
          <div className="col-full lg-col-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/partner-02-stein.webp" alt="" className="img-landscape" style={{ aspectRatio: '2/3' }} />
          </div>
          <div className="col-full lg-col-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/partner-04-metall.webp" alt="" className="img-landscape" style={{ aspectRatio: '2/3' }} />
          </div>
          <div className="col-full lg-col-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/partner-03-stoff.webp" alt="" className="img-landscape" />
          </div>
        </div>
      </section>

      <div className="spacer-md" style={{ backgroundColor: '#fff' }} />
      <div className="spacer-sm bg-egg" />

      {/* ══ PROJEKTE ══ */}
      <section className="bg-egg">
        <div className="lg-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginBottom: '24px', alignItems: 'end' }}>
            <h2 style={{ fontWeight: 500, fontSize: 'clamp(18px, 2.5vw, 28px)', margin: 0 }}>Projekte</h2>
            <a href="/projekte" style={{ justifySelf: 'end', color: '#333', textDecoration: 'none', fontSize: '14px' }}>Alle anzeigen ›</a>
          </div>
        </div>
        <div className="lg-container">
          <div className="moeblierung-grid">
            {projects.filter(p => !p.comingSoon).slice(0, 4).map((p) => (
              <a key={p.slug} href={`/projekte/${p.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.coverImage} alt={p.name} className="img-portrait project-thumb" />
                </div>
                <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333', margin: 0 }}>{p.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="spacer-sm bg-egg" />

      {/* ══ FOOTER ══ */}
      <footer style={{ margin: '0 -16px', backgroundColor: '#ffffff', padding: '48px 16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '6px', marginTop: 0 }}>Studio Fyrnys</p>
            <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '12px', color: '#888', margin: 0 }}>Innenarchitektur und Handwerk</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[['Leistungen', '/leistungen'], ['Projekte', '/projekte'], ['Über uns', '/ueber-uns'], ['Kontakt', '/kontakt']].map(([label, href]) => (
              <a key={href} href={href} style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333', textDecoration: 'none' }}>{label}</a>
            ))}
          </div>
          <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0 }}>
            Impressum&nbsp;&nbsp;|&nbsp;&nbsp;Datenschutz&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
          </p>
        </div>
      </footer>

    </div>
  );
}
