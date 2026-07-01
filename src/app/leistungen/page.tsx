import type { Metadata } from 'next';
import LeistungenNav from './LeistungenNav';
import { projects } from '../projekte/data';

export const metadata: Metadata = { title: 'Leistungen – Studio Fyrnys' };

const font: React.CSSProperties = { fontFamily: "'TT Norms Pro', sans-serif" };

export default function LeistungenPage() {
  return (
    <div style={{ ...font, color: '#333', backgroundColor: '#fff' }}>
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
            <p>Wir entwickeln Räume, die Haltung zeigen. Von der ersten Idee bis zum fertigen Entwurf verbinden wir Architektur, Materialität, Licht und Möblierung zu einem stimmigen Gesamtkonzept. So entsteht ein Interieur, das persönlich wirkt, klar funktioniert und langfristig Bestand hat.</p>
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
            <p>Gemeinsam mit Ihnen entwickeln wir eine Ausstattung, die zu Ihrem Stil, zur Architektur und zum gewünschten Anspruch passt. Von einzelnen Akzenten bis zur vollständigen Einrichtung entsteht ein stimmiges Konzept aus Komfort, Qualität und Persönlichkeit. Durch unsere Zusammenarbeit mit ausgewählten Herstellern und Marken finden wir Möbel, Leuchten und Objekte, die den Raum ergänzen und seine Atmosphäre prägen.</p>
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/leistungen/moeblierung-logos.webp" alt="" className="img-portrait" />
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
            <h2>Partner</h2>
            <p>&nbsp;</p>
            <p>Für die Umsetzung arbeiten wir mit einem eingespielten Netzwerk aus zuverlässigen Handwerksbetrieben und Spezialisten zusammen. Je nach Projekt können wir Ihnen passende Partner empfehlen, gestalterische Details abstimmen und die Umbauphase unterstützend im Sinne des Entwurfs begleiten. So bleibt die gestalterische Linie auch in der Ausführung nachvollziehbar und präzise.</p>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', paddingLeft: '16px', paddingRight: '16px', marginBottom: '24px', alignItems: 'end' }}>
            <h2 style={{ fontWeight: 500, fontSize: 'clamp(18px, 2.5vw, 28px)', margin: 0 }}>Projekte</h2>
            <a href="/projekte" style={{ justifySelf: 'end', color: '#333', textDecoration: 'none', fontSize: '14px' }}>Alle anzeigen ›</a>
          </div>
        </div>
        <div className="lg-container">
          <div className="moeblierung-grid" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
            {projects.slice(0, 4).map((p) => (
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
      <footer style={{ borderTop: '1px solid #ddd', backgroundColor: '#f0ede8', padding: '48px 16px' }}>
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
          <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '11px', color: '#aaa', margin: 0 }}>© 2026 Studio Fyrnys</p>
        </div>
      </footer>

    </div>
  );
}
