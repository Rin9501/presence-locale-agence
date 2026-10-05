import site from '../config/site'

// JSON-LD LocalBusiness — injecté côté client (app en CSR), à vérifier via
// document.querySelectorAll('script[type="application/ld+json"]') en navigateur réel,
// pas via curl/fetch qui ne rend pas le JS.
export default function LocalBusinessSchema() {
  const { business, seo, zoneIntervention, offre } = site

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    // « La Dalle » = marque visuelle (logo, titles) ; « Présence Locale » = ancien nom, conservé le
    // temps de la transition. Le nom officiel (NAP) est business.name, « La Dalle Agence » (05/10/2026).
    alternateName: ['La Dalle', 'Présence Locale'],
    url: 'https://ladalle-agence.fr',
    telephone: `+33${business.phone.replace(/\s/g, '').slice(1)}`,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: seo.streetAddress,
      postalCode: seo.postalCode,
      addressLocality: seo.addressLocality,
      addressRegion: seo.addressRegion,
      addressCountry: seo.addressCountry,
    },
    // AdministrativeArea (positionnement large "Toute l'Ariège") + liste de City détaillée
    // (site.zoneIntervention.communes, cf. commentaire dans site.js pour la méthode de calcul) —
    // la seconde renforce la première, ne la remplace pas (04/09/2026, même principe que
    // mirepoix-materiaux commit eb955ec).
    areaServed: [
      { '@type': 'AdministrativeArea', name: seo.areaServed },
      ...zoneIntervention.communes.map((c) => ({ '@type': 'City', name: c.nom })),
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: seo.openingHours.days,
      opens: seo.openingHours.opens,
      closes: seo.openingHours.closes,
    },
    // Avis réels, visibles dans AvisSection sur la homepage (06/09/2026) — ne pas
    // déclarer d'aggregateRating sans avis visible correspondant (cf. audit chape-liquide-occitanie).
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
    },
    // Profils officiels : fiche Google, Instagram, Facebook (URL www, pas m. — 05/10/2026).
    sameAs: [business.gmbUrl, business.instagram, business.facebook],
    // Offre unique v1 (29/09/2026) — montants en dur ici parce que schema.org attend un nombre,
    // pas le libellé "1 460 € HT" de site.offre : à garder aligné avec site.offre.prix / option.prix.
    // Franchise en base de TVA (art. 293 B du CGI) : le prix HT est le prix payé.
    makesOffer: [
      {
        '@type': 'Offer',
        name: offre.titre,
        description: `${offre.prixDetail}. ${offre.renouvellement}`,
        price: '1460',
        priceCurrency: 'EUR',
        url: 'https://ladalle-agence.fr/offres',
      },
      {
        '@type': 'Offer',
        name: offre.option.titre,
        price: '150',
        priceCurrency: 'EUR',
        url: 'https://ladalle-agence.fr/offres',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
