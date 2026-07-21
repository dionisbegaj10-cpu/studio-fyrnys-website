import type { Metadata } from 'next';
import LeistungenNav from './LeistungenNav';
import { projects } from '../projekte/data';

export const metadata: Metadata = { title: 'Leistungen – Studio Fyrnys' };

const font: React.CSSProperties = { fontFamily: "'TT Norms Pro', sans-serif" };

export default function LeistungenPage() {
  return (
    <div style={{ ...font, color: '#333', backgroundColor: '#f7f6f0', padding: '0 16px' }}>
      <LeistungenNav />

      {/* ── header padding placeholder ── */}
      <div style={{ height: '0px' }} />

      {/* ══ SPACER white sm ══ */}
      <div className="spacer-sm" />

      {/* ══ HERO ══ */}
      <div className="li-split" style={{ backgroundColor: '#f7f6f0', display: 'flex', flexDirection: 'column' }}>
        <section className="li-split-text" style={{ backgroundColor: '#f7f6f0' }}>
          <div className="lg-container">
            <div className="richtext-block" style={{ maxWidth: '900px' }}>
              <div style={{ width: '100%', height: '1px', backgroundColor: '#d8d3c9', marginBottom: '24px' }} />
              <h1>Leistungen</h1>
              <p>&nbsp;</p>
              <p>Wir gestalten private und gewerbliche Räume mit einem klaren Blick für Atmosphäre, Funktion und Qualität. Als Studio mit eigener Manufaktur verbinden wir Innenarchitektur, maßgefertigte Lösungen, ausgewählte Möblierung und eine unterstützende Projektbetreuung zu einem durchgängigen Gestaltungskonzept. So erhalten Sie nicht nur einzelne Leistungen, sondern eine abgestimmte Begleitung von der ersten Idee bis zum fertigen Raum.</p>
            </div>
          </div>
        </section>

        <div className="spacer-sm li-split-spacer" style={{ backgroundColor: '#f7f6f0' }} />

        {/* ══ LEISTUNGEN video ══ */}
        <section className="li-split-media" style={{ backgroundColor: '#f7f6f0' }}>
          <div className="lg-container">
            <video
              src="/videos/leistungen-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="img-landscape li-media-landscape"
              style={{ maxWidth: '900px', margin: '0 auto' }}
            />
          </div>
        </section>
      </div>

      <div className="spacer-md" style={{ backgroundColor: '#f7f6f0' }} />

      {/* ══ INTERIOR DESIGN heading ══ */}
      <div className="li-split li-split-reverse" style={{ backgroundColor: '#f7f6f0', display: 'flex', flexDirection: 'column' }}>
        <section className="li-split-text" style={{ backgroundColor: '#f7f6f0' }}>
          <div className="lg-container">
            <div className="richtext-block li-text-lg" style={{ maxWidth: '900px' }}>
              <div style={{ width: '100%', height: '1px', backgroundColor: '#d8d3c9', marginBottom: '24px' }} />
              <h2>Interior Design</h2>
              <p>&nbsp;</p>
              <p>Wir entwickeln Raumkonzepte, die Atmosphäre, Funktion und Persönlichkeit verbinden. Gemeinsam mit Ihnen klären wir, was Ihr privates oder gewerbliches Projekt braucht und wie die Räume genutzt werden sollen. Darauf aufbauend entsteht ein durchgängiges Gestaltungskonzept. Möbel, Materialien und Licht stimmen wir sorgfältig aufeinander ab. So entsteht ein Interior, das persönlich wirkt und im Alltag funktioniert.</p>
            </div>
          </div>
        </section>

        <div className="spacer-sm li-split-spacer" style={{ backgroundColor: '#f7f6f0' }} />

        <div className="li-split-media">
          {/* ══ INTERIOR DESIGN grid ══ */}
          <section style={{ backgroundColor: '#f7f6f0' }}>
            <div className="lg-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/leistungen/interior-design-new.jpg" alt="Interior Design" className="img-portrait li-media-portrait" style={{ maxWidth: '560px', margin: '0 auto' }} />
            </div>
          </section>

          <div className="spacer-sm li-split-spacer" style={{ backgroundColor: '#f7f6f0' }} />

          {/* ══ INTERIOR DESIGN video ══ */}
          <section style={{ backgroundColor: '#f7f6f0' }}>
            <div className="lg-container">
              <video
                src="/videos/interior-design.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="img-landscape li-media-landscape"
                style={{ maxWidth: '560px', margin: '0 auto' }}
              />
            </div>
          </section>
        </div>
      </div>

      <div className="spacer-md" style={{ backgroundColor: '#f7f6f0' }} />

      {/* ══ MANUFAKTUR heading ══ */}
      <div className="li-split bg-egg" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="spacer-sm bg-egg" />
        <section className="li-split-text bg-egg">
          <div className="lg-container">
            <div className="richtext-block" style={{ maxWidth: '900px' }}>
              <div style={{ width: '100%', height: '1px', backgroundColor: '#c4c0aa', marginBottom: '24px' }} />
              <h2>Manufaktur</h2>
              <p>&nbsp;</p>
              <p>In unserer Manufaktur entstehen seit 1969 individuelle Einbauten, Küchen und Möbel nach Maß. Gestaltung und handwerkliche Präzision gehen dabei Hand in Hand. Jede Lösung wird passend zum Raum entwickelt, sorgfältig ausgeführt und mit einem klaren Verständnis für Material und Funktion gefertigt. So entstehen Maßanfertigungen, die dauerhaft Bestand haben.</p>
            </div>
          </div>
        </section>

        <div className="spacer-sm bg-egg li-split-spacer" />

        {/* ══ MANUFAKTUR grid ══ */}
        <section className="li-split-media bg-egg">
          <div className="lg-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/manufaktur-new.jpg" alt="Manufaktur" className="img-portrait li-media-portrait" style={{ maxWidth: '560px', margin: '0 auto' }} />
          </div>
        </section>

        <div className="spacer-sm bg-egg" />
      </div>

      <div className="spacer-md" style={{ backgroundColor: '#f7f6f0' }} />

      {/* ══ MÖBLIERUNG heading ══ */}
      <section style={{ backgroundColor: '#f7f6f0' }}>
        <div className="lg-container">
          <div className="richtext-block" style={{ maxWidth: '900px' }}>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#d8d3c9', marginBottom: '24px' }} />
            <h2>Möblierung</h2>
            <p>&nbsp;</p>
            <p>Wir entwickeln Einrichtungskonzepte, die sich selbstverständlich in die Architektur einfügen und den persönlichen Stil widerspiegeln. Je nach Projekt ergänzen einzelne Stücke den Raum oder es entsteht eine vollständige Möblierung. Gemeinsam mit ausgewählten Herstellern und Marken wählen wir Möbel und Leuchten aus, die die Atmosphäre des Raums prägen.</p>
          </div>
        </div>
      </section>

      <div className="spacer-sm" style={{ backgroundColor: '#f7f6f0' }} />

      {/* ══ MÖBLIERUNG grid ══ */}
      <section style={{ backgroundColor: '#f7f6f0' }}>
        <div className="lg-container">
          <div className="moeblierung-grid">
            <div className="lg-col-2" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/leistungen/moeblierung-new.jpg" alt="Möblierung" className="img-portrait li-media-portrait" />
            </div>
            <div className="lg-col-2" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="li-partner-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                justifyItems: 'center',
                alignItems: 'center',
                columnGap: '20px',
                rowGap: '52px',
                padding: '24px 16px',
              }}>
                {[
                  ['/images/leistungen/partners/audo.svg', 'Audo'],
                  ['/images/leistungen/partners/deltalight.png', 'Deltalight'],
                  ['/images/leistungen/partners/domedeco.png', 'Dome Deco'],
                  ['/images/leistungen/partners/flexteam.png', 'Flexteam'],
                  ['/images/leistungen/partners/gommaire.png', 'Gommaire'],
                  ['/images/leistungen/partners/jadams.png', 'J. Adams'],
                  ['/images/leistungen/partners/kvadrat.png', 'Kvadrat'],
                  ['/images/leistungen/partners/luiz.svg', 'LUIZ'],
                  ['/images/leistungen/partners/meridiani.png', 'Meridiani'],
                  ['/images/leistungen/partners/prolicht.svg', 'Prolicht'],
                  ['/images/leistungen/partners/sovet.png', 'Sovet'],
                  ['/images/leistungen/partners/wever-ducre.png', 'Wever & Ducré'],
                  ['/images/leistungen/partners/cto-lighting.png', 'CTO Lighting'],
                  ['/images/leistungen/partners/edra.svg', 'Edra'],
                  ['/images/leistungen/partners/expormim.png', 'Expormim'],
                  ['/images/leistungen/partners/extendo.png', 'Extendo'],
                  ['/images/leistungen/partners/inalco.png', 'Inalco'],
                  ['/images/leistungen/partners/kristina-dam.png', 'Kristina Dam'],
                  ['/images/leistungen/partners/newworks.png', 'New Works'],
                  ['/images/leistungen/partners/object-carpet.png', 'Object Carpet'],
                  ['/images/leistungen/partners/tekna.png', 'Tekna'],
                  ['/images/leistungen/partners/vescom.png', 'Vescom'],
                  ['/images/leistungen/partners/vincent-sheppard.svg', 'Vincent Sheppard'],
                  ['/images/leistungen/partners/vola.png', 'Vola'],
                  ['/images/leistungen/partners/wendelbo.png', 'Wendelbo'],
                ].map(([src, name]) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={name} src={src} alt={name} style={{ maxWidth: '100%', maxHeight: '58px', width: 'auto', objectFit: 'contain' }} />
                ))}
                <p style={{
                  fontFamily: 'var(--font-halis)',
                  fontSize: '22px', fontWeight: 400, letterSpacing: '0.04em',
                  color: '#2d2926', margin: 0, textAlign: 'center',
                }}>
                  Potocco
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/leistungen/partners/oluce.png" alt="Oluce" style={{ maxWidth: '100%', maxHeight: '58px', width: 'auto', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="spacer-md" style={{ backgroundColor: '#f7f6f0' }} />

      {/* ══ PARTNER heading ══ */}
      <div className="li-split" style={{ backgroundColor: '#f7f6f0', display: 'flex', flexDirection: 'column' }}>
        <section className="li-split-text" style={{ backgroundColor: '#f7f6f0' }}>
          <div className="lg-container">
            <div className="richtext-block" style={{ maxWidth: '900px' }}>
              <div style={{ width: '100%', height: '1px', backgroundColor: '#d8d3c9', marginBottom: '24px' }} />
              <h2>Projektkoordination</h2>
              <p>&nbsp;</p>
              <p>Wir bereiten den ausgearbeiteten Entwurf als Grundlage für die Umsetzung vor und begleiten die Umbauphase im Sinne des festgelegten Gestaltungskonzepts. Dabei stehen wir in enger Abstimmung mit Ihnen und den beteiligten Gewerken, um gestalterische Details zu klären und die Planung nachvollziehbar weiterzuführen. Bei Bedarf empfehlen wir Ihnen zuverlässige Handwerksbetriebe und Spezialisten aus unserem Netzwerk. So bleibt die gestalterische Linie auch in der Ausführung klar erkennbar.</p>
            </div>
          </div>
        </section>

        <div className="spacer-sm li-split-spacer" style={{ backgroundColor: '#f7f6f0' }} />

        {/* ══ PARTNER grid ══ */}
        <section className="li-split-media" style={{ backgroundColor: '#f7f6f0' }}>
          <div className="lg-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/projektkoordination-new.jpg" alt="Projektkoordination" className="img-portrait li-media-portrait" style={{ maxWidth: '560px', margin: '0 auto' }} />
          </div>
        </section>
      </div>

      <div className="spacer-md" style={{ backgroundColor: '#f7f6f0' }} />
      <div className="spacer-sm bg-egg" />

      {/* ══ PROJEKTE ══ */}
      <section className="bg-egg">
        <div className="lg-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginBottom: '24px', alignItems: 'end' }}>
            <h2 style={{ fontFamily: 'var(--font-halis)', fontWeight: 500, fontSize: 'clamp(18px, 2.5vw, 28px)', margin: 0 }}>Projekte</h2>
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
      <footer style={{ margin: '0 -16px', backgroundColor: '#f7f6f0', padding: '48px 16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '6px', marginTop: 0 }}>Studio Fyrnys</p>
            <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '12px', color: '#888', margin: 0 }}>Innenarchitektur und Handwerk</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[['Leistungen', '/leistungen'], ['Projekte', '/projekte'], ['Über uns', '/ueber-uns'], ['Kontakt', '/kontakt']].map(([label, href]) => (
              <a key={href} href={href} style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333', textDecoration: 'none' }}>{label}</a>
            ))}
            <a href="https://www.instagram.com/studio_fyrnys/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333', textDecoration: 'none' }}>Instagram</a>
          </div>
          <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0 }}>
            Impressum&nbsp;&nbsp;|&nbsp;&nbsp;Datenschutz&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
          </p>
        </div>
      </footer>

    </div>
  );
}
