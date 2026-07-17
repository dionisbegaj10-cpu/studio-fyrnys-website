export interface Project {
  id: number;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  images: string[];
  comingSoon?: boolean;
  photographer?: string;
}

function gallery(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/images/projekte/${slug}/img-${String(i + 1).padStart(2, '0')}.webp`);
}

export const projects: Project[] = [
  {
    id: 5,
    slug: 'bimberg',
    name: 'Haus im Haus',
    description: 'Bei diesem Umbau wurden zwei separate Wohnungen zu einer großzügigen Wohneinheit zusammengeführt. Das Prinzip „Haus im Haus" gliedert die Wohnbereiche über mehrere Ebenen und gibt dem Stadthaus seine besondere Struktur. Die Grundrisse wurden vollständig neu organisiert und auf das Leben der Familie abgestimmt. Die neue Küche befindet sich in einem filigranen Glasanbau. Sie öffnet sich zum Außenbereich und bringt viel Tageslicht in das Haus. Gleichzeitig wurde der Altbau sorgfältig weiterentwickelt. Türstürze wurden erhöht, Raumproportionen angepasst und Stuckelemente wieder ergänzt. Der ursprüngliche Charakter des Hauses bleibt dadurch spürbar und wird mit der neuen Architektur verbunden.',
    coverImage: '/images/projekte/bimberg/cover.webp',
    images: gallery('bimberg', 14),
  },
  {
    id: 2,
    slug: 'rosenparkklinik',
    name: 'Rosenparkklinik',
    description: 'Für die Rosenparkklinik in Darmstadt wurden zwei bestehende Gebäude umfassend neu gestaltet. Ziel war ein durchgängiges Konzept, das den unterschiedlichen Bereichen der Klinik einen gemeinsamen Charakter gibt. Die klassisch geprägte Architektur der Häuser bildete dafür den Ausgangspunkt. Bestehende Elemente wurden aufgegriffen und durch neue Materialien, Farben und maßgefertigte Einbauten aus unserer Schreinerei ergänzt. Wiederkehrende Details verbinden die verschiedenen Bereiche miteinander. Dennoch behält jedes der beiden Gebäude seine eigene Atmosphäre. So entstanden Räume, die repräsentativ wirken und gleichzeitig Ruhe und Vertrauen vermitteln.',
    coverImage: '/images/projekte/rosenparkklinik/cover.webp',
    images: gallery('rosenparkklinik', 10),
  },
  {
    id: 4,
    slug: 'wild-beauty',
    name: 'Wild Beauty',
    description: 'Im Zuge des Generationswechsels bei Wild Beauty wurden zwei bestehende Gebäude neu organisiert und gestaltet. Neben den Bürobereichen entstand ein Schulungszentrum für das Familienunternehmen. Die Räume sollten die Geschichte des Familienunternehmens aufgreifen und zugleich auf eine neue Weise fortführen. Elemente aus dem Midcentury-Stil, warme Materialien und eigens entwickelte Einbauten verbinden die Bereiche miteinander. Die unterschiedlichen Arbeitsbereiche haben jeweils einen eigenen Charakter. Gleichzeitig bleiben sie als Teil eines gemeinsamen Unternehmensstandorts erkennbar.',
    coverImage: '/images/projekte/wild-beauty/cover.webp',
    images: gallery('wild-beauty', 14),
    photographer: 'Nicolas Rose',
  },
  {
    id: 8,
    slug: 'christophersen',
    name: 'Skandinavisches Wohnen',
    description: 'Für eine junge Familie in Frankfurt wurde das Zuhause neu geplant und auf den gemeinsamen Alltag ausgerichtet. Im Zentrum steht die offene Wohnküche. Hier gehen Kochen, Essen und Zusammensein direkt ineinander über. Helle Hölzer, natürliche Materialien und ruhige Farben geben den Räumen ihre skandinavische Leichtigkeit. Trotzdem musste ausreichend Platz für die vielen Dinge des Familienlebens geschaffen werden. Maßgefertigte Einbauten aus unserer Schreinerei nehmen den benötigten Stauraum auf. Sie fügen sich zurückhaltend in die Räume ein und lassen den offenen Charakter der Wohnung bestehen.',
    coverImage: '/images/projekte/christophersen/cover.webp',
    images: gallery('christophersen', 14),
    photographer: 'Nicolas Rose',
  },
  {
    id: 7,
    slug: 'strenge',
    name: 'Stadthaus Modern',
    description: 'Bei der Kernsanierung dieses Stadthauses wurde die vorhandene Raumstruktur grundlegend überarbeitet. Die zuvor getrennten Bereiche wurden geöffnet und klarer miteinander verbunden. Individuell geplante Einbauten übernehmen wichtige Funktionen und sorgen für Ordnung im Alltag. Materialien und Oberflächen sind bewusst zurückhaltend gewählt. Dadurch wirken die Räume ruhig, ohne an Wohnlichkeit zu verlieren. Der Bestand wurde nicht verändert, sondern gezielt an die heutige Nutzung angepasst.',
    coverImage: '/images/projekte/strenge/cover.webp',
    images: gallery('strenge', 13),
  },
  {
    id: 3,
    slug: 'salon-troendle',
    name: 'Salon Tobias Tröndle',
    description: 'Für den Friseur Tobias Tröndle wurde eine Ladenfläche aus den 1970er-Jahren vollständig entkernt und neu aufgebaut. Die rundum verglaste Fassade war dabei eine besondere Ausgangssituation. Der Salon sollte offen und einladend bleiben. Gleichzeitig brauchten die Kundinnen und Kunden ausreichend Privatsphäre. Durch die Anordnung der Arbeitsplätze entstanden geschützte Bereiche, ohne den Blick durch den Salon zu verstellen. Warme Materialien und einzelne Bezüge zur Gestaltung der 1970er-Jahre greifen die Geschichte des Ortes auf. Sie geben dem Salon einen eigenständigen und persönlichen Charakter.',
    coverImage: '/images/projekte/salon-troendle/cover.webp',
    images: gallery('salon-troendle', 7),
  },
  {
    id: 1,
    slug: 'bellari',
    name: 'Bellari',
    description: 'Für die BELLARI wurde eine bestehende Bürofläche im zweiten Obergeschoss zu einer Praxis für ästhetische Medizin und professionelle Kosmetik umgebaut. Im Zuge der Erweiterung entstanden neue Behandlungsräume und ein separater Schulungsbereich. Die Gestaltung bleibt bewusst ruhig und zurückhaltend. Sie schafft einen professionellen Rahmen und zugleich eine angenehme Atmosphäre für die Patientinnen und Patienten. Prägend sind die individuell gefertigten Wandverkleidungen aus Holz und Keramik. Maßgefertigte Arbeitsbereiche und Einbauten aus unserer Schreinerei ergänzen die Räume. Farben, Materialien und Details greifen dabei selbstverständlich ineinander.',
    coverImage: '/images/projekte/bellari/cover.webp',
    images: gallery('bellari', 7),
  },
  {
    id: 9,
    slug: 'wild-schmitten',
    name: 'Villa Schmitten',
    description: 'Die Architektur dieses Einfamilienhauses im Taunus trägt deutliche Bezüge zu den 1970er-Jahren. Genau dieser Charakter bildete den Ausgangspunkt für den Umbau. Die Räume wurden geöffnet und stärker miteinander verbunden. Neue Sichtachsen lassen das Haus großzügiger wirken und machen seine besondere räumliche Struktur wieder erlebbar. Warme Materialien, markante Oberflächen und eine fein abgestimmte Farbwelt führen die vorhandene Architektur weiter. Maßgefertigte Einbauten ergänzen das Haus, ohne sich in den Vordergrund zu stellen.',
    coverImage: '/images/projekte/wild-schmitten/cover.webp',
    images: gallery('wild-schmitten', 15),
  },
  {
    id: 6,
    slug: 'entholzer-liebigstrasse',
    name: 'Bel Étage',
    description: 'Die großzügigen Räume und hohen Decken prägen diese Stadtwohnung in der Bel Étage eines Frankfurter Altbaus. Für eine Familie wurde dazu ein Einrichtungskonzept entwickelt, das den Charakter der Wohnung aufnimmt. Möbel, Leuchten, und Materialien wurden über die einzelnen Räume hinweg zusammengestellt. Dabei durfte die Wohnung elegant wirken, sollte aber nicht förmlich werden. So entstand eine persönliche Einrichtung, die dem Altbau gerecht wird und gleichzeitig genügend Raum für den Familienalltag lässt.',
    coverImage: '/images/projekte/entholzer-liebigstrasse/cover.webp',
    images: gallery('entholzer-liebigstrasse', 6),
  },
  {
    id: 15,
    slug: 'fritsch-pylos',
    name: 'Mediterranes Ferienhaus',
    description: 'Das Ferienhaus in Griechenland ist als Rückzugsort für eine Familie entstanden. Die Architektur orientiert sich an der traditionellen Bauweise der Umgebung. Naturstein, massive Holzbalken und durchgehende Steinböden bestimmen den Charakter des Hauses. Große Fenster verbinden die Wohnräume mit den Terrassen und der umgebenden Landschaft und bringen viel Tageslicht ins Haus. Das Leben findet dadurch ganz selbstverständlich zwischen innen und außen statt. Im Inneren bleiben die Materialien ursprünglich und zurückhaltend, sodass sich die Räume trotz ihrer Großzügigkeit wohnlich anfühlen.',
    coverImage: '/images/projekte/fritsch-pylos/cover.webp',
    images: ['/images/projekte/fritsch-pylos/cover.webp'],
  },
  {
    id: 12,
    slug: 'zahnarztpraxis-europaviertel',
    name: 'Zahnarztpraxis',
    description: 'Bei der Umgestaltung dieser Zahnarztpraxis im Frankfurter Europaviertel standen der Empfang und der Wartebereich im Mittelpunkt. Die bestehende Situation wurde neu geordnet, um am Empfang mehr Diskretion und bessere Arbeitsabläufe zu schaffen. Gleichzeitig sollte der erste Eindruck der Praxis ruhiger und hochwertiger werden. Eine klare Aufteilung, sorgfältig ausgewählte Materialien und individuell entwickelte Einbauten verbinden die beiden Bereiche. So wirkt die Praxis offener und einladender, ohne die notwendige Privatsphäre zu verlieren.',
    coverImage: '/images/projekte/zahnarztpraxis-europaviertel/cover.webp',
    images: ['/images/projekte/zahnarztpraxis-europaviertel/cover.webp'],
  },
  {
    id: 16,
    slug: 'fischer-penthouse',
    name: 'Penthouse',
    description: 'Bei der Kernsanierung dieses Penthouses aus den 1980er-Jahren wurde der Grundriss vollständig neu organisiert. Die ehemals kleinteilige Struktur wurde geöffnet. Dadurch entstanden großzügige Wohnbereiche mit viel Tageslicht. Gleichzeitig gliedert der neue Grundriss die Wohnung klar in gemeinschaftliche und private Bereiche. Individuelle Einbauten aus unserer Schreinerei schaffen Stauraum genau dort, wo er benötigt wird. Sie übernehmen zugleich die Zonierung einzelner Räume und fügen sich ruhig in die Architektur ein.',
    coverImage: '/images/projekte/fischer-penthouse/cover.webp',
    images: ['/images/projekte/fischer-penthouse/cover.webp'],
  },
  {
    id: 13,
    slug: 'brinkmann-wohnhaus',
    name: 'Wohnhaus',
    description: 'Bei der Sanierung dieser Altbauvilla wurde die bestehende Raumstruktur vor allem durch individuell geplante Schreinerarbeiten weiterentwickelt. Der Toilettenbereich wurde vollständig verkleidet und als eigenes Volumen in den Grundriss integriert. Dadurch tritt er optisch in den Hintergrund und fügt sich ruhiger in den Raum ein. Auch die bestehende Schachtwand zwischen Flur und Wohnbereich erhielt eine neue Verkleidung. Zusätzlicher Stauraum, klare Fluchten und abgerundete Übergänge verbinden die einzelnen Bereiche miteinander. Die Einbauten wirken nicht wie nachträgliche Ergänzungen, sondern wie ein Teil der Architektur.',
    coverImage: '/images/projekte/brinkmann-wohnhaus/cover.webp',
    images: ['/images/projekte/brinkmann-wohnhaus/cover.webp'],
  },
  {
    id: 14,
    slug: 'entholzer-gruneburgweg',
    name: 'Reihenhaus',
    description: 'Bei der Kernsanierung dieses Reihenhauses aus den 1930er-Jahren wurde die vorhandene Struktur auf das heutige Familienleben abgestimmt. Ein neuer Anbau öffnet das Haus zum Garten und bringt mehr Licht in das Erdgeschoss. Die Küche bildet nun den Mittelpunkt des Hauses. Von hier aus gehen Kochen, Essen und Wohnen fließend ineinander über. Integrierte Stauraumlösungen nutzen den vorhandenen Platz und halten die Räume im Alltag übersichtlich. Der kompakte Bestand wird dadurch deutlich offener und großzügiger wahrgenommen.',
    coverImage: '/images/projekte/entholzer-gruneburgweg/cover.webp',
    images: ['/images/projekte/entholzer-gruneburgweg/cover.webp'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const idx = projects.findIndex(p => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}
