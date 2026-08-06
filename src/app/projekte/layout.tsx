import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projekte',
  description:
    'Ausgewählte Projekte von Studio Fyrnys: Wohnungen, Häuser, Praxen und Gewerbeflächen in Frankfurt und Umgebung – von der Planung bis zur Ausführung.',
  alternates: { canonical: '/projekte' },
};

export default function ProjekteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
