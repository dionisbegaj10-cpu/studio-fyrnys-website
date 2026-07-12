'use client';

import { useState } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#' },
  { label: 'Interiors', href: '#' },
  { label: 'Selected Press', href: '#' },
  { label: 'Work With Us', href: '#' },
];

const FIELDS: Array<{ name: string; label: string; type: 'text' | 'textarea'; full?: boolean }> = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
  { name: 'phone', label: 'Phone', type: 'text' },
  { name: 'email', label: 'Email', type: 'text' },
  { name: 'address', label: 'Project Address', type: 'text', full: true },
  { name: 'scope', label: 'General Scope of Work', type: 'textarea', full: true },
  { name: 'budgetFurniture', label: 'Estimated Budget for Furniture & Decoration', type: 'text' },
  { name: 'budgetConstruction', label: 'Estimated Budget for Construction & Renovations', type: 'text' },
  { name: 'startDate', label: 'Anticipated Start Date', type: 'text', full: true },
];

export default function KontaktPage() {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 30px',
          flexWrap: 'wrap',
          gap: '16px',
          borderBottom: '1px solid transparent',
        }}
      >
        <a href="/" aria-label="Nate Berkus Associates">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nate-berkus/logo.svg" alt="Nate Berkus Associates" style={{ height: '22px', width: 'auto', display: 'block' }} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          {NAV_LINKS.map((link, i) => (
            <span key={link.label} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && <span style={{ color: 'rgba(45,41,38,0.4)', fontSize: '13px', margin: '0 16px' }}>|</span>}
              <a
                href={link.href}
                style={{
                  fontFamily: "'Gotham', 'Avenir Next', Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  letterSpacing: '0.6px',
                  color: 'rgb(45, 41, 38)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>
      </header>

      {/* Form */}
      <main style={{ flex: 1, padding: '48px 30px 64px', display: 'flex', justifyContent: 'center' }}>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ width: '100%', maxWidth: '1200px' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              columnGap: '48px',
            }}
            className="nb-contact-grid"
          >
            {FIELDS.map((field) => (
              <div
                key={field.name}
                style={{
                  gridColumn: field.full ? '1 / -1' : 'auto',
                  marginBottom: '20px',
                }}
              >
                <label
                  htmlFor={field.name}
                  style={{
                    display: 'block',
                    fontFamily: "'Assistant', Arial, sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#000000',
                    marginBottom: '4px',
                  }}
                >
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    value={values[field.name] || ''}
                    onChange={handleChange(field.name)}
                    rows={3}
                    style={{
                      width: '100%',
                      fontFamily: "'Avenir Next', Arial, sans-serif",
                      fontSize: '13px',
                      color: '#000000',
                      border: 'none',
                      borderBottom: '1px solid rgb(45, 41, 38)',
                      outline: 'none',
                      padding: '19.5px 13px 8px 0',
                      resize: 'vertical',
                      background: 'transparent',
                    }}
                  />
                ) : (
                  <input
                    id={field.name}
                    type="text"
                    value={values[field.name] || ''}
                    onChange={handleChange(field.name)}
                    style={{
                      width: '100%',
                      fontFamily: "'Avenir Next', Arial, sans-serif",
                      fontSize: '13px',
                      color: '#000000',
                      border: 'none',
                      borderBottom: '1px solid rgb(45, 41, 38)',
                      outline: 'none',
                      padding: '19.5px 13px 8px 0',
                      background: 'transparent',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <button
            type="submit"
            style={{
              marginTop: '32px',
              backgroundColor: '#000000',
              color: '#ffffff',
              fontFamily: "'Avenir Next', Arial, sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              letterSpacing: '2.1px',
              textTransform: 'uppercase',
              border: 'none',
              padding: '17.5px 47.5px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 30px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <p style={{ fontFamily: "'Avenir Next', Arial, sans-serif", fontSize: '12px', color: 'rgba(18,18,18,0.75)' }}>
          Careers&nbsp;|&nbsp;Terms of Service
        </p>
        <p style={{ fontFamily: "'Avenir Next', Arial, sans-serif", fontSize: '12px', color: 'rgba(18,18,18,0.75)' }}>
          © All Rights Reserved {new Date().getFullYear()}. Nate Berkus | KWIN Made
        </p>
      </footer>

      <style>{`
        @media (max-width: 700px) {
          .nb-contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
