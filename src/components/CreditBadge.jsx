export default function CreditBadge({ variant = 'client' }) {
  const isAgency = variant === 'agency'
  const href = isAgency ? '/' : 'https://presence-locale-agence.netlify.app'
  const linkProps = isAgency ? {} : { target: '_blank', rel: 'noopener noreferrer' }

  return (
    <div className="bg-[#1c2b33] px-6 py-8 text-center">
      <a href={href} {...linkProps} className="inline-block">
        <img
          src="/luora-lockup-dark.svg"
          alt="Luora — La lumière sur votre savoir-faire"
          className="mx-auto h-16 w-auto"
          width="532"
          height="148"
          loading="lazy"
        />
      </a>
      <p className="mx-auto mt-3 max-w-xs text-[11px] leading-relaxed text-[#a9b8c2]">
        Site conçu par{' '}
        <a href={href} {...linkProps} className="underline transition hover:text-white">
          luora
        </a>
        {' '}— création de sites pour artisans et commerces d’Ariège
      </p>
    </div>
  )
}
