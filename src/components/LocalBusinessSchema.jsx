import site from '../config/site'

// JSON-LD LocalBusiness — injecté côté client (app en CSR), à vérifier via
// document.querySelectorAll('script[type="application/ld+json"]') en navigateur réel,
// pas via curl/fetch qui ne rend pas le JS.
export default function LocalBusinessSchema() {
  const { business, seo } = site

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    url: 'https://presence-locale-agence.netlify.app',
    telephone: `+33${business.phone.replace(/\s/g, '').slice(1)}`,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: seo.addressLocality,
      addressRegion: seo.addressRegion,
      addressCountry: seo.addressCountry,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: seo.areaServed,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: seo.openingHours.days,
      opens: seo.openingHours.opens,
      closes: seo.openingHours.closes,
    },
    sameAs: [business.gmbUrl],
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
