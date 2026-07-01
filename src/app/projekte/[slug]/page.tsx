import { notFound } from 'next/navigation';
import Link from 'next/link';
import LeistungenNav from '../../leistungen/LeistungenNav';
import { projects, getProjectBySlug, getAdjacentProjects } from '../data';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '0 16px' }}>
      <LeistungenNav />

      {/* Title + description block — cream colored frame like nateberkus.com */}
      <div style={{ backgroundColor: '#f7f6f0' }}>
        <div style={{ padding: '48px 24px 24px' }}>
          <h1 style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(36px, 10vw, 64px)',
            fontWeight: 400,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#2d2926',
            margin: '0 0 24px 0',
            lineHeight: 1.1,
          }}>
            {project.name}
          </h1>

          <p style={{
            fontFamily: "'TT Norms Pro', sans-serif",
            fontSize: '15px',
            lineHeight: 1.75,
            color: '#666',
            margin: '0 0 24px 0',
            maxWidth: '560px',
          }}>
            {project.description}
          </p>

          <div style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '12px', color: '#999', lineHeight: 2 }}>
            <p style={{ margin: 0 }}>Ort: Frankfurt am Main</p>
            <p style={{ margin: 0 }}>Studio: Studio Fyrnys</p>
          </div>
        </div>
      </div>

      {/* PREVIOUS / NEXT — white gap above gallery */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 24px',
        backgroundColor: '#ffffff',
      }}>
        {prev ? (
          <Link href={`/projekte/${prev.slug}`} style={{
            fontFamily: "'TT Norms Pro', sans-serif",
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#2d2926',
            textDecoration: 'none',
          }}>
            ← Previous
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/projekte/${next.slug}`} style={{
            fontFamily: "'TT Norms Pro', sans-serif",
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#2d2926',
            textDecoration: 'none',
          }}>
            Next →
          </Link>
        ) : <span />}
      </div>

      {/* Gallery */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {project.images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
          />
        ))}
      </div>

      {/* Bottom prev/next */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 24px',
        borderTop: '1px solid #e8e8e8',
      }}>
        {prev ? (
          <Link href={`/projekte/${prev.slug}`} style={{
            fontFamily: "'TT Norms Pro', sans-serif",
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#2d2926',
            textDecoration: 'none',
          }}>
            ← {prev.name}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/projekte/${next.slug}`} style={{
            fontFamily: "'TT Norms Pro', sans-serif",
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#2d2926',
            textDecoration: 'none',
          }}>
            {next.name} →
          </Link>
        ) : <span />}
      </div>

      {/* Back to all projects */}
      <div style={{ padding: '8px 24px 40px', textAlign: 'center' }}>
        <Link href="/projekte" style={{
          fontFamily: "'TT Norms Pro', sans-serif",
          fontSize: '11px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#999',
          textDecoration: 'none',
        }}>
          ← Alle Projekte
        </Link>
      </div>

      <footer style={{ margin: '0 -16px', padding: '20px 20px', backgroundColor: '#ffffff' }}>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0 }}>
          Impressum&nbsp;&nbsp;|&nbsp;&nbsp;Datenschutz&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
        </p>
      </footer>
    </div>
  );
}
