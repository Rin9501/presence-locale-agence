import { useEffect, useState } from 'react'
import site from '../config/site'
import BrowserFrame from './BrowserFrame'
import MagneticButton from './MagneticButton'
import MockupPersonalizer from './MockupPersonalizer'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { testimonial } = site

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="accueil" className="px-6 py-20 sm:py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:items-center">
        <div className="w-full text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-[var(--ink)] sm:text-5xl">
            {site.business.tagline}
          </h1>
          <p className="mt-4 text-sm font-medium text-[var(--ink-soft)]">{site.business.zone}</p>
          <MagneticButton
            href="#contact"
            className="mt-8 inline-block rounded-md bg-[var(--color-orange-button)] px-6 py-3 font-medium text-white hover:opacity-90"
          >
            Demander un devis
          </MagneticButton>
        </div>

        <div
          className={`w-full md:w-1/2 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <BrowserFrame url="chapeliquide-occitanie.fr" imageAlt="Aperçu du site Chape Liquide Occitanie" />

          <MockupPersonalizer />

          {testimonial && (
            <figure className="mt-4 rounded-lg border border-[var(--border-soft)] bg-[var(--surface-card)] p-4">
              <blockquote className="text-sm italic text-[var(--ink-body)]">« {testimonial.quote} »</blockquote>
              <figcaption className="mt-2 text-xs text-[var(--ink-soft)]">
                <span className="font-medium text-[var(--ink)]">{testimonial.author}</span>
                {' — '}
                {testimonial.role}
                {' · '}
                <a
                  href={site.business.gmbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition hover:text-[var(--color-orange-text)]"
                >
                  {testimonial.source}
                </a>
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  )
}
