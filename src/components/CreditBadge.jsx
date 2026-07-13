export default function CreditBadge({ variant = 'client' }) {
  const isAgency = variant === 'agency'

  return (
    <div className="bg-[#1c2b33] px-6 py-3 text-center text-[11px] text-[#a9b8c2]">
      Site conçu par{' '}
      {isAgency ? (
        <a href="/" className="underline transition hover:text-white">
          Présence Locale
        </a>
      ) : (
        <a
          href="https://presence-locale-agence.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition hover:text-white"
        >
          Présence Locale
        </a>
      )}
      {' '}— création de sites pour artisans et commerces d’Ariège
    </div>
  )
}
