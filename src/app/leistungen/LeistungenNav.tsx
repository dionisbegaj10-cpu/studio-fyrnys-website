import Link from 'next/link';

const navLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function LeistungenNav() {
  return (
    <>
      {/* Desktop white bar */}
      <header className="nav-desktop-default" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: '#f7f6f0',
        height: '54px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 60px',
      }}>
        <Link href="/" style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '16px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none', flex: 1 }}>
          Studio Fyrnys
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          {navLinks.map((link, i) => (
            <span key={link.href} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && <span style={{ color: '#c0c0c0', fontSize: '11px', margin: '0 18px' }}>|</span>}
              <Link href={link.href} style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none' }}>
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </header>

      {/* Mobile bar */}
      <header className="nav-mobile-default" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: '#f7f6f0',
        height: '54px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
      }}>
        <Link href="/" style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '15px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none' }}>
          Studio Fyrnys
        </Link>
        {/* Real navigation (plain <a>, no client routing): the menu page paints
            itself green before its first frame, which is the only point at
            which iOS Safari decides its bar tint. */}
        <a href="/menu" style={{ display: 'flex', alignItems: 'center', color: '#1a1a1a', padding: 0 }} aria-label="Menü öffnen">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16" width="20" height="20">
            <path fill="currentColor" d="M1 .5a.5.5 0 1 0 0 1h15.71a.5.5 0 0 0 0-1zM.5 8a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8m0 7a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"/>
          </svg>
        </a>
      </header>

      {/* Spacer so page content clears the fixed nav */}
      <div style={{ height: '54px' }} />
    </>
  );
}
