// En-tête compact réutilisé par les pages dédiées (/offres, /methode) — pas un Hero plein écran
// comme la homepage, juste de quoi situer la page et proposer un retour rapide.
export default function PageIntro({ kicker, titre, intro }) {
  return (
    <header className="bg-[var(--color-navy)] px-6 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 transition hover:text-[var(--color-orange)]"
        >
          <span aria-hidden="true">←</span> Retour au site
        </a>
        <p className="[font-family:var(--font-utility)] mt-6 text-xs font-semibold uppercase tracking-wide text-[var(--color-orange)]">
          {kicker}
        </p>
        <h1 className="mt-3 text-3xl text-white sm:text-4xl">{titre}</h1>
        {intro && <p className="mt-4 max-w-xl text-base text-white/70">{intro}</p>}
      </div>
    </header>
  )
}
