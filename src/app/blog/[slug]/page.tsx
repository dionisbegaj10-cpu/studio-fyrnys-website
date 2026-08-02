import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeistungenNav from '../../leistungen/LeistungenNav';
import { posts, getPostBySlug, formatDate } from '../data';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Blog – Studio Fyrnys' };
  return {
    title: `${post.title} – Studio Fyrnys`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.coverImage] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === slug);
  const next = idx < posts.length - 1 ? posts[idx + 1] : null;

  return (
    <div style={{ backgroundColor: '#f7f6f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '0 16px' }}>
      <LeistungenNav />

      {/* Title */}
      <div style={{ padding: '48px 0 24px' }}>
        <div className="lg-container">
          <div style={{ width: '100%', height: '1px', backgroundColor: '#d8d3c9', marginBottom: '24px' }} />
          <p style={{
            fontFamily: "'TT Norms Pro', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#9b9690',
            margin: '0 0 12px',
          }}>
            {formatDate(post.date)}&nbsp;&nbsp;|&nbsp;&nbsp;{post.category}&nbsp;&nbsp;|&nbsp;&nbsp;{post.readingTime}
          </p>
          <h1 style={{
            fontFamily: 'var(--font-halis)',
            fontSize: 'calc(clamp(28px, 4vw, 42px) * var(--headline-scale))',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#2d2926',
            margin: 0,
            maxWidth: '900px',
          }}>
            {post.title}
          </h1>
        </div>
      </div>

      {/* Cover */}
      <div className="lg-container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.coverImage}
          alt={post.title}
          style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Body */}
      <main style={{ flex: 1, padding: '40px 0 72px' }}>
        <div className="lg-container">
          <div className="richtext-block desktop-readable">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginTop: '48px', flexWrap: 'wrap' }}>
            <Link href="/blog" style={{
              fontFamily: "'TT Norms Pro', sans-serif",
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#2d2926',
              textDecoration: 'none',
            }}>
              ← Alle Beiträge
            </Link>
            {next && (
              <Link href={`/blog/${next.slug}`} style={{
                fontFamily: "'TT Norms Pro', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#2d2926',
                textDecoration: 'none',
              }}>
                Weiter →
              </Link>
            )}
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
    </div>
  );
}
