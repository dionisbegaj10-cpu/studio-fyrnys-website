import type { Metadata } from 'next';
import Link from 'next/link';
import LeistungenNav from '../leistungen/LeistungenNav';
import { posts, formatDate } from './data';

export const metadata: Metadata = {
  title: 'Blog – Studio Fyrnys',
  description: 'Gedanken zu Innenarchitektur, Material und Handwerk aus dem Studio Fyrnys.',
};

const metaStyle: React.CSSProperties = {
  fontFamily: "'TT Norms Pro', sans-serif",
  fontSize: '11px',
  fontWeight: 400,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#9b9690',
  margin: 0,
};

export default function BlogPage() {
  return (
    <div style={{ backgroundColor: '#f7f6f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '0 16px' }}>
      <LeistungenNav />

      {/* Intro */}
      <div style={{ padding: '48px 0 0' }}>
        <div className="lg-container">
          <div style={{ width: '100%', height: '1px', backgroundColor: '#d8d3c9', marginBottom: '24px' }} />
          <h1 style={{
            fontFamily: 'var(--font-halis)',
            fontSize: 'calc(clamp(24px, 4vw, 42px) * var(--headline-scale))',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#2d2926',
            margin: 0,
          }}>
            Blog
          </h1>
          <p style={{
            fontFamily: "'TT Norms Pro', sans-serif",
            fontSize: 'calc(15px * var(--body-scale))',
            lineHeight: 1.7,
            color: '#333',
            margin: '20px 0 0',
            maxWidth: '680px',
          }}>
            Gedanken aus dem Studio: zu Material und Licht, zur Zusammenarbeit mit dem Handwerk
            und zu den Entscheidungen, die einen Raum am Ende ruhig wirken lassen.
          </p>
        </div>
      </div>

      {/* Posts */}
      <main style={{ flex: 1, padding: '56px 0 80px' }}>
        <div className="lg-container">
          <div
            className="blog-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '32px', rowGap: '56px' }}
          >
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    style={{
                      width: '100%',
                      aspectRatio: '3 / 2',
                      objectFit: 'cover',
                      display: 'block',
                      marginBottom: '20px',
                    }}
                  />
                  <p style={metaStyle}>
                    {formatDate(post.date)}&nbsp;&nbsp;|&nbsp;&nbsp;{post.category}&nbsp;&nbsp;|&nbsp;&nbsp;{post.readingTime}
                  </p>
                  <h2 style={{
                    fontFamily: 'var(--font-halis)',
                    fontSize: 'calc(clamp(20px, 2.2vw, 26px) * var(--headline-scale))',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: '#2d2926',
                    margin: '10px 0 0',
                  }}>
                    {post.title}
                  </h2>
                  <p style={{
                    fontFamily: "'TT Norms Pro', sans-serif",
                    fontSize: 'calc(14px * var(--body-scale))',
                    lineHeight: 1.75,
                    color: '#666',
                    margin: '12px 0 0',
                  }}>
                    {post.excerpt}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    marginTop: '16px',
                    fontFamily: "'TT Norms Pro', sans-serif",
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#2d2926',
                    borderBottom: '1px solid #2d2926',
                    paddingBottom: '3px',
                  }}>
                    Weiterlesen
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer style={{ padding: '20px 0', backgroundColor: '#f7f6f0' }}>
        <div className="lg-container">
          <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0 }}>
            <Link href="/impressum" style={{ color: 'inherit', textDecoration: 'none' }}>Impressum</Link>&nbsp;&nbsp;|&nbsp;&nbsp;<Link href="/datenschutz" style={{ color: 'inherit', textDecoration: 'none' }}>Datenschutz</Link>&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 700px) {
          .blog-grid { grid-template-columns: 1fr !important; row-gap: 44px !important; }
        }
      `}</style>
    </div>
  );
}
