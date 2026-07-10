'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';

export default function ContactFormModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: '#2d2926', marginBottom: '24px' }}>
        Füllen Sie unser{' '}
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            fontFamily: "'TT Norms Pro', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: '#2d2926',
            background: 'none',
            border: 'none',
            padding: 0,
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Kontaktformular
        </button>{' '}
        aus oder schreiben Sie uns direkt. Für alle weiteren Anfragen erreichen Sie uns unter:
      </p>

      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            backgroundColor: '#f7f6f0',
            overflowY: 'auto',
          }}
        >
          {/* Top bar: wordmark left, close right */}
          <div style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            backgroundColor: '#f7f6f0',
            height: '54px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
          }}>
            <span style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '15px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1a1a1a' }}>
              Studio Fyrnys
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Formular schließen"
              style={{ background: 'none', border: '1px solid #2d2926', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', color: '#2d2926' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="14" height="14">
                <path fill="currentColor" d="M.293.293a1 1 0 0 1 1.414 0L7 5.586 12.293.293a1 1 0 1 1 1.414 1.414L8.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414L7 8.414l-5.293 5.293A1 1 0 0 1 .293 12.707L5.586 7 .293 1.707A1 1 0 0 1 .293.293z"/>
              </svg>
            </button>
          </div>

          <div style={{ padding: '48px 20px 64px', maxWidth: '720px', margin: '0 auto' }}>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}
