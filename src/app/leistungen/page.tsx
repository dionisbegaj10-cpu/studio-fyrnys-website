import type { Metadata } from 'next';
import LeistungenNav from './LeistungenNav';

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
            <h1>Von der Vorstellung zur Wirklichkeit</h1>
            <p>&nbsp;</p>
            <p>Studio Fyrnys vereint Innenarchitektur, Handwerk, Möblierung und Umsetzung in einem ganzheitlichen Prozess. Unsere Projekte beginnen mit dem Zuhören – im engen Austausch mit unseren Bauherr*innen entsteht ein Verständnis für Persönlichkeit, Bedürfnisse und Lebensstil.</p>
            <p>&nbsp;</p>
            <p>Auf dieser Basis entstehen Konzepte, die Raum, Material und Funktion zu einer klaren gestalterischen Sprache vereinen. Wir denken ganzheitlich statt in Einzelgewerken – von der Entwurfsplanung über die Ausarbeitung bis hin zur Umsetzung. Jedes Detail, jede Oberfläche und jedes Möbelstück wird in enger Zusammenarbeit mit ausgewählten Partnern entwickelt.</p>
            <p>&nbsp;</p>
            <p>Vom ersten Entwurf bis zur letzten Fuge begleiten wir jedes Projekt mit Aufmerksamkeit und Sorgfalt. Unser Anspruch ist es, die gestalterische Idee so umzusetzen, dass sie in der gebauten Realität spürbar bleibt. Dafür koordinieren wir alle Gewerke, sichern die Qualität auf der Baustelle und behalten das große Ganze ebenso im Blick wie jedes einzelne Detail.</p>
          </div>
        </div>
      </section>

      {/* ══ SPACER white md + egg sm ══ */}
      <div className="spacer-md" style={{ backgroundColor: '#fff' }} />
      <div className="spacer-sm bg-egg" />

      {/* ══ EMPATHIE-WORKSHOP heading ══ */}
      <section className="bg-egg">
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <h2>Empathie-Workshop</h2>
            <p>&nbsp;</p>
            <p>Bevor ein Projekt startet, lernen wir uns kennen. Welche Sprache sprechen wir? Welche Bedürfnisse – emotional wie rational – gilt es zu erfüllen? Ein Entwurf kann erst starten, wenn wir unsere Kunden in der Tiefe verstanden haben.</p>
          </div>
        </div>
      </section>

      <div className="spacer-sm bg-egg" />

      {/* ══ EMPATHIE-WORKSHOP grid ══ */}
      <section className="bg-egg">
        <div className="img-grid lg-container">
          <div className="col-full lg-col-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/empathie-01-portrait.webp" alt="" className="img-landscape" style={{ aspectRatio: '2/3' }} />
          </div>
          <div className="col-full lg-col-1" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="text-pad richtext-block">
              <p>Ein Projekt, welches über Jahre geht, ist eine gemeinsame Reise – und am Anfang dieser Reise steht bei Studio Fyrnys der Empathie-Workshop.</p>
              <p>&nbsp;</p>
              <p>Hierbei geht es neben dem Grundriss auch um die Beziehung zwischen Bauherren und Design Team, die in gegenseitigem Verstehen und Kennenlernen besteht und schlussendlich die Grundlage gegenseitigen Vertrauens ist.</p>
              <p>&nbsp;</p>
              <p>Wir versprechen nichts, was wir nicht halten können. Es geht vornehmlich darum, Grundbedürfnisse zu verstehen. Hierbei spielt der Charakter ebenso eine Rolle wie persönliche Wünsche und Lebensstile.</p>
            </div>
          </div>
          <div className="col-full lg-col-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/empathie-05-wide.webp" alt="" className="img-landscape" />
          </div>
        </div>
      </section>

      <div className="spacer-sm bg-egg" />
      <div className="spacer-md" style={{ backgroundColor: '#fff' }} />

      {/* ══ INNENARCHITEKTUR heading ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <h2>Innenarchitektur</h2>
            <p>&nbsp;</p>
            <p>Unsere Vision ist es, Lebensräume zu erschaffen, die unsere Auftraggeber nachhaltig begeistern und bereichern. Darum stellen wir uns ganz bewusst den Fragen: Was berührt unsere Kunden? Ist unser Entwurf signifikant genug? Was fehlt? Was wollen wir nicht? Wie erreichen wir maximale Wirkung bei gleichzeitiger Reduktion auf das Wesentliche?</p>
          </div>
        </div>
      </section>

      <div className="spacer-sm" style={{ backgroundColor: '#fff' }} />

      {/* ══ INNENARCHITEKTUR grid ══ */}
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

      <div className="spacer-sm" style={{ backgroundColor: '#fff' }} />

      <section style={{ backgroundColor: '#fff' }}>
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <p>Wer sich für Studio Fyrnys entscheidet, hat bestimmte Erwartungen, die zu sehen, verstehen und zu berücksichtigen die besondere Herausforderung über alle kreativen Prozesse ist. Wir gestalten mit einem holistischen Ansatz.</p>
            <p>&nbsp;</p>
            <p>Unsere Innenarchitektur steht für eine zeitlose, reduzierte Designsprache, die tief in der Natur verwurzelt und durch exzellente Handwerkskunst geprägt ist. Von Studio Fyrnys gestaltete Räume leben von einer klaren Struktur und einer außergewöhnlichen Atmosphäre.</p>
          </div>
        </div>
      </section>

      <div className="spacer-md" style={{ backgroundColor: '#fff' }} />

      {/* ══ HANDWERK heading ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <h2>Handwerk & Schreinerei</h2>
            <p>&nbsp;</p>
            <p>Wir fertigen den Innenausbau in enger Zusammenarbeit mit ausgewählten Manufakturen – maßgeschneidert und mit höchstem handwerklichen Anspruch. Weil Ideen nur so stark wie ihre Umsetzung sind, begleiten wir sämtliche Arbeitsschritte eines Projekts bis zum Abschluss und darüber hinaus.</p>
          </div>
        </div>
      </section>

      <div className="spacer-sm" style={{ backgroundColor: '#fff' }} />

      {/* ══ HANDWERK grid ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="img-grid lg-container">
          <div className="col-full lg-col-1" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/handwerk-09-portrait.webp" alt="" className="img-landscape" style={{ aspectRatio: '2/3' }} />
            <div className="text-pad richtext-block">
              <p>Handwerk, das Form annimmt.</p>
            </div>
          </div>
          <div className="col-full lg-col-1">
            <div className="text-pad richtext-block">
              <p>Unser Ursprung ist das Handwerk. Deshalb entwerfen wir Räume nicht nur, wir setzen sie auch um – mit Liebe zum Detail und mit einem Hang zur Perfektion. So wissen wir um die Herkunft unserer Materialien, beherrschen ihre Verarbeitung und haben ein untrügliches Gespür dafür, Ideen Realität werden zu lassen.</p>
              <p>&nbsp;</p>
              <p>Das Handwerk bei Studio Fyrnys ist weit mehr als reine Fertigung – es ist ein Qualitätsversprechen. Unsere Spezialisten arbeiten mit einem tiefen Verständnis für Material, Form und Funktion. Jedes Detail, jede Verbindung, jede Oberfläche wird sorgfältig durchdacht und mit handwerklicher Hingabe umgesetzt.</p>
            </div>
          </div>
          <div className="col-full lg-col-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/handwerk-16-wide.webp" alt="" className="img-landscape" />
          </div>
        </div>
      </section>

      <div className="spacer-sm" style={{ backgroundColor: '#fff' }} />

      <section style={{ backgroundColor: '#fff' }}>
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <p>Die Verbindung von handwerklicher Exzellenz und gestalterischer Klarheit ist das Fundament unserer Arbeit. Sie macht unsere Projekte unverwechselbar – und zeitlos.</p>
            <p>&nbsp;</p>
            <p>Jedes Möbelstück, jeder Einbau ist ein Unikat – entwickelt mit Blick für das Große Ganze und gefertigt mit Präzision bis ins kleinste Detail.</p>
          </div>
        </div>
      </section>

      <div className="spacer-md" style={{ backgroundColor: '#fff' }} />
      <div className="spacer-sm bg-egg" />

      {/* ══ PARTNER heading ══ */}
      <section className="bg-egg">
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <h2>Partner</h2>
            <p>&nbsp;</p>
            <p>Hinter jedem Projekt von Studio Fyrnys steht ein Netzwerk aus ausgewählten Partnern – Manufakturen, die unser Verständnis von Qualität, Präzision und Ästhetik teilen. In enger Zusammenarbeit mit regionalen und internationalen Spezialisten entsteht kompromisslose Handwerkskunst auf höchstem Niveau.</p>
          </div>
        </div>
      </section>

      <div className="spacer-sm bg-egg" />

      {/* ══ PARTNER grid ══ */}
      <section className="bg-egg">
        <div className="img-grid lg-container">
          <div className="col-full lg-col-1" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/partner-02-stein.webp" alt="" className="img-landscape" style={{ aspectRatio: '2/3' }} />
            <div className="text-pad richtext-block">
              <h3>Stein</h3>
              <p>&nbsp;</p>
              <p>Stein zählt zu den ältesten Werkstoffen der Architektur – und begeistert bis heute mit Beständigkeit, Haptik und natürlicher Eleganz. Bei Studio Fyrnys entstehen in Zusammenarbeit mit spezialisierten Handwerksbetrieben maßgefertigte Lösungen.</p>
            </div>
          </div>
          <div className="col-full lg-col-1" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/partner-04-metall.webp" alt="" className="img-landscape" style={{ aspectRatio: '2/3' }} />
            <div className="text-pad richtext-block">
              <h3>Metall</h3>
              <p>&nbsp;</p>
              <p>Metall ist vielseitig, robust und präzise bearbeitbar – und wird im abgestimmten Interior Design zum stilprägenden Element. Gemeinsam mit spezialisierten Betrieben entstehen individuelle Sonderanfertigungen.</p>
            </div>
          </div>
          <div className="col-full lg-col-2" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/partner-03-stoff.webp" alt="" className="img-landscape" />
            <div className="text-pad richtext-block">
              <h3>Stoff und Leder</h3>
              <p>&nbsp;</p>
              <p>Polstererarbeiten sind ein integraler Bestandteil unserer Innenarchitektur – funktional und formgebend. Im Fokus stehen natürliche Materialien, präzise Verarbeitung und ein feines Gespür für Proportionen.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="spacer-sm bg-egg" />
      <div className="spacer-md" style={{ backgroundColor: '#fff' }} />

      {/* ══ MÖBLIERUNG heading ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <h2>Möblierung</h2>
            <p>&nbsp;</p>
            <p>Ein guter Entwurf entfaltet seine volle Wirkung erst mit der passenden Möblierung. Deshalb arbeitet Studio Fyrnys ausschließlich mit international renommierten Möbelherstellern, deren Qualität, Gestaltung und Materialität unseren Ansprüchen vollständig gerecht werden.</p>
          </div>
        </div>
      </section>

      <div className="spacer-sm" style={{ backgroundColor: '#fff' }} />

      {/* ══ MÖBLIERUNG grid ══ */}
      <section style={{ backgroundColor: '#fff' }}>
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
            <div>
              <div className="text-pad richtext-block">
                <p>Mit einigen Designmarken verbindet uns eine jahrelange, exklusive Partnerschaft.</p>
                <p>&nbsp;</p>
                <p>Unsere Marken sind zwar Teil einer ganzheitlichen Planung – können auf Wunsch aber auch unabhängig über Studio Fyrnys bezogen werden – dabei unterstützen unsere Designer gerne bei der Stoff- und Materialwahl.</p>
                <p>&nbsp;</p>
                <p>Wenn Sie Interesse an einem bestimmten Produkt oder an einer persönlichen Beratung haben, freuen wir uns auf Ihre Anfrage oder ein unverbindliches Gespräch.</p>
                <p>&nbsp;</p>
                <p><a href="/kontakt">Kontakt aufnehmen ›</a></p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/leistungen/moeblierung-logos.webp" alt="" className="img-portrait" />
            </div>
          </div>
        </div>
      </section>

      <div className="spacer-md" style={{ backgroundColor: '#fff' }} />

      {/* ══ PROJEKTBETREUUNG heading ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <h2>Projektbetreuung</h2>
            <p>&nbsp;</p>
            <p>Die Umsetzung anspruchsvoller Innenarchitektur verlangt nicht nur Kreativität, sondern ebenso Präzision, Koordination und technische Expertise. Bei Studio Fyrnys begleiten wir jedes Projekt über die Entwurfsphase hinaus – immer mit dem ganzheitlichen Anspruch an Qualität und eine exzellente Ausführung.</p>
          </div>
        </div>
      </section>

      <div className="spacer-sm" style={{ backgroundColor: '#fff' }} />

      {/* ══ PROJEKTBETREUUNG grid ══ */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="img-grid lg-container">
          <div className="col-full lg-col-1" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/projekt-17-portrait.webp" alt="" className="img-landscape" style={{ aspectRatio: '2/3' }} />
            <div className="text-pad richtext-block">
              <p>Wir kreieren Einzigartiges und setzen dabei neue Standards.</p>
            </div>
          </div>
          <div className="col-half lg-col-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/projekt-pb-01.webp" alt="" className="img-portrait" />
          </div>
          <div className="col-half lg-col-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/leistungen/projekt-08-wide.webp" alt="" className="img-portrait" />
          </div>
        </div>
      </section>

      <div className="spacer-sm" style={{ backgroundColor: '#fff' }} />

      <section style={{ backgroundColor: '#fff' }}>
        <div className="lg-container">
          <div className="text-pad richtext-block" style={{ maxWidth: '900px' }}>
            <p>Unsere künstlerische Projektbetreuung beginnt mit der präzisen Planung und setzt sich in einer strukturierten Zusammenarbeit mit allen relevanten Gewerken fort. Dabei übernehmen wir, in Abstimmung mit der Bauleitung, die Detailkoordination und sorgen für eine reibungslose Kommunikation zwischen allen Projektbeteiligten.</p>
            <p>&nbsp;</p>
            <p>Unsere Auftraggeber profitieren von einem kompetenten Ansprechpartner, transparenter Dokumentation und dem Wissen, dass ihr Projekt in erfahrenen Händen ist – bis zur finalen Übergabe.</p>
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
            {[
              { title: 'Privathaus München', img: '/images/slide-1.jpg' },
              { title: 'Penthouse Wien',     img: '/images/slide-4.jpg' },
              { title: 'Villa am See',       img: '/images/slide-6.jpg' },
              { title: 'Showroom',           img: '/images/slide-3.jpg' },
            ].map((p) => (
              <a key={p.title} href="/projekte" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.title} className="img-portrait project-thumb" />
                </div>
                <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333', margin: 0 }}>{p.title}</p>
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
