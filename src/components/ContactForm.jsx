import { useState } from 'react'
import { trackBookingClick } from '../lib/analytics'
import site from '../config/site'
import Reveal from './Reveal'

const initialForm = { name: '', company: '', contact: '', message: '', website: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    // Honeypot : si rempli, c'est un bot — on fait semblant que ça a marché
    if (form.website) {
      setStatus('success')
      return
    }

    setStatus('submitting')

    // Notification email au propriétaire du site, gérée par Netlify Forms (aucun serveur à maintenir).
    // Best-effort : une erreur ici ne doit jamais empêcher l'enregistrement Supabase ci-dessous.
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        name: form.name,
        company: form.company,
        contact: form.contact,
        message: form.message,
      }).toString(),
    }).catch(() => {})

    // Import différé : le SDK Supabase ne pèse sur le chargement que si le formulaire est utilisé
    const { supabase } = await import('../lib/supabaseClient')
    const { error } = await supabase.from('contacts').insert({
      name: form.name,
      company: form.company,
      contact: form.contact,
      message: form.message,
      site: 'agence', // table mutualisée entre le site agence et les sites clients
      source: 'audit', // distingue les demandes d'audit gratuit du CTA final des contacts génériques
    })

    if (error) {
      setStatus('error')
      return
    }

    setForm(initialForm)
    setStatus('success')
  }

  return (
    <section id="contact" className="px-6 py-16">
      <Reveal className="mx-auto max-w-xl">
        <p className="text-center [font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange-text)]">
          Un audit gratuit, sans engagement
        </p>
        <h2 className="mt-2 text-center text-3xl text-[var(--ink)]">Prêt à être trouvé sur Google ?</h2>
        <p className="mt-3 text-center text-sm text-[var(--ink-muted)]">
          On regarde votre fiche Google et on vous dit franchement ce qui bloque — réponse sous 48h.{' '}
          {site.business.contactZone}.
        </p>
        <p className="mt-3 text-center text-sm text-[var(--ink-muted)]">
          Vous préférez réserver directement un créneau ?{' '}
          <a
            href={site.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookingClick('contact_form')}
            className="font-medium text-[var(--color-orange-text)] underline underline-offset-2 hover:opacity-80"
          >
            Choisir un horaire
          </a>
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--ink)]">
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-[var(--border-soft)] bg-[var(--surface-card)] px-3 py-2 text-sm text-[var(--ink)] transition-colors focus:border-[var(--color-orange)] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-[var(--ink)]">
              Entreprise
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              value={form.company}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-[var(--border-soft)] bg-[var(--surface-card)] px-3 py-2 text-sm text-[var(--ink)] transition-colors focus:border-[var(--color-orange)] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="contact-info" className="block text-sm font-medium text-[var(--ink)]">
              Téléphone ou email
            </label>
            <input
              id="contact-info"
              name="contact"
              type="text"
              required
              value={form.contact}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-[var(--border-soft)] bg-[var(--surface-card)] px-3 py-2 text-sm text-[var(--ink)] transition-colors focus:border-[var(--color-orange)] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--ink)]">
              Message <span className="font-normal text-[var(--ink-soft)]">(facultatif)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-[var(--border-soft)] bg-[var(--surface-card)] px-3 py-2 text-sm text-[var(--ink)] transition-colors focus:border-[var(--color-orange)] focus:outline-none"
            />
          </div>

          {/* Honeypot anti-spam — invisible pour un humain, rempli par les bots */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
            aria-hidden="true"
          />

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full rounded-sm bg-[var(--color-orange-button)] px-6 py-3 font-medium text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {status === 'submitting' ? 'Envoi...' : site.hero.ctaAudit}
          </button>

          {status === 'success' && (
            <p className="text-center text-sm font-medium text-green-700">
              Demande envoyée, nous revenons vers vous sous 48h.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm font-medium text-red-700">
              Une erreur est survenue, réessayez ou appelez directement au {site.business.phone}.
            </p>
          )}

          <p className="text-center text-xs text-[var(--ink-soft)]">
            Vos coordonnées servent uniquement à vous répondre — jamais partagées, jamais utilisées pour de la
            publicité.{' '}
            <a href="/mentions-legales" className="underline transition hover:text-[var(--color-orange-text)]">
              Mentions légales
            </a>
          </p>
        </form>
      </Reveal>
    </section>
  )
}
