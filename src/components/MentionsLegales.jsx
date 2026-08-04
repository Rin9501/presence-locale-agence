import pageMeta from '../config/pageMeta'
import useDocumentMeta from '../hooks/useDocumentMeta'
import site from '../config/site'
import useCookieConsent from '../hooks/useCookieConsent'

export default function MentionsLegales() {
  const legal = site.legal
  const { consent, resetConsent } = useCookieConsent()

  useDocumentMeta(pageMeta['/mentions-legales'].title, pageMeta['/mentions-legales'].description, '/mentions-legales')

  return (
    <main className="mx-auto max-w-3xl flex-1 px-6 py-16 sm:py-20">
      <a href="/" className="inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] transition hover:text-[var(--color-orange-text)]">
        <span aria-hidden="true">←</span> Retour au site
      </a>

      <h1 className="mt-6 text-4xl font-bold text-[var(--ink)]">Mentions légales</h1>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-[var(--ink-body)]">
        <section>
          <h2 className="text-xl font-semibold text-[var(--ink)]">Éditeur du site</h2>
          <p className="mt-3">
            Le site {site.business.name} est édité
            {legal.legalName ? ` par ${legal.legalName}, exerçant` : ''} sous le nom commercial
            « {legal.tradeName} » — {legal.legalForm}
            {legal.siret ? `, immatriculée sous le SIRET ${legal.siret}` : ''}.
          </p>
          <p className="mt-2">Adresse : {legal.registeredAddress}.</p>
          <p className="mt-2">
            Téléphone :{' '}
            <a href={`tel:${site.business.phone.replace(/\s/g, '')}`} className="underline">
              {site.business.phone}
            </a>
            {' — '}Email :{' '}
            <a href={`mailto:${site.business.email}`} className="underline">
              {site.business.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--ink)]">Hébergement</h2>
          <p className="mt-3">
            Ce site est hébergé par {legal.host.name}, {legal.host.address} —{' '}
            <a href={legal.host.url} target="_blank" rel="noopener noreferrer" className="underline">
              {legal.host.url.replace('https://', '')}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--ink)]">Directeur de la publication</h2>
          <p className="mt-3">{legal.legalName ? `${legal.legalName} (${legal.tradeName})` : legal.tradeName}.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--ink)]">Données personnelles</h2>
          <p className="mt-3">
            Les informations transmises via le formulaire de contact (nom, téléphone ou email, message) sont
            utilisées uniquement pour répondre à votre demande. Elles sont stockées de façon sécurisée sur des
            serveurs situés dans l’Union européenne (Supabase, région Paris), ne sont transmises à aucun tiers
            et ne servent jamais à de la publicité. Conformément au RGPD, vous disposez d’un droit d’accès, de
            rectification et de suppression des données vous concernant, à exercer par email à{' '}
            <a href={`mailto:${site.business.email}`} className="underline">
              {site.business.email}
            </a>
            .
          </p>
        </section>

        <section id="cookies">
          <h2 className="text-xl font-semibold text-[var(--ink)]">Cookies et mesure d’audience</h2>
          <p className="mt-3">
            Ce site utilise Google Analytics pour mesurer sa fréquentation (pages visitées, provenance), uniquement
            si vous l’acceptez via le bandeau proposé lors de votre première visite. Sans votre accord, aucun script
            de mesure n’est chargé et aucun cookie n’est déposé. Cette mesure sert uniquement à comprendre quelles
            pages sont utiles — elle n’est jamais utilisée pour de la publicité ciblée ou revendue à des tiers.
          </p>
          <p className="mt-2">
            Choix actuel : {consent === 'accepted' ? 'accepté' : consent === 'refused' ? 'refusé' : 'pas encore fait'}.{' '}
            <button type="button" onClick={resetConsent} className="underline hover:text-[var(--color-orange-text)]">
              Modifier mes préférences
            </button>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--ink)]">Propriété intellectuelle</h2>
          <p className="mt-3">
            L’ensemble des textes et éléments graphiques présents sur ce site est la propriété de {legal.tradeName},
            sauf mention contraire (captures d’écran des sites clients reproduites avec leur accord), et ne peut
            être reproduit sans autorisation préalable.
          </p>
        </section>
      </div>
    </main>
  )
}
