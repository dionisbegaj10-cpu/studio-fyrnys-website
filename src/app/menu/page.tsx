import type { Metadata, Viewport } from 'next';
import BackButton from './BackButton';

export const metadata: Metadata = {
  title: 'Menü – Studio Fyrnys',
  robots: { index: false },
};

// Green from the very first frame: Safari decides its bar tint at page load.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#61695e',
};

const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Instagram', href: 'https://www.instagram.com/studio_fyrnys/', external: true },
];

const linkStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '140px',
  fontFamily: "'TT Norms Pro', sans-serif",
  fontSize: '14px',
  // Same weight and tracking as the site's nav links (LeistungenNav),
  // so the menu reads as part of the same typographic system.
  fontWeight: 400,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#ffffff',
  textDecoration: 'none',
  borderBottom: '1px solid #ffffff',
  paddingBottom: '4px',
};

export default function MenuPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#61695e', display: 'flex', flexDirection: 'column' }}>
      {/* Paint html/body green before the first frame so Safari's bars load green */}
      <style>{`html, body { background-color: #61695e !important; }`}</style>
      <div style={{ height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', flexShrink: 0 }}>
        <a href="/" style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none' }}>
          Studio Fyrnys
        </a>
        <BackButton />
      </div>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#ffffff', flexShrink: 0 }} />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px 20px 0' }}>
        {navLinks.map(link =>
          link.external ? (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              {link.label}
            </a>
          ) : (
            <a key={link.href} href={link.href} style={linkStyle}>
              {link.label}
            </a>
          )
        )}
      </nav>
    </div>
  );
}
