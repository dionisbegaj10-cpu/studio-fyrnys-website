export interface Post {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  category: string;
  excerpt: string;
  coverImage: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: 'material-und-licht',
    title: 'Material und Licht',
    date: '2026-06-18',
    readingTime: '4 Min.',
    category: 'Gestaltung',
    excerpt:
      'Wie ein Material wirkt, entscheidet sich selten am Muster selbst, sondern am Licht, das darauf fällt. Über die Auswahl von Oberflächen im Tagesverlauf.',
    coverImage: '/images/projekte/bimberg/img-03.webp',
    body: [
      'Ein Material lässt sich schwer beurteilen, solange es nur als Muster auf dem Tisch liegt. Erst im Raum, im Licht des jeweiligen Ortes, zeigt sich, wie eine Oberfläche tatsächlich wirkt. Ein warmer Eichenton kann im Norden kühl erscheinen, während derselbe Ton in einem südlich orientierten Raum deutlich weicher wird.',
      'Deshalb prüfen wir Materialien immer dort, wo sie später eingebaut werden. Wir hängen Muster über mehrere Tage auf, betrachten sie morgens und am späten Nachmittag und beobachten, wie sie sich unter Kunstlicht verändern. Diese Zeit ist gut investiert, denn eine Entscheidung, die im Raum getroffen wurde, trägt später das gesamte Konzept.',
      'Ähnlich verhält es sich mit Kontrasten. Zwei Materialien, die nebeneinander liegen, verstärken oder beruhigen sich gegenseitig. Ein grob strukturierter Putz lässt eine glatte Steinfläche präziser wirken. Ein mattes Holz nimmt einer glänzenden Armatur die Härte. Solche Beziehungen entstehen nicht zufällig, sie werden geplant.',
      'Am Ende geht es nicht darum, möglichst viele Materialien zu kombinieren, sondern wenige so aufeinander abzustimmen, dass sie über Jahre zusammen bestehen können.',
    ],
  },
  {
    slug: 'vom-entwurf-zur-ausfuehrung',
    title: 'Vom Entwurf zur Ausführung',
    date: '2026-05-07',
    readingTime: '5 Min.',
    category: 'Prozess',
    excerpt:
      'Zwischen der ersten Skizze und dem fertigen Raum liegen viele Entscheidungen. Ein Blick darauf, wie ein Konzept seine Genauigkeit behält.',
    coverImage: '/images/projekte/strenge/img-02.webp',
    body: [
      'Ein Entwurf ist zunächst eine Absicht. Er beschreibt, wie ein Raum wirken und wie er genutzt werden soll. Damit diese Absicht bis zur Fertigstellung erhalten bleibt, braucht es eine saubere Übersetzung in Pläne, Details und Materialangaben.',
      'Wir arbeiten deshalb früh mit den ausführenden Gewerken zusammen. Wenn Schreinerei, Elektroplanung und Bauleitung dieselbe Grundlage haben, lassen sich viele Fragen klären, bevor sie auf der Baustelle entstehen. Das spart nicht nur Zeit, es schützt vor allem die gestalterische Linie.',
      'Besonders sichtbar wird das an den Übergängen: dort, wo ein Einbaumöbel auf eine Wand trifft, wo ein Bodenbelag wechselt, wo eine Fuge sitzt. Diese Punkte sind im Entwurf schnell gezeichnet und in der Ausführung anspruchsvoll. Wer sie früh festlegt, muss später nicht improvisieren.',
      'Gute Ausführung fällt selten auf. Sie zeigt sich darin, dass ein Raum ruhig wirkt und nichts erklärt werden muss.',
    ],
  },
  {
    slug: 'raeume-die-mitwachsen',
    title: 'Räume, die mitwachsen',
    date: '2026-03-24',
    readingTime: '3 Min.',
    category: 'Wohnen',
    excerpt:
      'Wohnungen verändern sich mit den Menschen, die darin leben. Wie sich Grundrisse planen lassen, die spätere Anpassungen zulassen.',
    coverImage: '/images/projekte/christophersen/img-05.webp',
    body: [
      'Ein Zuhause bleibt selten über Jahre unverändert. Kinder kommen dazu, Arbeitsweisen ändern sich, aus einem Gästezimmer wird ein Büro. Eine Planung, die das von Anfang an mitdenkt, erspart später größere Eingriffe.',
      'In der Praxis heißt das oft, weniger festzulegen als möglich wäre. Ein durchdachter Stauraum, ausreichend Anschlüsse an der richtigen Stelle und Räume mit klaren Proportionen lassen sich unterschiedlich nutzen, ohne dass die Gestaltung leidet.',
      'Gleichzeitig lohnt es sich, an den richtigen Stellen sehr präzise zu werden. Maßgefertigte Einbauten, die exakt auf eine Nische zugeschnitten sind, schaffen Ordnung und geben einem Raum seine Ruhe. Flexibilität und Genauigkeit schließen sich nicht aus, sie brauchen nur eine klare Aufteilung.',
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
