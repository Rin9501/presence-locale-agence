import { trackPhoneClick } from '../lib/analytics'
import site from '../config/site'
import { useSiteContent } from '../hooks/useSiteContent'
import CreditBadge from './CreditBadge'

export default function Footer() {
  // Lien Instagram : override possible via le panneau admin self-service (test en cours,
  // voir supabaseSiteId dans site.js) — retombe sur la valeur statique tant que rien n'a
  // été modifié côté Supabase.
  const content = useSiteContent()
  const instagram = content?.links?.instagram || site.business.instagram

  return (
    <footer>
      <div className="border-t border-[var(--border-soft)] px-6 py-6 text-center text-sm text-[var(--ink-muted)]">
        <p>© {new Date().getFullYear()} {site.business.name}</p>
        <p className="mt-1">
          <a
            href={`tel:${site.business.phone.replace(/\s/g, '')}`}
            onClick={() => trackPhoneClick('footer')}
            className="transition hover:text-[var(--color-orange-text)]"
          >
            {site.business.phone}
          </a>
          {' · '}
          <a href={`mailto:${site.business.email}`} className="transition hover:text-[var(--color-orange-text)]">
            {site.business.email}
          </a>
          {' · '}
          <a href="/mentions-legales" className="transition hover:text-[var(--color-orange-text)]">
            Mentions légales
          </a>
          {' · '}
          <a href="/cgu-cgv" className="transition hover:text-[var(--color-orange-text)]">
            CGU/CGV
          </a>
        </p>
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="La Dalle sur Instagram"
            className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--ink-muted)] transition hover:border-[var(--color-orange)] hover:text-[var(--color-orange-text)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-[18px] w-[18px]">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
        )}
        <p className="mt-2 text-xs text-[var(--ink-soft)]">
          Dernière mise à jour du site :{' '}
          {new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date(__BUILD_DATE__))} — déployé via
          Netlify
        </p>
      </div>
      <CreditBadge variant="agency" />
    </footer>
  )
}
