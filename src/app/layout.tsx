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
import { SITE_URL, SITE_NAME, BUSINESS } from '@/lib/site';

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

/**
 * Adobe Fonts (Typekit) web project ID for IvyOra Display.
 *
 * IvyOra is licensed, not free — it may only be served from Adobe's CDN, so it
 * cannot be self-hosted like the Google fonts above. Create a web project at
 * fonts.adobe.com containing IvyOra Display Bold, then paste its kit ID here
 * (the "xxxxxxx" in https://use.typekit.net/xxxxxxx.css).
 *
 * Until it is set, headings fall back to Fraunces via --font-halis.
 */
const ADOBE_FONTS_KIT_ID = 'jrk4jxq';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7f6f0',
};

const DEFAULT_TITLE = 'Studio Fyrnys – Innenarchitektur & Interior Design Frankfurt';
const DEFAULT_DESCRIPTION =
  'Studio Fyrnys plant private und gewerbliche Räume in Frankfurt – Innenarchitektur, ' +
  'maßgefertigte Einbauten aus eigener Manufaktur und ausgewählte Möblierung aus einer Hand.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    // Pages set their own title; this appends the brand consistently.
    template: '%s – Studio Fyrnys',
  },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'de_DE',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/images/og-image.jpg'],
  },
};

/** Local business schema – lets Google associate the studio with Frankfurt. */
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InteriorDesignBusiness',
  name: SITE_NAME,
  legalName: BUSINESS.legalName,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/og-image.jpg`,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.street,
    postalCode: BUSINESS.postalCode,
    addressLocality: BUSINESS.city,
    addressCountry: BUSINESS.country,
  },
  areaServed: [BUSINESS.studioCity, 'Rhein-Main', 'Deutschland'],
  sameAs: ['https://www.instagram.com/studio_fyrnys/'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${playfair.variable} ${libreBaskerville.variable} ${bodoniModa.variable} ${cormorant.variable} ${spaceGrotesk.variable} ${caveat.variable} ${dmSerifDisplay.variable}`}>
      {ADOBE_FONTS_KIT_ID && (
        <head>
          <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
          <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
          <link rel="stylesheet" href={`https://use.typekit.net/${ADOBE_FONTS_KIT_ID}.css`} />
        </head>
      )}
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <TypographySettings />
        {children}
      </body>
    </html>
  );
}
