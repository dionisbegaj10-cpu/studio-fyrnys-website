import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Erzählen Sie uns von Ihrem Projekt. Studio Fyrnys – Innenarchitektur und Schreinerei für private und gewerbliche Räume in Frankfurt.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children;
}
