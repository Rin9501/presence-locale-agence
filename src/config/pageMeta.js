// Source unique des title/description par page — utilisée par useDocumentMeta (met à jour le
// DOM après montage React) ET par netlify/edge-functions/seo-meta.js (réécrit le HTML brut
// avant que le JS ne s'exécute, pour les crawlers qui ne rendent pas le JS et le 1er passage
// de Google). Les deux doivent rester alignés — c'est tout l'intérêt de centraliser ici plutôt
// que de dupliquer les chaînes dans chaque composant de page (voir audit SEO du 04/08/2026).
const pageMeta = {
  '/': {
    // Title/description réécrits le 12/08/2026 suite à l'analyse GSC (voir historique), puis à
    // nouveau le 04/09/2026 sur un export GSC juillet-sept 2026 (audit demandé par Mehdi) :
    // le fix du 12/08 n'a pas suffi, CTR toujours à 0% trois semaines après sur les mêmes
    // requêtes. Constat précis : "agence web limoux" position 1,4 (49 impr., 0 clic), "agence
    // web aude" position 4,7 (49 impr., 0 clic), "agence web ariège" position 7,6 — la MEILLEURE
    // requête en impressions (87) — toujours 0 clic. "Limoux" (une ville) remplacé par "l'Aude"
    // (le département, qui a autant de demande que Limoux et couvre aussi Castelnaudary/Bram/
    // Chalabre/Fanjeaux — désormais une zone réelle depuis l'extension du 04/09, pas juste un
    // test). Hypothèse principale retenue avec Mehdi pour la suite : à ce niveau de position,
    // la stagnation du CTR vient probablement plus du Local Pack Google (qui capte le clic
    // avant l'organique) et de l'absence d'avis sur la fiche GMB de La Dalle elle-même (pas de
    // rich snippet étoilé possible sans avis réels) que du seul texte du snippet — un nouveau
    // point GSC est nécessaire dans 3-4 semaines pour vérifier si ce changement suffit.
    title: "La Dalle — Agence web pour artisans d'Ariège & de l'Aude",
    description:
      "Agence web locale pour artisans et commerçants d'Ariège et de l'Aude, jusqu'à 50 km de Mirepoix. Carreleur de métier, interlocuteur unique, toujours joignable.",
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
  '/fiches-produits': {
    // Lien direct partagé par Mehdi en RDV/SMS, pas un point d'entrée public — noindex pour
    // éviter tout chevauchement de contenu dupliqué avec /offres sur Google (voir plan du
    // 04/09/2026). Pas d'ogTitle dédié : og/twitter reprennent title/description ci-dessous,
    // utiles pour un aperçu de lien correct dans une conversation SMS/WhatsApp.
    title: 'Détail des prestations par secteur — La Dalle',
    description:
      'Le détail exact de chaque prestation, secteur par secteur : inclus, non inclus, délais et conditions — sans argumentaire commercial.',
    robots: 'noindex, nofollow',
  },
  '/mentions-legales': {
    title: 'Mentions légales — La Dalle',
    description:
      "Éditeur du site, hébergement, données personnelles et cookies — mentions légales de La Dalle, agence de création de sites pour artisans et commerces d'Ariège.",
  },
  '/cgu-cgv': {
    // Description raccourcie à 145 caractères le 04/09/2026 (audit technique) — la précédente
    // dépassait 160 caractères et risquait d'être tronquée dans le snippet Google.
    title: 'CGU/CGV — La Dalle',
    description:
      "Conditions générales d'utilisation et de vente des prestations de création de site vitrine et d'optimisation de fiche Google Business — La Dalle.",
  },
}

export default pageMeta
