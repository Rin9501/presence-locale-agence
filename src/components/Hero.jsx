import gmbApresJpg from '../assets/proof/gmb-chape-liquide-apres.jpg'
import gmbApresWebp from '../assets/proof/gmb-chape-liquide-apres.webp'
import site from '../config/site'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const { hero } = site

  return (
    <section id="accueil" className="bg-[var(--color-navy)] px-6 py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-2">
        <div>
          <h1 className="text-4xl leading-[1.05] text-white sm:text-5xl">
            Introuvable sur
            <br />
            Google. <span className="text-[var(--color-orange)]">Trouvé</span>
            <br />
            en 60 jours.
          </h1>
          <p className="mt-5 max-w-md text-base text-white/70">{site.business.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#contact"
              className="cta-glow inline-block rounded-sm bg-[var(--color-orange-button)] px-6 py-3 font-medium text-white hover:opacity-90"
            >
              {hero.ctaAudit}
            </MagneticButton>
            <span className="[font-family:var(--font-utility)] rounded-sm border border-white/25 px-3 py-1.5 text-[11px] uppercase tracking-wide text-white/60">
              {hero.repere}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="chamfer flex flex-col gap-2.5 border border-white/15 p-4">
            <span className="[font-family:var(--font-utility)] text-[10px] uppercase tracking-wide text-white/50">
              {hero.avantApres.avantLabel}
            </span>
            <div className="stripe-diag-dark flex h-[90px] items-center justify-center px-4 text-center">
              <span className="[font-family:var(--font-utility)] text-[10px] uppercase tracking-wide text-white/60">
                {hero.avantApres.avantTexte}
              </span>
            </div>
          </div>
          <div className="chamfer flex flex-col gap-2.5 border border-[var(--color-orange)] bg-black/20 p-4">
            <span className="[font-family:var(--font-utility)] text-[10px] uppercase tracking-wide text-[var(--color-orange)]">
              {hero.avantApres.apresLabel}
            </span>
            {/* Vraie capture de la fiche Google Chape Liquide Occitanie (fournie par Mehdi le 02/08/2026) —
                seule la vignette "après" a un équivalent réel disponible, "avant" reste illustratif. */}
            <picture>
              <source srcSet={gmbApresWebp} type="image/webp" />
              <img
                src={gmbApresJpg}
                alt="Fiche Google Chape Liquide Occitanie : 5,0 étoiles, services et coordonnées à jour"
                width={665}
                height={100}
                loading="lazy"
                className="w-full rounded-[2px]"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
