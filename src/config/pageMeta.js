// Source unique des title/description par page — utilisée par useDocumentMeta (met à jour le
// DOM après montage React) ET par netlify/edge-functions/seo-meta.js (réécrit le HTML brut
// avant que le JS ne s'exécute, pour les crawlers qui ne rendent pas le JS et le 1er passage
// de Google). Les deux doivent rester alignés — c'est tout l'intérêt de centraliser ici plutôt
// que de dupliquer les chaînes dans chaque composant de page (voir audit SEO du 04/08/2026).
const pageMeta = {
  '/': {
    title: "La Dalle — Site internet & fiches Google, artisans d'Ariège",
    description:
      "Sites internet et fiches Google pour artisans et commerçants d'Ariège. Un interlocuteur unique, carreleur de métier, toujours joignable.",
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
}

export default pageMeta
