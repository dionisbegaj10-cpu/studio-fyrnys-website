'use client';

export default function BackButton() {
  return (
    <button
      onClick={() => {
        if (window.history.length > 1) window.history.back();
        else window.location.href = '/';
      }}
      aria-label="Menü schließen"
      style={{ background: 'none', border: '1px solid #ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', color: '#ffffff' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="14" height="14">
        <path fill="currentColor" d="M.293.293a1 1 0 0 1 1.414 0L7 5.586 12.293.293a1 1 0 1 1 1.414 1.414L8.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414L7 8.414l-5.293 5.293A1 1 0 0 1 .293 12.707L5.586 7 .293 1.707A1 1 0 0 1 .293.293z"/>
      </svg>
    </button>
  );
}
