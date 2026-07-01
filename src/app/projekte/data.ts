export interface Project {
  id: number;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  images: string[];
}

function gallery(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/images/projekte/${slug}/img-${String(i + 1).padStart(2, '0')}.webp`);
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'bellari',
    name: 'Bellari Frankfurt',
    description: 'Für die BELLARI Frankfurt wurde eine bestehende Bürofläche im zweiten Obergeschoss zu einer modernen Praxis für ästhetische Medizin und professionelle Kosmetik umgebaut. Im Rahmen der Erweiterung entstanden hochwertig ausgestattete Behandlungsräume sowie ein Schulungsbereich, die den hohen Qualitätsanspruch der Marke widerspiegeln. Ziel des Entwurfs war es, eine zeitlose und ruhige Atmosphäre zu schaffen, die Professionalität, Diskretion und Wohlbefinden gleichermaßen vermittelt. Individuell gefertigte Wandverkleidungen aus Holz und Keramik sowie maßgefertigte Arbeitsbereiche aus der Schreinerei verleihen den Räumen eine klare architektonische Identität und unterstreichen den hochwertigen Charakter des Interieurs. Das Ergebnis ist eine Praxis, die Funktionalität, Präzision und eine elegante Gestaltung zu einem stimmigen Gesamtkonzept vereint.',
    coverImage: '/images/projekte/bellari/cover.webp',
    images: gallery('bellari', 10),
  },
  {
    id: 2,
    slug: 'rosenparkklinik',
    name: 'Rosenparkklinik Darmstadt',
    description: 'Die bestehenden Gebäude der Rosenparkklinik in Darmstadt, einer renommierten Klinik für ästhetische Medizin und plastische Chirurgie, wurden im Rahmen einer umfassenden Neugestaltung grundlegend überarbeitet. Ziel des Entwurfs war es, eine zeitlose und klassische Atmosphäre zu schaffen, die medizinische Präzision mit einem hochwertigen, vertrauensvollen Ambiente verbindet. Die Innenräume wurden dabei konsequent neu gedacht und gestalterisch so entwickelt, dass sie Ruhe, Diskretion und Eleganz ausstrahlen. Durch eine klare Formensprache, ausgewählte Materialien und eine harmonische Gestaltung entstand ein Interieur, das den hohen Anspruch der Klinik widerspiegelt und zugleich eine angenehme Umgebung für Patienten und Mitarbeitende schafft.',
    coverImage: '/images/projekte/rosenparkklinik/cover.webp',
    images: gallery('rosenparkklinik', 16),
  },
  {
    id: 3,
    slug: 'salon-troendle',
    name: 'Salon Tobias Tröndle',
    description: 'Für den renommierten Friseur Tobias Tröndle wurde eine bestehende Ladenfläche aus den 1970er-Jahren vollständig entkernt und zu einem modernen Salon mit eigenständiger Identität transformiert. Eine besondere Herausforderung stellte die vollständig verglaste Gebäudehülle dar. Der Wunsch bestand darin, trotz der großzügigen Fensterflächen ein hohes Maß an Privatsphäre für die Kundschaft zu schaffen, ohne die Offenheit und Transparenz des Raumes zu verlieren. Durch eine gezielte Zonierung sowie den bewussten Einsatz von Materialien und Raumstrukturen entstand ein ausgewogenes Verhältnis zwischen Rückzug und Offenheit. Gestalterisch verbindet das Konzept eine elegante, hochwertige Atmosphäre mit subtilen Anklängen an die Architektur- und Designsprache der 1970er-Jahre. Warme Materialien, sorgfältig ausgewählte Oberflächen und präzise gesetzte Details verleihen dem Salon einen unverwechselbaren Charakter und schaffen ein exklusives Ambiente für Kundinnen und Kunden. Das Ergebnis ist ein zeitgemäßer Salon, der die Geschichte des Ortes aufgreift und zugleich einen selbstbewussten, modernen Auftritt schafft.',
    coverImage: '/images/projekte/salon-troendle/cover.webp',
    images: gallery('salon-troendle', 8),
  },
  {
    id: 4,
    slug: 'wild-beauty',
    name: 'Wild Beauty',
    description: 'Für das Familienunternehmen Wild Beauty wurde im Zuge des Generationswechsels eine umfassende Transformation der bestehenden Unternehmensflächen entwickelt. Zwei Bestandsgebäude wurden architektonisch und innenräumlich neu gestaltet und zu individuellen Büroflächen sowie einem Schulungszentrum weiterentwickelt. Ziel war es, eine Arbeitswelt zu schaffen, die die Identität des Unternehmens stärkt und zugleich den Aufbruch in die nächste Generation sichtbar macht. Das Gestaltungskonzept orientiert sich an einer zeitgemäßen Interpretation des Midcentury-Stils. Klare Linien, warme Materialien und ausgewählte Details verleihen den Räumen eine eigenständige Atmosphäre zwischen Professionalität, Wertigkeit und Offenheit. Das Ergebnis ist ein Unternehmensstandort, der Bestand, neue Arbeitswelten und Markenidentität zu einem stimmigen Gesamtkonzept verbindet.',
    coverImage: '/images/projekte/wild-beauty/cover.webp',
    images: gallery('wild-beauty', 17),
  },
  {
    id: 5,
    slug: 'bimberg',
    name: 'Bimberg — Haus im Haus',
    description: 'Im Rahmen dieses anspruchsvollen Umbaus wurden zwei separate Wohnungen zu einer großzügigen Wohneinheit zusammengeführt. Das Gestaltungskonzept folgte dabei dem Prinzip „Haus im Haus" und schafft auf mehreren Ebenen ein einzigartiges Wohngefühl mit klar gegliederten Funktionsbereichen. Ein besonderer Eingriff war die Erweiterung des Gebäudes durch einen filigranen Glasanbau, der die neue Küche aufnimmt und für eine helle, offene Verbindung zwischen Innen- und Außenraum sorgt. Die Grundrissstruktur wurde vollständig neu organisiert, um den heutigen Anforderungen an modernes Wohnen gerecht zu werden. Im Zuge der Sanierung wurden Türstürze erhöht, Raumproportionen optimiert und historische Details behutsam rekonstruiert. Durch die Wiedereinbringung von Stuckelementen konnte der ursprüngliche Altbaucharakter wiederhergestellt und mit zeitgemäßen Wohnqualitäten kombiniert werden. Das Ergebnis ist ein Stadthaus, das historische Substanz und moderne Architektur zu einer harmonischen Einheit verbindet.',
    coverImage: '/images/projekte/bimberg/cover.webp',
    images: gallery('bimberg', 14),
  },
  {
    id: 6,
    slug: 'entholzer-liebigstrasse',
    name: 'Entholzer Liebigstraße — Bel Étage',
    description: 'Die Gestaltung dieser Stadtwohnung in der Bel Étage eines repräsentativen Altbaus verbindet klassische Eleganz mit den Anforderungen eines modernen Familienlebens. Großzügige Raumproportionen, hohe Decken und die besondere Atmosphäre der Wohnung bilden die Grundlage für ein hochwertiges Einrichtungskonzept. Eine sorgfältig abgestimmte Auswahl von Möbeln, Materialien und Textilien schafft ein zeitloses Ambiente, das sowohl repräsentativ als auch wohnlich wirkt. Ziel war es, elegante Räume zu gestalten, die den Alltag einer Familie selbstverständlich aufnehmen. Komfort, Funktionalität und Ästhetik stehen dabei gleichwertig nebeneinander und schaffen eine harmonische Balance zwischen anspruchsvollem Design und entspanntem Wohnen. Das Ergebnis ist eine Stadtwohnung mit ruhiger, zeitloser Eleganz, die den Charakter der Bel Étage unterstreicht und zugleich ein einladendes Zuhause für die ganze Familie bietet.',
    coverImage: '/images/projekte/entholzer-liebigstrasse/cover.webp',
    images: gallery('entholzer-liebigstrasse', 9),
  },
  {
    id: 7,
    slug: 'strenge',
    name: 'Strenge — Stadthaus Modern',
    description: 'Bei der Kernsanierung dieses Stadthauses lag der Fokus darauf, moderne, klare Innenräume zu schaffen und den Bestand behutsam weiterzuentwickeln. Die Raumstruktur wurde gezielt überarbeitet, um helle, großzügige Wohnbereiche mit zeitgemäßer Funktionalität zu ermöglichen. Klare Linien, hochwertige Materialien und maßgeschneiderte Einbauten prägen das Gestaltungskonzept und schaffen eine ruhige, elegante Atmosphäre. Das Ergebnis ist ein modernes Stadthaus, das zurückhaltende Architektur, Wohnkomfort und funktionale Details harmonisch miteinander verbindet.',
    coverImage: '/images/projekte/strenge/cover.webp',
    images: gallery('strenge', 13),
  },
  {
    id: 8,
    slug: 'christophersen',
    name: 'Christophersen — Skandinavisches Wohnen',
    description: 'Für eine junge Familie entstand in Frankfurt ein Zuhause, das skandinavische Leichtigkeit mit hoher Funktionalität verbindet. Ziel des Projekts war es, eine helle, freundliche und einladende Wohnatmosphäre zu schaffen, die den Anforderungen des Familienalltags gerecht wird. Im Mittelpunkt des Entwurfs steht die großzügige Wohnküche als zentraler Treffpunkt des Hauses. Offene Raumbezüge, natürliche Materialien und eine zurückhaltende Farbpalette schaffen eine warme und zeitlose Umgebung für gemeinsames Kochen, Essen und Leben. Besonderes Augenmerk lag auf der Entwicklung maßgeschneiderter Stauraumlösungen. Durch intelligent integrierte Einbauten und klar strukturierte Funktionsbereiche konnte ausreichend Platz für die Bedürfnisse der Familie geschaffen werden, ohne die Leichtigkeit des Raumkonzepts zu beeinträchtigen. Das Ergebnis ist ein harmonisches Zuhause, das skandinavische Gestaltung mit Wohnkomfort, Funktionalität und einer hohen Aufenthaltsqualität vereint.',
    coverImage: '/images/projekte/christophersen/cover.webp',
    images: gallery('christophersen', 14),
  },
  {
    id: 9,
    slug: 'wild-schmitten',
    name: 'Wild Schmitten — Villa Schmitten',
    description: 'Im Rahmen des Umbaus dieses Einfamilienhauses im Taunus wurde der Bestand umfassend neu gestaltet und zu einem großzügigen, hochwertigen Wohnhaus weiterentwickelt. Das Gestaltungskonzept orientiert sich an der Formensprache der 1970er-Jahre und interpretiert diese auf zeitgemäße Weise. Warme Materialien, markante Oberflächen und eine sorgfältig abgestimmte Farbwelt verleihen dem Haus eine stilvolle, charakterstarke Atmosphäre. Offene Sichtachsen, fließende Übergänge und die besondere räumliche Struktur des Hauses verbinden die einzelnen Bereiche zu einem harmonischen Gesamtbild. Eine hochwertige Material- und Detailplanung unterstreicht den exklusiven Charakter und schafft zugleich ein wohnliches, entspanntes Ambiente. Das Ergebnis ist ein stilvolles Wohnhaus, das den Seventies Look mit zeitgemäßem Komfort und hochwertiger Ausführung verbindet.',
    coverImage: '/images/projekte/wild-schmitten/cover.webp',
    images: gallery('wild-schmitten', 17),
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
