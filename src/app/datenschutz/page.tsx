import type { Metadata } from 'next';
import LeistungenNav from '../leistungen/LeistungenNav';

export const metadata: Metadata = { title: 'Datenschutz – Studio Fyrnys' };

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

export default function DatenschutzPage() {
  return (
    <div style={{ ...font, color: '#333', backgroundColor: '#f7f6f0', padding: '0 16px' }}>
      <LeistungenNav />

      <div className="spacer-sm" />

      <section>
        <div className="lg-container">
          <div className="richtext-block desktop-readable" style={{ maxWidth: '900px' }}>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#d8d3c9', marginBottom: '24px' }} />
            <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9b9690', margin: '0 0 8px' }}>
              Datenschutzerklärung
            </p>
            <h1>Datenschutz</h1>
            <p>&nbsp;</p>

            <Section>
              <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
              <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist: Fyrnys GmbH</p>
            </Section>

            <Section title="Zwecke der Datenverarbeitung durch die verantwortliche Stelle und Dritte">
              <p>Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser Datenschutzerklärung genannten Zwecken. Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den genannten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
              <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
                <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</li>
                <li>die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen erforderlich ist,</li>
                <li>die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,</li>
              </ul>
              <p>die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.</p>
            </Section>

            <Section title="Erfassung allgemeiner Informationen beim Besuch unserer Website">
              <p>Wenn Sie auf unsere Website zugreifen, werden automatisch mittels eines Cookies Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.</p>
              <p>Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an. Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
              <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
                <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
                <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                <li>zu weiteren administrativen Zwecken.</li>
              </ul>
              <p>Die Verarbeitung Ihrer personenbezogenen Daten basiert auf unserem berechtigten Interesse aus den vorgenannten Zwecken zur Datenerhebung. Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Empfänger der Daten sind nur die verantwortliche Stelle und ggf. Auftragsverarbeiter.</p>
              <p>Anonyme Informationen dieser Art werden von uns ggfs. statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.</p>
            </Section>

            <Section title="Cookies">
              <p>Wie viele andere Webseiten verwenden wir auch so genannte „Cookies". Cookies sind kleine Textdateien, die von einem Websiteserver auf Ihre Festplatte übertragen werden. Hierdurch erhalten wir automatisch bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser, Betriebssystem und Ihre Verbindung zum Internet.</p>
              <p>Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu übertragen. Anhand der in Cookies enthaltenen Informationen können wir Ihnen die Navigation erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen.</p>
              <p>In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt.</p>
              <p>Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten. Internet-Browser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.</p>
            </Section>

            <Section title="SSL-Verschlüsselung">
              <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
            </Section>

            <Section title="Verwendung von Google Analytics">
              <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (folgend: Google). Google Analytics verwendet sog. „Cookies", also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p>
              <p>Die Zwecke der Datenverarbeitung liegen in der Auswertung der Nutzung der Website und in der Zusammenstellung von Reports über Aktivitäten auf der Website. Auf Grundlage der Nutzung der Website und des Internets sollen dann weitere verbundene Dienstleistungen erbracht werden. Die Verarbeitung beruht auf dem berechtigten Interesse des Webseitenbetreibers.</p>
              <p>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">Browser Add On zur Deaktivierung von Google Analytics</a>.</p>
              <p>Zusätzlich oder als Alternative zum Browser-Add-On können Sie das Tracking durch Google Analytics auf unseren Seiten unterbinden, indem Sie <a href="https://www.activemind.de/datenschutz/datenschutzhinweis-generator/ergebnis/#" target="_blank" rel="noopener noreferrer">diesen Link anklicken</a>. Dabei wird ein Opt-Out-Cookie auf Ihrem Gerät installiert. Damit wird die Erfassung durch Google Analytics für diese Website und für diesen Browser zukünftig verhindert, so lange das Cookie in Ihrem Browser installiert bleibt.</p>
            </Section>

            <Section title="Verwendung von Scriptbibliotheken (Google Webfonts)">
              <p>Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website Scriptbibliotheken und Schriftbibliotheken wie z. B. Google Webfonts (https://www.google.com/webfonts/). Google Webfonts werden zur Vermeidung mehrfachen Ladens in den Cache Ihres Browsers übertragen. Falls der Browser die Google Webfonts nicht unterstützt oder den Zugriff unterbindet, werden Inhalte in einer Standardschrift angezeigt.</p>
              <p>Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass Betreiber entsprechender Bibliotheken Daten erheben.</p>
              <p>Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: https://www.google.com/policies/privacy/</p>
            </Section>

            <Section title="Verwendung von Adobe Typekit">
              <p>Wir setzen Adobe Typekit zur visuellen Gestaltung unserer Website ein. Typekit ist ein Dienst der Adobe Systems Software Ireland Ltd. der uns den Zugriff auf eine Schriftartenbibliothek gewährt. Zur Einbindung der von uns benutzten Schriftarten, muss Ihr Browser eine Verbindung zu einem Server von Adobe in den USA aufbauen und die für unsere Website benötigte Schriftart herunterladen. Adobe erhält hierdurch die Information, dass von Ihrer IP-Adresse unsere Website aufgerufen wurde. Weitere Informationen zu Adobe Typekit finden Sie in den Datenschutzhinweisen von Adobe, die Sie hier abrufen können: <a href="https://www.adobe.com/privacy/typekit.html" target="_blank" rel="noopener noreferrer">www.adobe.com/privacy/typekit.html</a></p>
            </Section>

            <Section title="Verwendung von Google Maps">
              <p>Diese Webseite verwendet Google Maps API, um geographische Informationen visuell darzustellen. Bei der Nutzung von Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen durch Besucher erhoben, verarbeitet und genutzt. Nähere Informationen über die Datenverarbeitung durch Google können Sie <a href="http://www.google.com/privacypolicy.html" target="_blank" rel="noopener noreferrer">den Google-Datenschutzhinweisen</a> entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.</p>
              <p>Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten <a href="http://www.dataliberation.org/" target="_blank" rel="noopener noreferrer">finden Sie hier</a>.</p>
            </Section>

            <Section title="Google AdWords">
              <p>Unsere Webseite nutzt das Google Conversion-Tracking. Sind Sie über eine von Google geschaltete Anzeige auf unsere Webseite gelangt, wird von Google Adwords ein Cookie auf Ihrem Rechner gesetzt. Das Cookie für Conversion-Tracking wird gesetzt, wenn ein Nutzer auf eine von Google geschaltete Anzeige klickt. Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung. Besucht der Nutzer bestimmte Seiten unserer Website und das Cookie ist noch nicht abgelaufen, können wir und Google erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder Google AdWords-Kunde erhält ein anderes Cookie. Cookies können somit nicht über die Websites von AdWords-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu, Conversion-Statistiken für AdWords-Kunden zu erstellen, die sich für Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen.</p>
              <p>Möchten Sie nicht am Tracking teilnehmen, können Sie das hierfür erforderliche Setzen eines Cookies ablehnen – etwa per Browser-Einstellung, die das automatische Setzen von Cookies generell deaktiviert oder Ihren Browser so einstellen, dass Cookies von der Domain „googleleadservices.com" blockiert werden.</p>
              <p>Bitte beachten Sie, dass Sie die Opt-out-Cookies nicht löschen dürfen, solange Sie keine Aufzeichnung von Messdaten wünschen. Haben Sie alle Ihre Cookies im Browser gelöscht, müssen Sie das jeweilige Opt-out Cookie erneut setzen.</p>
            </Section>

            <Section title="Einsatz von Google Remarketing">
              <p>Diese Webseite verwendet die Remarketing-Funktion der Google Inc. Die Funktion dient dazu, Webseitenbesuchern innerhalb des Google-Werbenetzwerks interessenbezogene Werbeanzeigen zu präsentieren. Im Browser des Webseitenbesuchers wird ein sog. „Cookie" gespeichert, der es ermöglicht, den Besucher wiederzuerkennen, wenn dieser Webseiten aufruft, die dem Werbenetzwerk von Google angehören. Auf diesen Seiten können dem Besucher Werbeanzeigen präsentiert werden, die sich auf Inhalte beziehen, die der Besucher zuvor auf Webseiten aufgerufen hat, die die Remarketing Funktion von Google verwenden.</p>
              <p>Nach eigenen Angaben erhebt Google bei diesem Vorgang keine personenbezogenen Daten. Sollten Sie die Funktion Remarketing von Google dennoch nicht wünschen, können Sie diese grundsätzlich deaktivieren, indem Sie die entsprechenden Einstellungen unter http://www.google.com/settings/ads vornehmen. Alternativ können Sie den Einsatz von Cookies für interessenbezogene Werbung über die Werbenetzwerkinitiative deaktivieren, indem Sie den Anweisungen unter http://www.networkadvertising.org/managing/opt_out.asp folgen.</p>
            </Section>

            <Section title="Änderung unserer Datenschutzbestimmungen">
              <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
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
