// Contenu du site — seul fichier à modifier pour ajuster les textes, prix ou réalisations
const site = {
  business: {
    name: 'La Dalle',
    // H1 direction "1b" (validée 30/07) — "Trouvé" porté par le span orange dans Hero.jsx
    tagline: 'Introuvable sur Google. Trouvé en 60 jours.',
    // Corrige le "pas un abonnement" de la maquette Claude Design (contredisait la maintenance
    // 240€/an obligatoire) : recentré sur l'absence de licence logicielle récurrente (vs WordPress/Wix),
    // pas sur l'absence de coût récurrent en général.
    subtitle:
      'Sites internet et fiches Google pour les artisans et commerces d’Ariège. Pas de licence WordPress ou Wix à payer chaque mois — un forfait annuel clair, une fois votre site en ligne.',
    zone: 'Toute l’Ariège (09)',
    contactZone: 'Basé à Mirepoix, interventions dans toute l’Ariège',
    phone: '06 33 24 69 70',
    email: 'presencelocale.contact@gmail.com',
    gmbUrl: 'https://share.google/80OCTHfwtmZeeYobB', // fiche confirmée par Mehdi le 26/07/2026
    instagram: 'https://www.instagram.com/ladalle_agence/',
  },

  // Hero direction "1b" — repère chiffré + vignette avant/après (Hero.jsx).
  // "avant" reste illustratif (pas de vraie capture disponible) ; "après" est la vraie fiche
  // Google Chape Liquide Occitanie (src/assets/proof/gmb-chape-liquide-apres.*, fournie 02/08/2026).
  hero: {
    repere: '2 chantiers signés en 60 jours',
    ctaAudit: 'Un audit gratuit de ma fiche',
    avantApres: {
      avantLabel: 'avant',
      // Cas réel Chape Liquide Occitanie confirmé par Mehdi le 02/08/2026 : aucune présence en
      // ligne du tout avant La Dalle, pas seulement une fiche Google incomplète.
      avantTexte: 'aucune présence en ligne',
      apresLabel: 'après — 60 jours',
    },
  },

  // Section "Preuve sociale" (RealisationsSection.jsx, fond encre) — 3 résultats chiffrés,
  // validés dans le chantier Refonte Business du 30/07. Chiffres confirmés par Mehdi ; ne pas
  // en ajouter un 4ème sans preuve mesurée équivalente (cf. règle "book varié" du 28/07).
  preuveSociale: {
    kicker: 'Preuve sociale',
    titre: 'Des résultats, pas des captures d’écran.',
  },

  // Section "Et après la livraison" (nouveau composant ApresLivraisonSection.jsx, fond papier ciment) —
  // formalise le bilan à 60 jours (gratuit, unique — pas 180j/365j) + la maintenance 240€/an,
  // sans afficher de prix ici (le prix reste secondaire dans le positionnement, acté 30/07).
  apresLivraison: {
    kicker: 'Et après la livraison',
    titre: 'On ne disparaît pas une fois payés.',
    etapes: [
      {
        repere: 'Étape 1 — jour 60',
        titre: 'Bilan à 60 jours',
        description:
          'On regarde ensemble ce que le site et la fiche Google ont réellement généré — et on ajuste ce qui doit l’être.',
      },
      {
        repere: 'En continu',
        titre: 'Maintenance incluse',
        description:
          'Mises à jour, sécurité, fiche Google surveillée — un interlocuteur unique, joignable, tant que le site existe.',
      },
    ],
  },

  // Section fondateur (nouveau composant FondateurSection.jsx, fond encre) — texte corrigé le 30/07 :
  // Mehdi est carreleur salarié À TEMPS PLEIN aujourd'hui, jamais "ancien carreleur" (erreur repérée
  // sur la 1ère version Claude Design, cf. Brief 1).
  fondateur: {
    kicker: 'Le fondateur',
    titre: 'Le carreleur qui fait des sites pour les artisans du coin.',
    description:
      'Mehdi, carreleur de métier, développeur par passion — basé en Ariège. Il connaît le terrain, et il répond quand on l’appelle.',
  },

  // Utilisé par LocalBusinessSchema.jsx (JSON-LD) — adresse ville seule (pas de rue,
  // activité à domicile), horaires larges cohérents avec une activité en soir/week-end
  seo: {
    addressLocality: 'Mirepoix',
    addressRegion: 'Ariège',
    addressCountry: 'FR',
    areaServed: 'Ariège',
    openingHours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '19:00' },
  },

  // Page /mentions-legales. Situation au 17/07/2026 : auto-entreprise de Mehdi en cours de
  // radiation (effective le 10/08/2026), nouvelle immatriculation prévue ensuite avec le bon
  // code APE. legalName et siret laissés vides d'ici là — la page s'adapte automatiquement
  // (aucun champ vide affiché). ⚠️ Dès la réimmatriculation : remplir legalName, legalForm,
  // siret et registeredAddress avec les infos officielles.
  legal: {
    legalName: 'Mehdi Courtinat', // confirmé par courrier URSSAF du 10/07/2026
    tradeName: 'La Dalle',
    legalForm: 'Entreprise individuelle en cours d’immatriculation',
    siret: '',
    registeredAddress: 'Mirepoix (09500)',
    host: {
      name: 'Netlify, Inc.',
      address: '101 2nd Street, San Francisco, CA 94105, États-Unis',
      url: 'https://www.netlify.com',
    },
  },

  // Avis client réel affiché en hero, à côté du mockup du même client (Chape Liquide
  // Occitanie) — même client sur les deux preuves plutôt que deux preuves séparées.
  testimonial: {
    quote: 'Je suis très satisfait de ces services au top',
    author: 'Cyril Balussou',
    role: 'EURL Chape Liquide Occitanie',
    source: 'Avis Google',
  },

  // Voix éditoriale du site : "nous" partout (duo), jamais "je" — cohérence Header/Offres/Contact.
  pitch: {
    title: 'Pourquoi La Dalle',
    paragraphs: [
      "Le bouche-à-oreille fait vivre un commerce ou un artisan — mais aujourd’hui, il commence sur Google. Avant d’appeler, vos futurs clients tapent votre métier et votre ville : ceux qu’ils trouvent décrochent le chantier ou le rendez-vous.",
      "La Dalle, c’est un duo basé à Mirepoix, avec un pied dans le bâtiment — carreleur de métier côté technique. Nous savons comment vos clients choisissent un artisan ou un commerce, et ce qu’ils regardent avant de se décider.",
      "Chaque site est construit depuis zéro pour votre activité : pas de thème de commerce, pas de maquette recyclée d’un client à l’autre. Nous optimisons votre fiche Google Business et écrivons vos textes pour votre métier et votre zone, avec vos vraies photos et vos vrais avis.",
      "Le site vous appartient — aucun abonnement mensuel, aucun engagement sur plusieurs années. Le seul coût récurrent est un forfait annuel clair, inclus dans chaque site dès la livraison : hébergement, nom de domaine et petites modifications. Un seul interlocuteur, du premier échange à la maintenance.",
    ],
    whyNotWordpress: {
      title: 'Pourquoi pas WordPress ou Wix',
      points: [
        'Un site sur-mesure, livré en quelques jours, pas en semaines.',
        'Pas d’abonnement mensuel obligatoire à un CMS — juste l’hébergement.',
        'Un code propre et rapide, pensé pour être trouvé sur Google et consulté sur mobile.',
      ],
    },
    beyondTheSite: {
      title: 'Au-delà du site',
      description:
        'Le développement ne s’arrête pas à la vitrine et à la fiche Google : nous pouvons aussi construire des outils internes sur-mesure pour simplifier votre gestion au quotidien — un tableau de suivi de chantiers, une automatisation de devis récurrents, un petit panneau d’administration... Un besoin précis en tête ? On en discute, ce n’est pas un tarif figé.',
    },
  },

  // Section "Stack & méthode" — rend concrètes les technos listées dans whyNotWordpress,
  // en les reliant à un bénéfice client plutôt qu'à un nom de techno seul.
  stack: {
    title: 'Comment c’est construit',
    intro:
      'Pas de CMS générique ni de thème du commerce : chaque site est codé sur-mesure, avec les mêmes outils que ceux utilisés par les équipes tech des grandes plateformes web.',
    items: [
      {
        name: 'React + Vite',
        role: 'Le moteur du site',
        benefit: 'Un code compilé et optimisé avant publication — pas de plugin à mettre à jour, pas de faille de sécurité à surveiller.',
      },
      {
        name: 'Tailwind CSS',
        role: 'Le design',
        benefit: 'Un rendu cohérent du premier coup, sur mobile comme sur ordinateur — pas de mise en page qui se casse au fil des modifs.',
      },
      {
        name: 'Supabase',
        role: 'La base de données',
        benefit: 'Vos horaires, tarifs ou infos pratiques modifiables vous-même via un panneau simple, sans nous solliciter à chaque changement.',
      },
      {
        name: 'Netlify',
        role: 'L’hébergement',
        benefit: 'Le site est diffusé sur un réseau mondial de serveurs (CDN) — il s’affiche vite, même en 4G moyenne en Ariège.',
      },
    ],
    comparison:
      'Un site WordPress non optimisé dépasse souvent 3 à 4 secondes de chargement (constat courant du secteur, plugins et thème compris). Un site codé sur-mesure comme celui-ci n’a que le strict nécessaire à charger.',
  },

  offres: [
    {
      niveau: 1,
      titre: 'Fiche Google Business',
      cible: 'Professions de santé réglementées',
      description: 'Optimisation de votre fiche Google My Business, ton factuel, sans pitch commercial.',
      prix: 'Sur devis',
      recurrent: 'Suivi mensuel optionnel : 15–20 €/mois',
    },
    {
      niveau: 2,
      titre: 'Site vitrine + Fiche Google',
      cible: 'Commerces, beauté, restauration',
      description: 'Site vitrine sur-mesure et optimisation de votre fiche Google Business.',
      prix: 'Sur devis',
      recurrent: 'Puis 240 €/an tout compris, inclus dès la livraison : hébergement, nom de domaine et 2 modifications par mois',
    },
    {
      niveau: 3,
      titre: 'Site + Galerie chantiers + Fiche Google',
      cible: 'Artisans du BTP',
      description: 'Site vitrine, galerie de chantiers avant/après, et optimisation de votre fiche Google Business.',
      prix: 'Sur devis',
      recurrent: 'Puis 240 €/an tout compris, inclus dès la livraison : hébergement, nom de domaine et 2 modifications par mois',
    },
  ],

  // Sous-titre de la section offres — jamais de formulation qui avoue un manque de références
  offresIntro: 'Chaque site est chiffré sur mesure, selon votre activité et l’ampleur du projet — premier échange et devis gratuits, sans engagement.',

  // Parcours client en 4 étapes — répond aux objections pratiques (durée, engagement, après-vente)
  process: {
    title: 'Comment ça se passe',
    steps: [
      {
        titre: 'On échange',
        description:
          'Par SMS, téléphone ou autour d’un café : votre activité, vos objectifs, ce que vous avez déjà (photos, logo, avis) et ce qu’il vous manque.',
      },
      {
        titre: 'On réunit la matière, puis une vraie maquette',
        description:
          'S’il manque des photos, un logo ou des avis, on vous aide à les rassembler — rien n’est laissé au hasard. Vous voyez ensuite une première version en ligne avec vos vrais contenus, pas un exemple générique : vous validez, ou on ajuste, avant tout engagement.',
      },
      {
        titre: 'Livraison + fiche Google optimisée',
        description:
          'Site en ligne, fiche Google Business optimisée en parallèle, mentions légales en règle. Rien n’est publié sans votre accord.',
      },
      {
        titre: 'On s’en occupe ensuite',
        description:
          'Hébergement, nom de domaine et 2 petites modifications par mois inclus dans le forfait annuel. Vos demandes sont regroupées et traitées chaque début de mois.',
      },
    ],
  },

  // FAQ — répond explicitement à des questions déjà couvertes ailleurs sur le site (offres, process),
  // sous une forme directement citable pour le SEO et les moteurs de réponse IA (GEO). Rendu par
  // FaqSection.jsx qui génère aussi le JSON-LD FAQPage à partir de ce même tableau (pas de duplication).
  faq: [
    {
      question: 'Combien coûte un site vitrine avec La Dalle ?',
      reponse:
        'Ça dépend de votre activité et de l’ampleur du projet (commerce, beauté, artisan du BTP avec galerie chantiers...) — nous vous donnons un chiffrage précis après un premier échange, pas un tarif générique en ligne. Ensuite, un forfait annuel unique de 240 € est inclus dans chaque site dès la livraison : hébergement, nom de domaine et 2 petites modifications par mois, sans abonnement mensuel caché.',
    },
    {
      question: 'Faut-il payer un abonnement mensuel ?',
      reponse:
        'Non. Contrairement aux plateformes comme Solocal ou PagesJaunes, il n’y a aucun abonnement obligatoire ni engagement sur plusieurs années : le site vous appartient, et le seul coût récurrent est le forfait annuel de 240 € tout compris.',
    },
    {
      question: 'Combien de temps pour être livré ?',
      reponse:
        'Quelques jours après validation de la maquette. Vous voyez d’abord une version en ligne du site avant tout engagement, puis la livraison suit rapidement une fois vos retours pris en compte.',
    },
    {
      question: 'Intervenez-vous dans tout le département ?',
      reponse:
        'Oui, dans toute l’Ariège (09). Le premier échange se fait par SMS, téléphone ou autour d’un café, où que vous soyez dans le département.',
    },
    {
      question: 'Que se passe-t-il après la livraison du site ?',
      reponse:
        'Vous n’êtes pas laissé dans la nature : hébergement, nom de domaine et 2 petites modifications par mois sont inclus dans le forfait annuel, avec un seul interlocuteur du premier échange à la maintenance.',
    },
  ],

  // Pas de prix affiché volontairement — capte les demandes hors offres standards, ne vend pas en autonomie
  besoinSpecifique: {
    titre: 'Besoin spécifique ?',
    description: 'Projet technique particulier, demande hors des offres standards ? Contactez-nous, on étudie toute proposition.',
    cta: 'Nous contacter',
  },

  // À peupler au fur et à mesure des livraisons — jamais de faux exemple ici
  // type 'site' : capture + lien vers un site en ligne (image relative à src/assets/realisations/)
  // type 'before-after' : galerie chantier avant/après (before/after relatifs à src/assets/realisations/)
  realisations: [
    {
      type: 'site',
      title: 'Chape Liquide Occitanie',
      badge: 'Site vitrine + fiche Google · Chape liquide',
      // Chiffres fournis par Mehdi le 02/08/2026, deux sources datées :
      // - Search Console (29/05→28/07/2026, ~2 mois) : position moyenne 8,5, CTR 5 % sur "chape liquide"
      //   (au-dessus de la moyenne sectorielle pour ce rang, repère courant ~2-3 %).
      // - Fiche Google Business (survol du graphique "Interactions") : 7 en juin 2026 → 31 en juillet 2026.
      // Chiffres 574 vues/101 recherches non repris : fenêtre non confirmée au même niveau de détail.
      description: 'Sur la fiche Google, les interactions passent de 7 en juin à 31 en juillet — et la position moyenne grimpe à 8,5 sur « chape liquide ».',
      image: 'chape-liquide-occitanie/screenshot.jpg',
      url: 'https://chapeliquide-occitanie.fr',
      stat: '2 chantiers signés en 60 jours',
    },
    {
      type: 'site',
      title: 'Mirepoix Toiture',
      badge: 'Site + galerie chantiers — Artisan BTP',
      description: 'De la charpente à la couverture, une seule page pour tout montrer.',
      image: 'mirepoix-toiture/screenshot.jpg',
      url: 'https://mirepoix-toiture.fr',
      stat: '+8 demandes de devis / mois',
    },
    {
      type: 'site',
      title: 'VH Beauty Studio',
      badge: 'Fiche Google · Institut de beauté',
      description: 'Fiche Google reprise de zéro : horaires, photos, avis relancés.',
      image: 'vh-beauty-studio/screenshot.jpg',
      url: 'https://vh-beauty-studio.fr',
      stat: 'Vue 3× plus sur Maps en 8 semaines',
    },
  ],
}

export default site
