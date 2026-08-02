export type Block = { type: 'h2' | 'p'; text: string };

export interface Post {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  category: string;
  excerpt: string;
  coverImage: string;
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: 'licht-planen-farbtemperatur-und-farbwiedergabe',
    title: 'Licht planen: Farbtemperatur und Farbwiedergabe',
    date: '2026-06-18',
    readingTime: '5 Min.',
    category: 'Lichtplanung',
    excerpt:
      'Warum zwei Leuchten mit gleicher Wattzahl völlig unterschiedlich wirken können – und worauf es bei Kelvin, Ra-Wert und Dimmung wirklich ankommt.',
    coverImage: '/images/projekte/bimberg/img-03.webp',
    body: [
      {
        type: 'p',
        text: 'Licht ist das Material, das am seltensten geplant und am häufigsten unterschätzt wird. Ein sorgfältig ausgesuchter Eichenboden, ein handgefertigtes Einbaumöbel, ein Naturstein mit ruhiger Zeichnung: Wie all das am Ende wirkt, entscheidet das Licht, das darauf fällt. Zwei Leuchten mit identischer Leistungsaufnahme können denselben Raum vollkommen unterschiedlich erscheinen lassen.',
      },
      { type: 'h2', text: 'Farbtemperatur: die Kelvin-Skala' },
      {
        type: 'p',
        text: 'Die Farbtemperatur wird in Kelvin angegeben und beschreibt, ob ein Licht warm oder kühl wirkt. Niedrige Werte um 2700 K erzeugen ein warmes, gelbliches Licht, wie man es von der klassischen Glühlampe kennt. Um 4000 K spricht man von Neutralweiß, ab etwa 5000 bis 6500 K von Tageslichtweiß mit deutlich kühlerem, bläulicherem Charakter.',
      },
      {
        type: 'p',
        text: 'Für Wohnräume arbeiten wir fast durchgängig mit 2700 K. Das Licht bleibt damit ruhig und nimmt Holz- und Textiloberflächen ihre Härte. In Arbeitsbereichen, Ankleiden oder an Schminkplätzen kann ein neutraleres Licht um 3000 bis 4000 K sinnvoll sein, weil Farben dort präziser beurteilt werden müssen. Entscheidend ist weniger der exakte Wert als die Konsequenz: Unterschiedliche Farbtemperaturen im selben Blickfeld wirken fast immer unruhig.',
      },
      { type: 'h2', text: 'Farbwiedergabe: der unterschätzte Ra-Wert' },
      {
        type: 'p',
        text: 'Neben der Farbtemperatur entscheidet die Farbwiedergabe darüber, wie ein Raum wirkt. Sie wird als Farbwiedergabeindex angegeben, meist als Ra- oder CRI-Wert auf einer Skala bis 100. Der Wert beschreibt, wie natürlich Farben unter einer Lichtquelle erscheinen – gemessen an einem Referenzlicht.',
      },
      {
        type: 'p',
        text: 'Günstige LED-Leuchtmittel liegen oft bei Ra 80. Das genügt für einen Kellerflur, nicht aber für einen Raum, in dem Materialien wirken sollen. Unter schlechter Farbwiedergabe verlieren gerade warme, gebrochene Töne an Tiefe: Ein nussbaumfarbenes Furnier wirkt flach, ein sattes Grün stumpf, Hauttöne fahl. Wir spezifizieren deshalb Ra 90 oder höher, in Bereichen mit textilen Oberflächen und Kunst eher Ra 95.',
      },
      { type: 'h2', text: 'Licht in Schichten denken' },
      {
        type: 'p',
        text: 'Eine einzelne Deckenleuchte kann einen Raum ausleuchten, aber nicht gestalten. In der Planung arbeiten wir deshalb mit mehreren Ebenen: einem Grundlicht, das für gleichmäßige Orientierung sorgt, einem Arbeitslicht dort, wo konkrete Tätigkeiten stattfinden, und einem Akzentlicht, das einzelne Materialien, Nischen oder Objekte hervorhebt.',
      },
      {
        type: 'p',
        text: 'Erst das Zusammenspiel dieser Ebenen erzeugt Tiefe. Ein Raum, in dem alles gleich hell ist, wirkt flach und ermüdend. Werden dagegen einzelne Flächen bewusst dunkler gelassen, gewinnen die beleuchteten Bereiche an Präsenz. Wichtig ist, jede Ebene getrennt schaltbar und möglichst dimmbar zu planen – ein Raum braucht am Vormittag ein anderes Licht als um zehn Uhr abends.',
      },
      { type: 'h2', text: 'Blendung vermeiden' },
      {
        type: 'p',
        text: 'Eine der häufigsten Ursachen für unangenehmes Licht ist direkte Blendung. Sichtbare Leuchtmittel im normalen Blickfeld erzeugen harte Kontraste, an die sich das Auge ständig anpassen muss. Tief eingebaute Spots, entblendete Reflektoren oder indirekt über Wand und Decke geführtes Licht lösen das Problem meist zuverlässiger als ein Wechsel des Leuchtmittels.',
      },
      {
        type: 'p',
        text: 'Ebenso lohnt sich der Blick auf die Dimmung. Eine klassische Glühlampe wird beim Herunterdimmen automatisch wärmer – ein Effekt, den viele als besonders behaglich empfinden. Einfache LEDs behalten ihre Farbtemperatur dagegen bei und wirken gedimmt schnell blass. Leuchtmittel mit sogenannter Dim-to-warm-Funktion bilden dieses Verhalten nach und sind an Stellen, an denen abends gedimmt wird, die deutlich bessere Wahl.',
      },
      { type: 'h2', text: 'Am Ende zählt der Ort' },
      {
        type: 'p',
        text: 'Kein Datenblatt ersetzt die Prüfung im Raum. Wie ein Licht wirkt, hängt vom Tageslichteinfall, von der Raumhöhe, von den Reflexionsgraden der Oberflächen und nicht zuletzt von der Nutzung ab. Ein nach Norden orientierter Raum verträgt wärmeres Licht als ein Raum mit viel Südlicht. Wir arbeiten deshalb mit Bemusterungen vor Ort und prüfen die Wirkung zu verschiedenen Tageszeiten, bevor die Elektroplanung final festgelegt wird.',
      },
    ],
  },
  {
    slug: 'massivholz-furnier-und-die-richtige-oberflaeche',
    title: 'Massivholz, Furnier und die richtige Oberfläche',
    date: '2026-05-07',
    readingTime: '6 Min.',
    category: 'Material',
    excerpt:
      'Holz arbeitet – ein Leben lang. Was das für Fronten, Arbeitsplatten und Einbauten bedeutet und wann Öl die bessere Wahl ist als Lack.',
    coverImage: '/images/projekte/strenge/img-02.webp',
    body: [
      {
        type: 'p',
        text: 'Holz ist kein statischer Werkstoff. Es nimmt Feuchtigkeit aus der Umgebungsluft auf und gibt sie wieder ab, und es verändert dabei sein Volumen. Wer mit Holz plant, plant deshalb immer auch diese Bewegung mit ein. Das ist der wichtigste Unterschied zwischen einem Möbel, das nach zehn Jahren noch schließt, und einem, dessen Fronten sich verziehen.',
      },
      { type: 'h2', text: 'Warum Holz arbeitet' },
      {
        type: 'p',
        text: 'Die Bewegung verläuft nicht gleichmäßig. Entlang der Faser, also in Längsrichtung, ist sie so gering, dass sie praktisch vernachlässigt werden kann. Quer zur Faser dagegen quillt und schwindet Holz deutlich messbar. Eine breite Massivholzplatte kann sich über den Jahresverlauf um einige Millimeter in der Breite verändern, während ihre Länge nahezu konstant bleibt.',
      },
      {
        type: 'p',
        text: 'Entscheidend ist die Ausgleichsfeuchte: Das Holz stellt sich auf das Klima ein, in dem es steht. In beheizten Innenräumen liegt die Holzfeuchte typischerweise im einstelligen Prozentbereich, im Winter bei trockener Heizungsluft niedriger als im feuchteren Sommer. Deshalb wird Holz für Innenausbauten technisch getrocknet und vor der Verarbeitung im Raumklima akklimatisiert. Eine relative Luftfeuchte zwischen etwa 40 und 60 Prozent ist für Holzmöbel wie für die Bewohner gleichermaßen angenehm.',
      },
      { type: 'h2', text: 'Wann Massivholz, wann Furnier' },
      {
        type: 'p',
        text: 'Massivholz ist die richtige Wahl, wo Material erlebbar sein soll und wo Kanten, Profile und Verbindungen sichtbar bleiben: bei Tischplatten, Fronten mit Rahmenkonstruktion, freistehenden Möbeln. Es lässt sich mehrfach überarbeiten und altert sichtbar, aber würdig.',
      },
      {
        type: 'p',
        text: 'Für große, ruhige Flächen ist Furnier dem Massivholz technisch überlegen. Auf einen stabilen Trägerwerkstoff aufgebracht, bleibt eine Front auch bei zwei Metern Höhe eben. Zugleich eröffnet Furnier gestalterische Möglichkeiten, die massiv nicht zu erreichen sind: Aus einem Stamm lassen sich aufeinanderfolgende Blätter spiegeln oder fortlaufend aneinanderfügen, sodass sich die Maserung über mehrere Türen hinweg durchzieht. Wer das plant, muss die Furnierblätter allerdings früh reservieren – ein Stamm ist endlich.',
      },
      {
        type: 'p',
        text: 'Ein verbreitetes Missverständnis: Furnier ist nicht die billigere Variante. Ein sorgfältig ausgesuchtes, gespiegelt verlegtes Furnier ist in der Herstellung aufwendiger als eine schlichte Massivholzfront – und in der Wirkung präziser.',
      },
      { type: 'h2', text: 'Öl oder Lack' },
      {
        type: 'p',
        text: 'Die Oberfläche entscheidet über Haptik, Pflege und Reparierbarkeit. Öle und Hartwachsöle dringen in das Holz ein und lassen die Poren offen. Das Ergebnis fühlt sich warm und natürlich an, die Maserung bleibt spürbar. Beschädigungen lassen sich lokal anschleifen und nachölen, ohne die ganze Fläche zu erneuern. Dafür braucht eine geölte Oberfläche regelmäßige Pflege und ist gegenüber Wasser und Rotwein empfindlicher.',
      },
      {
        type: 'p',
        text: 'Lacke bilden dagegen einen geschlossenen Film auf dem Holz. Sie sind widerstandsfähiger gegen Flecken und Feuchtigkeit und im Alltag pflegeleichter – die naheliegende Wahl für stark beanspruchte Flächen. Der Nachteil zeigt sich bei Schäden: Ein Kratzer im Lack lässt sich selten unsichtbar ausbessern, meist muss das gesamte Bauteil neu beschichtet werden.',
      },
      {
        type: 'p',
        text: 'In der Praxis kombinieren wir beides. Fronten und vertikale Flächen, die vor allem gesehen und selten belastet werden, vertragen eine geölte Oberfläche gut. Arbeitsplatten in der Küche, Waschtischunterschränke und Flächen im Kinderzimmer erhalten häufig eine lackierte oder anderweitig geschlossene Oberfläche.',
      },
      { type: 'h2', text: 'Licht verändert Holz' },
      {
        type: 'p',
        text: 'Nahezu alle Hölzer verändern unter UV-Strahlung ihren Ton. Nussbaum wird über die Jahre heller und ruhiger, Eiche dunkelt leicht nach, Kirschbaum entwickelt eine deutlich wärmere, rötliche Patina. Diese Veränderung ist kein Mangel, sondern Teil des Materials – sie sollte aber eingeplant werden.',
      },
      {
        type: 'p',
        text: 'Praktisch heißt das: Wer ein Bild oder einen Teppich jahrelang an derselben Stelle liegen lässt, wird beim Umräumen einen sichtbaren Abdruck vorfinden. Und wer ein Möbel nachträglich ergänzen will, sollte wissen, dass neues Holz aus demselben Stamm zunächst anders aussieht als das eingelebte Bestandsstück. Bei größeren Projekten legen wir deshalb Reservematerial zurück und lassen es unter denselben Bedingungen mit altern.',
      },
    ],
  },
  {
    slug: 'kuechenplanung-masse-wege-stauraum',
    title: 'Küchenplanung: Maße, Wege, Stauraum',
    date: '2026-03-24',
    readingTime: '5 Min.',
    category: 'Planung',
    excerpt:
      'Eine Küche funktioniert oder sie funktioniert nicht – und das entscheidet sich an wenigen Zentimetern. Über Arbeitshöhen, Gangbreiten und die Ordnung nach Zonen.',
    coverImage: '/images/projekte/christophersen/img-05.webp',
    body: [
      {
        type: 'p',
        text: 'Die Küche ist der Raum, in dem sich Planungsfehler am schnellsten rächen. Ein Schrank, der sich nicht vollständig öffnen lässt, eine Arbeitsplatte auf falscher Höhe, ein Weg, der jedes Mal um die Insel herumführt: Solche Details fallen im Grundriss kaum auf und prägen den Alltag über Jahre.',
      },
      { type: 'h2', text: 'Die Arbeitshöhe ist individuell' },
      {
        type: 'p',
        text: 'Serienküchen werden meist mit einer Arbeitshöhe um 90 bis 95 Zentimeter geplant. Das ist ein Kompromiss, kein Maß. Ergonomisch richtig liegt die Arbeitsfläche etwa 10 bis 15 Zentimeter unterhalb des angewinkelten Ellenbogens – wer schneidet, arbeitet dann mit entspannten Schultern statt mit hochgezogenen.',
      },
      {
        type: 'p',
        text: 'Für die meisten Menschen ergibt sich daraus eine höhere Arbeitsplatte als der Standard. Bei zwei Personen mit deutlich unterschiedlicher Körpergröße lohnt es sich, die Höhen zu staffeln: Die Spüle darf etwas höher liegen als die Kochstelle, weil am Herd zusätzlich die Topfhöhe hinzukommt. Genau hier liegt der Vorteil einer Anfertigung nach Maß – die Höhe wird zur Entscheidung, nicht zur Vorgabe.',
      },
      { type: 'h2', text: 'Wege und Gangbreiten' },
      {
        type: 'p',
        text: 'Zwischen zwei gegenüberliegenden Zeilen sollte der Gang so breit sein, dass sich Schubladen und Geräte vollständig öffnen lassen und man dahinter noch vorbeikommt. In der Praxis bewähren sich rund 120 Zentimeter. Weniger als etwa 90 Zentimeter wird eng, sobald ein Backofen oder eine Spülmaschine geöffnet ist; deutlich mehr als 140 Zentimeter macht die Wege unnötig lang.',
      },
      {
        type: 'p',
        text: 'Hilfreich ist die alte Regel des Arbeitsdreiecks zwischen Kühlschrank, Spüle und Kochstelle. Diese drei Punkte werden am häufigsten hintereinander angesteuert, ihre Verbindung sollte kurz und frei von Hindernissen sein. Kritisch wird es, wenn Durchgangsverkehr durch dieses Dreieck führt – etwa der Weg zur Terrasse quer durch den Kochbereich.',
      },
      { type: 'h2', text: 'Ordnung nach Zonen' },
      {
        type: 'p',
        text: 'Stauraum wird oft in Litern gedacht und selten in Wegen. Sinnvoller ist eine Gliederung nach Zonen: Vorräte, Aufbewahrung von Geschirr, Spülen und Entsorgen, Vorbereiten, Kochen. Jede Zone bekommt den Stauraum, den sie tatsächlich braucht – Gewürze und Öl direkt am Herd, Schneidbretter und Messer an der Vorbereitungsfläche, Müll und Reiniger unter der Spüle.',
      },
      {
        type: 'p',
        text: 'Für Unterschränke sind Auszüge dem klassischen Drehtürschrank fast immer überlegen. Sie machen den gesamten Inhalt bis nach hinten zugänglich, ohne dass man sich bücken und hineingreifen muss. Der Aufpreis für hochwertige Auszüge mit gedämpftem Einzug amortisiert sich im täglichen Gebrauch schnell.',
      },
      { type: 'h2', text: 'Was oft vergessen wird' },
      {
        type: 'p',
        text: 'Drei Punkte tauchen in fast jeder Planung zu spät auf. Erstens die Abluft: Dunstabzug, Leitungsführung und – bei Umluft – die Frage, wo die Filter sitzen und wie sie gewechselt werden. Zweitens Steckdosen. Sie werden regelmäßig unterschätzt; im Bereich der Arbeitsfläche und in einer eventuellen Insel sind eher zu viele als zu wenige richtig.',
      },
      {
        type: 'p',
        text: 'Drittens die Beleuchtung der Arbeitsfläche. Eine Deckenleuchte hinter dem Rücken erzeugt genau dort Schatten, wo geschnitten wird. Licht unter den Oberschränken oder in der Dunstabzugshaube löst das zuverlässig – vorausgesetzt, es ist blendfrei geführt und die Leitung wurde vor dem Verputzen eingeplant.',
      },
      { type: 'h2', text: 'Früh entscheiden, ruhig bauen' },
      {
        type: 'p',
        text: 'Die meisten dieser Punkte kosten in der Planungsphase nichts außer Aufmerksamkeit. Auf der Baustelle nachträglich eine Leitung zu ziehen oder eine Nische zu verändern, ist dagegen aufwendig. Deshalb klären wir Höhen, Wege, Anschlüsse und Zonen, bevor die erste Front bestellt wird – gemeinsam mit den Menschen, die später täglich darin arbeiten.',
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
