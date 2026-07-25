import { useState } from 'react'
import MagneticButton from './MagneticButton'
import ThemeToggle from './ThemeToggle'

// Ancres préfixées par "/" pour fonctionner aussi depuis /mentions-legales
// (sur la page d'accueil, "/#offres" se comporte comme "#offres", sans rechargement)
const links = [
  { href: '/#offres', label: 'Offres' },
  { href: '/#stack', label: 'Stack & méthode' },
  { href: '/#realisations', label: 'Réalisations' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border-soft)] bg-[var(--surface)]/95 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-3">
        <a href="/#accueil" className="flex items-center gap-2.5">
          <img src="/la-dalle-mark.svg" alt="" width={64} height={64} className="mark-glow h-8 w-auto dark:hidden" />
          <img
            src="/la-dalle-mark-light.svg"
            alt=""
            width={64}
            height={64}
            className="mark-glow hidden h-8 w-auto dark:block"
          />
          <img
            src="/la-dalle-wordmark.svg"
            alt="La Dalle"
            width={294}
            height={103}
            className="h-6 w-auto dark:hidden"
          />
          <img
            src="/la-dalle-wordmark-light.svg"
            alt="La Dalle"
            width={294}
            height={103}
            className="hidden h-6 w-auto dark:block"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--ink)] sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[var(--color-orange-text)]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MagneticButton
            href="/#contact"
            className="cta-glow hidden rounded-sm bg-[var(--color-orange-button)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 sm:inline-block"
          >
            Nous contacter
          </MagneticButton>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--ink)] transition hover:bg-[var(--border-soft)] sm:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`grid overflow-hidden border-t border-[var(--border-soft)] transition-all duration-300 ease-out sm:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 overflow-hidden px-6 py-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--border-soft)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="cta-glow mt-1 rounded-sm bg-[var(--color-orange-button)] px-4 py-2 text-center text-sm font-medium text-white transition hover:opacity-90"
          >
            Nous contacter
          </a>
        </div>
      </nav>
    </header>
  )
}
