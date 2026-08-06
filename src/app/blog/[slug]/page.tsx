import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeistungenNav from '../../leistungen/LeistungenNav';
import SiteFooter from '@/components/SiteFooter';
import { posts, getPostBySlug, formatDate } from '../data';
import { SITE_URL, SITE_NAME } from '@/lib/site';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Blog – Studio Fyrnys' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [post.coverImage],
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          image: `${SITE_URL}${post.coverImage}`,
          articleSection: post.category,
          inLanguage: 'de-DE',
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${slug}` },
          author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/fyrnys-logo-new.png` },
          },
        }) }}
      />
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
            {post.body.map((block, i) =>
              block.type === 'h2' ? (
                <h2 key={i} style={{ marginTop: i === 0 ? 0 : '2em' }}>{block.text}</h2>
              ) : (
                <p key={i}>{block.text}</p>
              )
            )}
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

      <SiteFooter />
    </div>
  );
}
