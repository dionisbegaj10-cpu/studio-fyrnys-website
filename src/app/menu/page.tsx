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
  // Width is intrinsic now that there is no underline to size.
  display: 'inline-block',
  alignSelf: 'flex-start',
  // Same face and treatment as the section titles (Leistungen, Interior
  // Design, Blog): the --font-halis stack, bold, capitals.
  fontFamily: 'var(--font-halis)',
  fontSize: '30px',
  fontWeight: 700,
  letterSpacing: 'normal',
  textTransform: 'uppercase',
  lineHeight: 1.2,
  color: '#ffffff',
  textDecoration: 'none',
};

export default function MenuPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#61695e', display: 'flex', flexDirection: 'column' }}>
      {/* Paint html/body green before the first frame so Safari's bars load green */}
      <style>{`html, body { background-color: #61695e !important; }`}</style>
      <div style={{ height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', flexShrink: 0 }}>
        {/* Same treatment as the wordmark in the main nav (LeistungenNav);
            only the colour differs, for the green background. */}
        <a href="/" style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '18px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none', lineHeight: 1 }}>
          Studio Fyrnys
        </a>
        <BackButton />
      </div>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#ffffff', flexShrink: 0 }} />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '72px 20px 0' }}>
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
