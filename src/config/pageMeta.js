// Source unique des title/description par page — utilisée par useDocumentMeta (met à jour le
// DOM après montage React) ET par netlify/edge-functions/seo-meta.js (réécrit le HTML brut
// avant que le JS ne s'exécute, pour les crawlers qui ne rendent pas le JS et le 1er passage
// de Google). Les deux doivent rester alignés — c'est tout l'intérêt de centraliser ici plutôt
// que de dupliquer les chaînes dans chaque composant de page (voir audit SEO du 04/08/2026).
const pageMeta = {
  '/': {
    // Title/description réécrits le 12/08/2026 suite à l'analyse GSC : "agence web ariège"
    // était en position 11,84 (31 impressions, 0 clic) et "agence web limoux"/"agence web
    // aude" en position 1,17/5,71 (0 clic malgré un bon classement) — le mot "agence"
    // n'apparaissait nulle part dans le snippet. Limoux ajouté à titre de test (secteur à
    // ~20min, comparable à Foix, mais jamais visé explicitement jusqu'ici) — FAQ, schema
    // areaServed et CreditBadge clients volontairement laissés sur "Ariège" seule tant que
    // ce test SEO n'est pas confirmé sur plusieurs semaines.
    title: "La Dalle — Agence web pour artisans d'Ariège & Limoux",
    description:
      "Agence web locale pour artisans et commerçants d'Ariège et du secteur de Limoux. Carreleur de métier, interlocuteur unique, toujours joignable.",
    // og:title distinct du title SEO : accroche plus émotionnelle pour un partage social,
    // choix déjà présent avant ce refactor (index.html) — conservé tel quel.
    ogTitle: "La Dalle — un site qui tient, pour les artisans d'Ariège",
  },
  '/offres': {
    title: "Offres et tarifs — La Dalle, artisans d'Ariège",
    description:
      'Fiche Google seule pour les professions de santé, ou site vitrine + fiche Google pour commerces, beauté et artisans du BTP — tarifs et maintenance incluse.',
  },
  '/methode': {
    title: "Méthode et FAQ — La Dalle, artisans d'Ariège",
    description:
      "Pourquoi La Dalle, comment se déroule un projet en 4 étapes, et réponses aux questions les plus fréquentes sur les tarifs, délais et la zone d'intervention.",
  },
  '/mentions-legales': {
    title: 'Mentions légales — La Dalle',
    description:
      "Éditeur du site, hébergement, données personnelles et cookies — mentions légales de La Dalle, agence de création de sites pour artisans et commerces d'Ariège.",
  },
  '/cgu-cgv': {
    title: 'CGU/CGV — La Dalle',
    description:
      "Conditions générales d'utilisation du site et conditions générales de vente des prestations de création de site vitrine et d'optimisation de fiche Google Business de La Dalle.",
  },
}

export default pageMeta
