import { notFound } from 'next/navigation';
import Link from 'next/link';
import LeistungenNav from '../../leistungen/LeistungenNav';
import SiteFooter from '@/components/SiteFooter';
import { projects, getProjectBySlug, getAdjacentProjects } from '../data';
import ProjectGallery from './ProjectGallery';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div style={{ backgroundColor: '#f7f6f0', minHeight: '100vh', padding: '0 16px', overflowX: 'hidden' }}>
      <LeistungenNav />

      {/* Title + description block — cream colored frame like nateberkus.com */}
      <div style={{ backgroundColor: '#f7f6f0', padding: '48px 0 24px' }}>
        <div className="lg-container">
          <div style={{ width: '100%', height: '1px', backgroundColor: '#d8d3c9', marginBottom: '24px' }} />
          <h1 style={{
            fontFamily: 'var(--font-halis)',
            fontSize: 'calc(clamp(32px, 9vw, 48px) * var(--headline-scale))',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#2d2926',
            margin: '0 0 24px 0',
            lineHeight: 1.1,
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
            hyphens: 'auto',
          }}>
            {project.name}
          </h1>

          {project.description && (
            <p className="pg-description" style={{
              fontFamily: "'TT Norms Pro', sans-serif",
              fontSize: 'calc(15px * var(--body-scale))',
              lineHeight: 1.75,
              color: '#666',
              margin: '0 0 24px 0',
              maxWidth: '560px',
            }}>
              {project.description}
            </p>
          )}

          <div style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '12px', color: '#999', lineHeight: 2 }}>
            <p style={{ margin: 0 }}>{project.photographer ? `Fotograf: ${project.photographer}` : 'Studio: Fyrnys GmbH'}</p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      {project.images.length > 0 && (
        <div className="lg-container">
          <ProjectGallery images={project.images} />
        </div>
      )}

      {/* PREVIOUS / NEXT — below gallery */}
      <div className="lg-container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        marginBottom: '20px',
        backgroundColor: '#f7f6f0',
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
            ← Zurück
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
            Weiter →
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

      <SiteFooter />
    </div>
  );
}
