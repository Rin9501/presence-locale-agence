export default function CreditBadge({ variant = 'client' }) {
  const isAgency = variant === 'agency'
  const href = isAgency ? '/' : 'https://ladalle-agence.fr'
  const linkProps = isAgency ? {} : { target: '_blank', rel: 'noopener noreferrer' }

  return (
    <div className="bg-[var(--color-navy)] px-6 py-8 text-center">
      <a href={href} {...linkProps} className="inline-block">
        <img
          src="/la-dalle-lockup-dark.svg"
          alt="La Dalle"
          className="mx-auto h-16 w-auto"
          width="532"
          height="148"
          loading="lazy"
        />
      </a>
      <p className="mx-auto mt-3 max-w-xs text-[11px] leading-relaxed text-[var(--color-grey)]">
        Site conçu par{' '}
        <a href={href} {...linkProps} className="underline transition hover:text-white">
          La Dalle
        </a>
        {' '}— création de sites pour artisans et commerces d’Ariège
      </p>
    </div>
  )
}
