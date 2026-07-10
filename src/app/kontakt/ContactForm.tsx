'use client';

import { useState } from 'react';

const fields = [
  { name: 'vorname', label: 'Vorname', type: 'text' },
  { name: 'nachname', label: 'Nachname', type: 'text' },
  { name: 'telefon', label: 'Telefon', type: 'text' },
  { name: 'email', label: 'E-Mail', type: 'email' },
  { name: 'adresse', label: 'Projektadresse', type: 'text' },
  { name: 'leistungsumfang', label: 'Allgemeiner Leistungsumfang', type: 'textarea' },
  { name: 'budgetMoeblierung', label: 'Geschätztes Budget für Möblierung & Dekoration', type: 'text' },
  { name: 'budgetBau', label: 'Geschätztes Budget für Bauarbeiten & Renovierung', type: 'text' },
  { name: 'starttermin', label: 'Voraussichtlicher Baubeginn', type: 'text' },
] as const;

type FormState = Record<(typeof fields)[number]['name'], string>;

const initialState: FormState = {
  vorname: '', nachname: '', telefon: '', email: '', adresse: '',
  leistungsumfang: '', budgetMoeblierung: '', budgetBau: '', starttermin: '',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid #2d2926',
  borderRadius: 0,
  backgroundColor: 'transparent',
  fontFamily: "'TT Norms Pro', sans-serif",
  fontSize: '17px',
  color: '#2d2926',
  padding: '12px 0',
  outline: 'none',
  WebkitAppearance: 'none',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  function handleChange(name: keyof FormState, value: string) {
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = fields
      .map(f => `${f.label}: ${form[f.name] || '-'}`)
      .join('\n');
    const mailto = `mailto:studio@fyrnys.de?subject=${encodeURIComponent('Kontaktanfrage über die Website')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '56px', maxWidth: '640px' }}>
      {fields.map(field => (
        <div key={field.name}>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              placeholder={field.label}
              value={form[field.name]}
              onChange={e => handleChange(field.name, e.target.value)}
              rows={3}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          ) : (
            <input
              id={field.name}
              type={field.type}
              placeholder={field.label}
              value={form[field.name]}
              onChange={e => handleChange(field.name, e.target.value)}
              style={inputStyle}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        style={{
          fontFamily: "'TT Norms Pro', sans-serif",
          fontSize: '15px',
          fontWeight: 400,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#ffffff',
          backgroundColor: '#000000',
          border: 'none',
          borderRadius: 0,
          padding: '20px 40px',
          cursor: 'pointer',
          alignSelf: 'flex-start',
          marginTop: '16px',
        }}
      >
        Absenden
      </button>

      {sent && (
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '13px', color: '#8a8880', margin: 0 }}>
          Vielen Dank! Ihr E-Mail-Programm sollte sich mit Ihrer Anfrage geöffnet haben.
        </p>
      )}
    </form>
  );
}
