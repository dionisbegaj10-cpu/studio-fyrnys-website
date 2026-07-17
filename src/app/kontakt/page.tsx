'use client';

import { useState } from 'react';
import LeistungenNav from '../leistungen/LeistungenNav';

const FIELDS: Array<{ name: string; label: string; type: 'text' | 'textarea'; full?: boolean }> = [
  { name: 'firstName', label: 'Vorname', type: 'text' },
  { name: 'lastName', label: 'Nachname', type: 'text' },
  { name: 'phone', label: 'Telefon', type: 'text' },
  { name: 'email', label: 'E-Mail', type: 'text' },
  { name: 'address', label: 'Projektadresse', type: 'text', full: true },
  { name: 'scope', label: 'Allgemeiner Leistungsumfang', type: 'textarea', full: true },
  { name: 'budgetFurniture', label: 'Geschätztes Budget für Möbel & Dekoration', type: 'text' },
  { name: 'budgetConstruction', label: 'Geschätztes Budget für Bau & Renovierung', type: 'text' },
  { name: 'startDate', label: 'Voraussichtlicher Starttermin', type: 'text', full: true },
];

export default function KontaktPage() {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
  };

  return (
    <div style={{ backgroundColor: '#f7f6f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <LeistungenNav />

      {/* Form */}
      <main style={{ flex: 1, padding: '48px 30px 64px', display: 'flex', justifyContent: 'center' }}>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ width: '100%', maxWidth: '1200px' }}
        >
          <div className="desktop-only-block" style={{ marginBottom: '56px' }}>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#d8d3c9', marginBottom: '24px' }} />
            <h1 style={{
              fontFamily: 'var(--font-halis)',
              fontSize: '40px',
              fontWeight: 400,
              letterSpacing: '2px',
              color: '#2d2926',
              margin: '0 0 12px',
              textTransform: 'uppercase',
            }}>
              Kontakt
            </h1>
            <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '15px', color: '#666', margin: 0, maxWidth: '560px' }}>
              Erzählen Sie uns von Ihrem Projekt – wir melden uns zeitnah bei Ihnen zurück.
            </p>
          </div>
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
            Absenden
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
          Karriere&nbsp;|&nbsp;Nutzungsbedingungen
        </p>
        <p style={{ fontFamily: "'Avenir Next', Arial, sans-serif", fontSize: '12px', color: 'rgba(18,18,18,0.75)' }}>
          © Alle Rechte vorbehalten {new Date().getFullYear()}. Studio Fyrnys Interior Design
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
