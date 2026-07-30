import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Einstellungen – Studio Fyrnys',
  robots: { index: false, follow: false },
};

export default function EinstellungenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
