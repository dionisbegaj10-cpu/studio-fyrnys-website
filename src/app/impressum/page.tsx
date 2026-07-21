import type { Metadata } from 'next';
import LeistungenNav from '../leistungen/LeistungenNav';

export const metadata: Metadata = { title: 'Impressum – Studio Fyrnys' };

const font: React.CSSProperties = { fontFamily: "'TT Norms Pro', sans-serif" };

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      {title && (
        <h2 style={{
          fontFamily: 'var(--font-halis)',
          fontSize: '20px',
          fontWeight: 500,
          color: '#2d2926',
          marginBottom: '12px',
        }}>
          {title}
        </h2>
      )}
      <div style={{ fontSize: '14px', lineHeight: 1.8, color: '#333' }}>
        {children}
      </div>
    </div>
  );
}

export default function ImpressumPage() {
  return (
    <div style={{ ...font, color: '#333', backgroundColor: '#f7f6f0', padding: '0 16px' }}>
      <LeistungenNav />

      <div className="spacer-sm" />

      <section>
        <div className="lg-container">
          <div className="richtext-block desktop-readable" style={{ maxWidth: '900px' }}>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#d8d3c9', marginBottom: '24px' }} />
            <h1>Impressum</h1>
            <p>&nbsp;</p>

            <Section title="Verantwortlich">
              <p style={{ margin: 0 }}>Fyrnys GmbH</p>
              <p style={{ margin: 0 }}>Heilbronner Straße 147</p>
              <p style={{ margin: '0 0 16px' }}>74211 Leingarten</p>

              <p style={{ margin: 0 }}>Telefon: 07131 402667</p>
              <p style={{ margin: 0 }}>Telefax: 07131 40836</p>
              <p style={{ margin: '0 0 16px' }}>E-Mail: info@fyrnys.de</p>

              <p style={{ margin: 0 }}>Handelsregister:</p>
              <p style={{ margin: 0 }}>Amtsgericht Stuttgart HRB 100660</p>
              <p style={{ margin: '0 0 16px' }}>Umsatzsteuer Ident.Nr. gemäß § 27 a Umsatzsteuergesetz; Ust.IdNr. DE 145771140</p>

              <p style={{ margin: 0 }}>Sitz der Gesellschaft:</p>
              <p style={{ margin: '0 0 16px' }}>74211 Leingarten</p>

              <p style={{ margin: 0 }}>Vertreten durch den Geschäftsführer:</p>
              <p style={{ margin: 0 }}>Michael Fyrnys</p>
            </Section>

            <Section title="Haftung für Inhalte">
              <p>Diese Internetseite wurde mit größter Sorgfalt erstellt jedoch können wir für die Aktualität, Richtigkeit und Vollständigkeit der Inhalte keine Gewähr übernehmen. Wir sind ausschließlich für die eigenen Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind nicht verpflichtet übermittelte oder gespeicherte Informationen zu überwachen und deren Richtigkeit zu überprüfen. Bei bekanntwerden von entsprechenden Ungenauigkeiten oder Rechtverletzungen werden wir die Inhalte umgehend entfernen. Eine Haftung aus eventuellen Schäden, gleich welcher Art, durch Nutzung von Informationen aus dieser Internetpräsenz wird nicht übernommen.</p>
            </Section>

            <Section title="Haftung für Links">
              <p>Auf Inhalte von Webseiten Dritter, die durch Links auf unserer Seite aufgerufen werden, haben wir keinen Einfluss und übernehmen keine Gewähr dafür. Für diese Seiten ist stets der Anbieter oder Betreiber der Seiten verantwortlich.</p>
            </Section>

            <Section title="Urheberrecht">
              <p>Alle Inhalte, Bilder und Darstellungen sind Eigentum der Fyrnys GmbH und unterliegen dem deutschen Urheberrecht. Die Nutzung der Inhalte außerhalb der Grenzen des Urheberrechts ist nur mit schriftlicher Genehmigung des Autors oder Erstellers erlaubt. Kopien sind ausschließlich für den privaten und nicht für den kommerziellen Gebrauch gestattet.</p>
            </Section>
          </div>
        </div>
      </section>

      <div className="spacer-md" />

      <footer style={{ margin: '0 -16px', backgroundColor: '#f7f6f0', padding: '48px 16px' }}>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0, textAlign: 'center' }}>
          © {new Date().getFullYear()} Studio Fyrnys
        </p>
      </footer>
    </div>
  );
}
