import Link from 'next/link';

/**
 * The single footer used on every page.
 *
 * Expects to sit inside a wrapper with the standard 16px page gutter; the
 * inner .lg-container then lands on the same left edge as the rest of the
 * site (78.4px on desktop at 1280, 32px on mobile). Pages whose wrapper is
 * full-bleed wrap this in their own 16px gutter.
 */
export default function SiteFooter() {
  return (
    <footer style={{ padding: '20px 0', backgroundColor: '#f7f6f0' }}>
      <div className="lg-container">
        <p style={{
          fontFamily: "'TT Norms Pro', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.12em',
          color: '#9b9690',
          margin: 0,
        }}>
          <Link href="/impressum" style={{ color: 'inherit', textDecoration: 'none' }}>Impressum</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="/datenschutz" style={{ color: 'inherit', textDecoration: 'none' }}>Datenschutz</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
        </p>
      </div>
    </footer>
  );
}
