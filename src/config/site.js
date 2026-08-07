// Contenu du site — seul fichier à modifier pour ajuster les textes, prix ou réalisations
const site = {
  business: {
    name: 'La Dalle',
    // H1 direction "1b" (validée 30/07) — "Trouvé" porté par le span orange dans Hero.jsx
    tagline: 'Introuvable sur Google. Trouvé en 60 jours.',
    // Corrige le "pas un abonnement" de la maquette Claude Design : recentré sur l'absence de
    // licence logicielle récurrente (vs WordPress/Wix). Maintenance optionnelle depuis le 06/08/2026
    // (remplace le forfait 240€/an obligatoire) — le subtitle reflète l'optionnalité, corrigé 07/08.
    subtitle:
      'Sites internet et fiches Google pour les artisans et commerces d’Ariège. Pas de licence WordPress ou Wix à payer chaque mois — juste une maintenance claire et optionnelle, si vous en avez besoin.',
    zone: 'Toute l’Ariège (09)',
    contactZone: 'Basé à Mirepoix, interventions dans toute l’Ariège',
    phone: '06 33 24 69 70',
    email: 'presencelocale.contact@gmail.com',
    gmbUrl: 'https://share.google/80OCTHfwtmZeeYobB', // fiche confirmée par Mehdi le 26/07/2026
    instagram: 'https://www.instagram.com/ladalle_agence/',
    // Google Rendez-vous, retenu le 07/08/2026 (plutôt que Calendly — gratuit, déjà lié au Gmail
    // utilisé partout sur le site). Créneau de qualification "audit gratuit", 20 min, par téléphone.
    bookingUrl: 'https://calendar.app.google/zcyuxQ4rZrj56Ywr5',
  },

  // Hero direction "1b" — repère chiffré + vignette avant/après (Hero.jsx).
  // "avant" reste illustratif (pas de vraie capture disponible) ; "après" est la vraie fiche
  // Google Chape Liquide Occitanie (src/assets/proof/gmb-chape-liquide-apres.*, fournie 02/08/2026).
  hero: {
    // Remplace "2 chantiers signés en 60 jours" (03/08/2026, sur demande de Mehdi) : chiffre basé
    // sur les interactions Google Business datées de Chape Liquide Occitanie (7 en juin → 31 en
    // juillet 2026, cf. commentaire sur la carte Preuve sociale ci-dessous) plutôt qu'une conversion
    // ponctuelle non reconductible tel quel.
    repere: 'Interactions fiche Google ×4 en 1 mois',
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
  // formalise le bilan à 60 jours (gratuit, unique, automatique — pas 180j/365j) + la maintenance
  // en option (25€/mois ou 250€/an, modèle révisé le 06/08/2026, remplace le 240€/an obligatoire).
  apresLivraison: {
    kicker: 'Et après la livraison',
    titre: 'On ne disparaît pas une fois payés.',
    etapes: [
      {
        repere: 'Étape 1 — jour 60',
        titre: 'Bilan à 60 jours',
        description:
          'On regarde ensemble ce que le site et la fiche Google ont réellement généré — et on ajuste ce qui doit l’être. Gratuit et automatique, quel que soit votre choix ensuite.',
      },
      {
        repere: 'En option',
        titre: 'Maintenance, si vous la voulez',
        description:
          'Mises à jour, sécurité, fiche Google surveillée — 25 €/mois ou 250 €/an, sans engagement, un interlocuteur unique tant que vous restez client.',
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

  // Page /mentions-legales. Immatriculation RNE confirmée le 06/08/2026 (attestation INPI) :
  // SIREN 880 603 865 réactivé (même personne physique, cf. règle SIRENE), SIRET établissement
  // 88060386500036, activité libérale non réglementée. legalName confirmé par courrier URSSAF
  // du 10/07/2026 puis attestation INPI du 06/08/2026.
  legal: {
    legalName: 'Mehdi Courtinat',
    tradeName: 'La Dalle',
    legalForm: 'Entreprise individuelle',
    siret: '880 603 865 00036',
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
  // Réécrit le 03/08/2026 sur le nouveau positionnement (chantier Refonte Business, 30/07) :
  // message central "on ne livre pas un site, on fait venir des clients — et on reste après",
  // porté par 3 piliers (preuve pas promesse / suivi dans la durée / local et humain). Titre
  // renommé "Notre promesse" pour ne pas doublonner le h1 de la page /methode ("Pourquoi La
  // Dalle, et comment ça se passe."). Vocabulaire volontairement raccordé au reste du site :
  // "résultats, pas des captures d'écran" (Preuve sociale), "on ne disparaît pas une fois payés"
  // (Et après la livraison), "carreleur de métier" (Fondateur).
  pitch: {
    title: 'Notre promesse',
    paragraphs: [
      "Beaucoup d’agences livrent un site et disparaissent le jour du virement. Nous, on ne vend pas un site : on fait venir des clients à votre activité, et on reste pour que ça continue de marcher.",
      "On ne vous demande pas de nous croire sur parole. Chape Liquide Occitanie est passé d’aucune présence en ligne à plus de 30 interactions sur sa fiche Google et 60 clics vers son site — des chiffres qu’on vous montre, pas des captures triées sur le volet. Décrocher le chantier ensuite, ça reste vous : on amène les clients jusqu’à votre porte, pas au-delà. La preuve avant la promesse, sur chaque site qu’on livre.",
      "La Dalle, c’est un duo basé à Mirepoix, avec un pied dans le bâtiment — carreleur de métier côté technique. On sait comment vos clients choisissent un artisan ou un commerce, parce qu’on est du terrain : joignables, pas une boîte anonyme à l’autre bout du pays.",
      "Le site vous appartient — aucune licence logicielle à payer chaque mois, aucun engagement sur plusieurs années. Un bilan gratuit et automatique à 60 jours vous montre noir sur blanc ce que ça a changé, et une maintenance optionnelle (hébergement, nom de domaine, petites modifications) reste disponible si vous la souhaitez. Un seul interlocuteur, du premier échange à la maintenance.",
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

  // Offre restructurée en 2 axes (au lieu de 3 catégories par secteur), décision actée le 30/07/2026
  // dans le chantier Refonte Business, implémentée en code le 03/08/2026 (page dédiée /offres).
  offresIntro: 'Chaque site est chiffré sur mesure, selon votre activité et l’ampleur du projet — premier échange et devis gratuits, sans engagement.',
  offres: {
    axeA: {
      titre: 'Fiche Google Business',
      cible: 'Professions de santé réglementées',
      // Contrainte déontologique : ton factuel, jamais commercial — voir aussi le bilan 60j
      // formulé sobrement ("visibilité de la fiche", jamais "clients gagnés").
      description:
        'Optimisation de votre fiche Google Business, avec un ton factuel, sans pitch commercial — la profession impose de la sobriété, pas un argumentaire de vente.',
      inclus: [
        'Audit complet de votre fiche existante (horaires, photos, catégories, avis)',
        'Optimisation et mise à jour de tous les champs pertinents',
        'Bilan à 60 jours inclus, formulé sobrement : visibilité de la fiche, pas « clients gagnés »',
      ],
      // Tarif unique décidé le 03/08/2026 (plutôt que "Sur devis") : ~30 min de travail une fois
      // les documents fournis, un forfait expert clair plutôt qu'un tarif horaire ou un devis à attendre.
      prix: '150 €',
      recurrent: 'Suivi mensuel optionnel : 15 €/mois',
    },
    axeB: {
      titre: 'Site vitrine + Fiche Google',
      cible: 'Commerces, beauté, restauration et artisans du BTP',
      description:
        'Un seul package structuré, quel que soit votre secteur. Les artisans du BTP gardent leur spécificité — la galerie de chantiers avant/après — comme variante du même package, pas comme catégorie à part.',
      inclus: [
        'Site vitrine sur-mesure et optimisation de votre fiche Google Business',
        'Bilan gratuit à 60 jours, automatique pour tous — la preuve concrète de ce que ça a généré, pas juste une facture',
        'Maintenance en option, sans engagement : 25 €/mois ou 250 €/an (hébergement, nom de domaine, 2 modifications par mois)',
        'Artisans du BTP : galerie de chantiers avant/après en plus du site',
      ],
      // Passage en accroche basse "à partir de" (03/08/2026) plutôt qu'une fourchette complète —
      // reprend les mêmes planchers (500€/600€) que l'ancienne fourchette 500–700€/600–800€.
      prixCommerces: 'À partir de 500 €',
      prixBtp: 'À partir de 600 €',
      // Maintenance optionnelle depuis le 06/08/2026 (remplace le forfait 240€/an obligatoire) —
      // corrigé le 07/08 après incohérence relevée entre la page Refonte Business et le journal.
      recurrent: 'Maintenance en option : 25 €/mois ou 250 €/an, sans engagement',
    },
    // Monétisation du suivi tranchée le 30/07, prix fixé le 03/08 : le bilan à 60 jours reste
    // gratuit et unique (pas de 180j/365j inclus) — c'est ici, au-delà, que le suivi se monétise,
    // au même ordre de grandeur que le suivi optionnel de l'Axe A (15€/mois) pour un service
    // plus complet (trimestriel + ajustements, pas juste un suivi passif).
    suiviPremium: {
      titre: 'Suivi Premium',
      badge: 'Option',
      description:
        'Pour ceux qui veulent qu’on reste dessus au-delà du bilan gratuit à 60 jours : point trimestriel sur les résultats, ajustements réguliers de la fiche et du site. Le bilan à 60 jours, lui, reste gratuit et inclus dans tous les sites — le Suivi Premium ne le remplace pas, il continue après.',
      prix: '+20 €/mois',
      prixDetail: 'en plus de la maintenance incluse',
    },
  },

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
          'Bilan gratuit à 60 jours automatique. Si vous prenez la maintenance en option : hébergement, nom de domaine et 2 petites modifications par mois, traitées chaque début de mois.',
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
        'À partir de 500 € pour un commerce ou un institut de beauté, à partir de 600 € pour un artisan du BTP avec galerie chantiers — le chiffrage précis se fait après un premier échange, pas en tarif générique en ligne. Pour une fiche Google seule (professions de santé), c’est un tarif unique de 150 €. Ensuite, une maintenance optionnelle est proposée dès la livraison, sans engagement : 25 €/mois ou 250 €/an pour l’hébergement, le nom de domaine et 2 petites modifications par mois.',
    },
    {
      question: 'Pourquoi un site internet en plus de la fiche Google ?',
      reponse:
        'La fiche Google fait apparaître votre activité dans les recherches et sur la carte — c’est souvent le premier contact avec un client. Elle ne montre pas tout : pas de galerie de chantiers, pas de place pour détailler vos services, pas de mentions légales. Le site prend le relais une fois le clic fait : il montre le travail réel, répond aux questions qui restent, et capte une demande même en dehors des horaires d’ouverture. Les deux se complètent, c’est pour ça qu’ils ne sont pas séparés dans l’offre — sauf pour les professions de santé, où la fiche seule suffit.',
    },
    {
      question: 'Le bilan à 60 jours, qu’est-ce que c’est concrètement ?',
      reponse:
        'Un point gratuit, unique et automatique pour tous nos clients, 60 jours après la mise en ligne : ce que votre fiche Google et votre site ont réellement généré (vues, appels, demandes), présenté simplement avec les captures à l’appui. Il n’est pas conditionné à la maintenance — c’est la preuve concrète que ça marche, pas juste une promesse de départ.',
    },
    {
      question: 'Qu’est-ce que le Suivi Premium ?',
      reponse:
        'Une option payante pour ceux qui veulent qu’on reste dessus après le bilan gratuit à 60 jours : un point trimestriel sur les résultats et des ajustements réguliers de la fiche et du site. Le bilan à 60 jours reste gratuit pour tous, que vous preniez cette option ou non.',
    },
    {
      question: 'Faut-il payer un abonnement mensuel ?',
      reponse:
        'Non, aucun abonnement obligatoire ni engagement sur plusieurs années : le site vous appartient. Une maintenance est proposée en option (25 €/mois ou 250 €/an, sans engagement) pour l’hébergement, le nom de domaine et les petites modifications — vous restez libre de ne pas la prendre.',
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
        'Vous n’êtes pas laissé dans la nature : un bilan gratuit à 60 jours est automatique, et une maintenance optionnelle (hébergement, nom de domaine, 2 petites modifications par mois) reste disponible si vous la souhaitez — un seul interlocuteur, du premier échange à la maintenance.',
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
      // - Fiche Google Business (survol du graphique "Interactions") : 7 en juin 2026 → 31 en juillet 2026
      //   — repris dans "stat" ci-dessous (remplace "2 chantiers signés en 60 jours", sur demande du
      //   03/08/2026 : preuve reconductible plutôt que conversion ponctuelle).
      // Chiffres 574 vues/101 recherches non repris : fenêtre non confirmée au même niveau de détail.
      description: 'Position moyenne 8,5 sur « chape liquide », avec un CTR de 5 % — au-dessus de la moyenne du secteur à ce rang.',
      image: 'chape-liquide-occitanie/screenshot.jpg',
      url: 'https://chapeliquide-occitanie.fr',
      stat: 'Interactions fiche Google ×4 en 1 mois',
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
