export interface Project {
  id: number;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'frankenallee',
    name: 'Frankenallee',
    description: 'Eine umfassende Sanierung eines Gründerzeitgebäudes im Herzen Frankfurts. Historische Substanz trifft auf zeitgenössisches Design — Materialien wie Naturstein, geölte Eiche und handgefertigte Metallarbeiten prägen die Räume.',
    coverImage: '/images/leistungen/empathie-01-portrait.webp',
    images: [
      '/images/leistungen/empathie-01-portrait.webp',
      '/images/leistungen/empathie-05-wide.webp',
      '/images/leistungen/innen-07-wide.webp',
      '/images/leistungen/innen-03-portrait.webp',
    ],
  },
  {
    id: 2,
    slug: 'sachsenhausen',
    name: 'Sachsenhausen',
    description: 'Ein lichtdurchflutetes Stadtapartment mit direktem Blick auf den Frankfurter Skyline. Die Gestaltung verbindet offene Raumfolgen mit intimeren Rückzugsbereichen und folgt einer reduzierten, materialbewussten Sprache.',
    coverImage: '/images/leistungen/empathie-05-wide.webp',
    images: [
      '/images/leistungen/empathie-05-wide.webp',
      '/images/leistungen/handwerk-09-portrait.webp',
      '/images/leistungen/handwerk-16-wide.webp',
    ],
  },
  {
    id: 3,
    slug: 'westend',
    name: 'Westend',
    description: 'Eine klassische Gründerzeitvilla im Frankfurter Westend, behutsam modernisiert. Hohe Decken, originale Stuckarbeiten und neue handwerkliche Einbauten aus Messing und Marmor ergeben ein stimmiges Gesamtbild.',
    coverImage: '/images/leistungen/innen-07-wide.webp',
    images: [
      '/images/leistungen/innen-07-wide.webp',
      '/images/leistungen/innen-03-portrait.webp',
      '/images/leistungen/empathie-01-portrait.webp',
    ],
  },
  {
    id: 4,
    slug: 'nordend',
    name: 'Nordend',
    description: 'Kompaktes Stadthaus im Nordend — auf knapp 120 m² entstand ein intelligentes Raumkonzept mit maßgefertigten Einbauten und einer zurückhaltenden Materialpallette aus Beton, Leder und hellem Holz.',
    coverImage: '/images/leistungen/innen-03-portrait.webp',
    images: [
      '/images/leistungen/innen-03-portrait.webp',
      '/images/leistungen/empathie-05-wide.webp',
      '/images/leistungen/handwerk-16-wide.webp',
    ],
  },
  {
    id: 5,
    slug: 'bornheim',
    name: 'Bornheim',
    description: 'Altbaurenovierung in Bornheim mit besonderem Fokus auf handwerkliche Details: von der maßgefertigten Küche bis zu den Messingarmaturen und Natursteinböden — jedes Element wurde gemeinsam mit spezialisierten Handwerkern entwickelt.',
    coverImage: '/images/leistungen/handwerk-09-portrait.webp',
    images: [
      '/images/leistungen/handwerk-09-portrait.webp',
      '/images/leistungen/handwerk-16-wide.webp',
      '/images/leistungen/innen-07-wide.webp',
    ],
  },
  {
    id: 6,
    slug: 'bockenheim',
    name: 'Bockenheim',
    description: 'Eine vollständige Neugestaltung eines Mehrfamilienhauses in Bockenheim. Über alle Etagen hinweg entstand eine konsistente gestalterische Sprache, die Privatheit und gemeinschaftliches Leben in Einklang bringt.',
    coverImage: '/images/leistungen/handwerk-16-wide.webp',
    images: [
      '/images/leistungen/handwerk-16-wide.webp',
      '/images/leistungen/empathie-01-portrait.webp',
      '/images/leistungen/projekt-08-wide.webp',
    ],
  },
  {
    id: 7,
    slug: 'leingarten',
    name: 'Leingarten',
    description: 'Neubau-Einfamilienhaus in Leingarten — von der Grundrissplanung bis zur Möblierung vollständig durch Studio Fyrnys begleitet. Natürliche Materialien und ein fließender Übergang zwischen Innen- und Außenraum prägen das Projekt.',
    coverImage: '/images/leistungen/moeblierung-01.webp',
    images: [
      '/images/leistungen/moeblierung-01.webp',
      '/images/leistungen/moeblierung-02.webp',
      '/images/leistungen/empathie-05-wide.webp',
    ],
  },
  {
    id: 8,
    slug: 'bad-vilbel',
    name: 'Bad Vilbel',
    description: 'Umbau und Einrichtung eines freistehenden Einfamilienhauses. Besonderes Merkmal ist die maßgefertigte Wohnwand im Erdgeschoss, die Stauraum, TV-Einheit und Kamin zu einer skulpturalen Einheit verbindet.',
    coverImage: '/images/leistungen/moeblierung-02.webp',
    images: [
      '/images/leistungen/moeblierung-02.webp',
      '/images/leistungen/moeblierung-01.webp',
      '/images/leistungen/innen-03-portrait.webp',
    ],
  },
  {
    id: 9,
    slug: 'hanauer-landstrasse',
    name: 'Hanauer Landstraße',
    description: 'Loft-Umgestaltung auf der Hanauer Landstraße — Rohheit und Raffinesse treffen aufeinander. Sichtbeton, handgemachte Keramik und hochwertiges Parkett bilden eine spannungsvolle Einheit.',
    coverImage: '/images/leistungen/projekt-17-portrait.webp',
    images: [
      '/images/leistungen/projekt-17-portrait.webp',
      '/images/leistungen/innen-07-wide.webp',
      '/images/leistungen/handwerk-09-portrait.webp',
    ],
  },
  {
    id: 10,
    slug: 'moerfelderlandstrasse',
    name: 'Mörfelder Landstraße',
    description: 'Penthouse-Apartment mit Dachterrasse. Die Innenarchitektur greift die Großzügigkeit des Außenraums auf — raumhohe Verglasungen, helle Materialien und ein offenes Raumkonzept lassen Innen und Außen verschmelzen.',
    coverImage: '/images/leistungen/projekt-pb-01.webp',
    images: [
      '/images/leistungen/projekt-pb-01.webp',
      '/images/leistungen/projekt-17-portrait.webp',
      '/images/leistungen/empathie-05-wide.webp',
    ],
  },
  {
    id: 11,
    slug: 'grueneburg',
    name: 'Grüneburg',
    description: 'Klassische Altbauwohnung im Grüneburgpark-Viertel, neu interpretiert. Die Restaurierung historischer Elemente wurde ergänzt durch zeitgenössische Küche und Bäder — ein Dialog zwischen Tradition und Gegenwart.',
    coverImage: '/images/leistungen/projekt-08-wide.webp',
    images: [
      '/images/leistungen/projekt-08-wide.webp',
      '/images/leistungen/partner-02-stein.webp',
      '/images/leistungen/handwerk-16-wide.webp',
    ],
  },
  {
    id: 12,
    slug: 'konstablerwache',
    name: 'Konstablerwache',
    description: 'Innenstadtapartment in zentralster Lage — kompaktes Volumen, maximale Wirkung. Spiegel, helle Oberflächen und clevere Einbauten lassen die Räume größer wirken, ohne an Charakter zu verlieren.',
    coverImage: '/images/leistungen/empathie-01-portrait.webp',
    images: [
      '/images/leistungen/empathie-01-portrait.webp',
      '/images/leistungen/moeblierung-01.webp',
      '/images/leistungen/partner-04-metall.webp',
    ],
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
