import site from '../config/site'
import CreditBadge from './CreditBadge'

export default function Footer() {
  return (
    <footer>
      <div className="border-t border-[var(--border-soft)] px-6 py-6 text-center text-sm text-[var(--ink-muted)]">
        <p>© {new Date().getFullYear()} {site.business.name}</p>
        <p className="mt-1">
          <a href={`tel:${site.business.phone.replace(/\s/g, '')}`} className="transition hover:text-[var(--color-orange-text)]">
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
        </p>
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
