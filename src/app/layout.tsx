import type { Metadata, Viewport } from 'next';
import {
  Fraunces,
  Playfair_Display,
  Libre_Baskerville,
  Bodoni_Moda,
  Cormorant_Garamond,
  Space_Grotesk,
  Caveat,
  DM_Serif_Display,
} from 'next/font/google';
import './globals.css';
import TypographySettings from '@/components/TypographySettings';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
});

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-bodoni',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7f6f0',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://studio-fyrnys-website.vercel.app'),
  title: 'Studio Fyrnys',
  description: 'Studio Fyrnys – Interior Design',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Studio Fyrnys',
    description: 'Studio Fyrnys – Interior Design',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Fyrnys',
    description: 'Studio Fyrnys – Interior Design',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${playfair.variable} ${libreBaskerville.variable} ${bodoniModa.variable} ${cormorant.variable} ${spaceGrotesk.variable} ${caveat.variable} ${dmSerifDisplay.variable}`}>
      <body>
        <TypographySettings />
        {children}
      </body>
    </html>
  );
}
