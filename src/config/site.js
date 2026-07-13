// Contenu du site — seul fichier à modifier pour ajuster les textes, prix ou réalisations
const site = {
  business: {
    name: 'Présence Locale',
    tagline: 'Sites vitrines et fiches Google Business, pour les commerces et artisans d’Ariège',
    zone: 'Mirepoix, Pamiers, Lavelanet et alentours',
    contactZone: 'Basé à Mirepoix, interventions dans tout le bassin Mirepoix–Pamiers–Lavelanet',
    phone: '06 33 24 69 70',
    email: 'presencelocale.contact@gmail.com',
    gmbUrl: 'https://share.google/pNxdyBOAaUnvbGklo',
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

  // Avis client réel affiché en hero, à côté du mockup du même client (Chape Liquide
  // Occitanie) — même client sur les deux preuves plutôt que deux preuves séparées.
  testimonial: {
    quote: 'Je suis très satisfait de ces services au top',
    author: 'Cyril Balussou',
    role: 'EURL Chape Liquide Occitanie',
    source: 'Avis Google',
  },

  pitch: {
    title: 'Pourquoi Présence Locale',
    paragraphs: [
      "Avec mon conjoint, nous nous lançons dans une nouvelle aventure entrepreneuriale, en parallèle de nos emplois actuels.",
      "De mon côté, je débute une formation d’aide-soignante, et mon conjoint exerce le métier de carreleur. Cette expérience du terrain nous a donné envie d’aider les artisans, commerçants et entreprises à développer leur visibilité.",
      "Nous proposons la création de fiches Google Business Profile, ainsi que la conception de sites internet professionnels, afin de permettre aux entreprises de gagner en visibilité, d’attirer de nouveaux clients et de mettre en valeur leur savoir-faire.",
      "Notre objectif est de proposer un accompagnement simple, efficace et accessible, adapté aux besoins des professionnels de tous les secteurs.",
      "N’hésitez pas à nous contacter pour échanger sur votre projet. Nous serons ravis de vous accompagner dans le développement de votre présence en ligne !",
    ],
    whyNotWordpress: {
      title: 'Pourquoi pas WordPress ou Webflow',
      points: [
        'Un site sur-mesure, livré en quelques jours, pas en semaines.',
        'Pas d’abonnement mensuel obligatoire à un CMS — juste l’hébergement.',
        'Un code propre et rapide, pensé pour être trouvé sur Google et consulté sur mobile.',
      ],
    },
    beyondTheSite: {
      title: 'Au-delà du site',
      description:
        'Le développement ne s’arrête pas à la vitrine et à la fiche Google : je peux aussi construire des outils internes sur-mesure pour simplifier votre gestion au quotidien — un tableau de suivi de chantiers, une automatisation de devis récurrents, un petit panneau d’administration... Un besoin précis en tête ? On en discute, ce n’est pas un tarif figé.',
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
        benefit: 'Vos horaires, tarifs ou infos pratiques modifiables vous-même via un panneau simple, sans me solliciter à chaque changement.',
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
      prix: '80–150 €',
      recurrent: '15–20 €/mois (optionnel)',
    },
    {
      niveau: 2,
      titre: 'Site vitrine + Fiche Google',
      cible: 'Commerces, beauté, restauration',
      description: 'Site vitrine sur-mesure et optimisation de votre fiche Google Business.',
      prix: '300–400 €',
      recurrent: '15–25 €/mois',
    },
    {
      niveau: 3,
      titre: 'Site + Galerie chantiers + Fiche Google',
      cible: 'Artisans du BTP',
      description: 'Site vitrine, galerie de chantiers avant/après, et optimisation de votre fiche Google Business.',
      prix: '400–600 €',
      recurrent: '15–25 €/mois',
    },
  ],

  // Pas de prix affiché volontairement — capte les demandes hors offres standards, ne vend pas en autonomie
  besoinSpecifique: {
    titre: 'Besoin spécifique ?',
    description: 'Projet technique particulier, demande hors des offres standards ? Contactez-nous, on étudie toute proposition.',
    cta: 'Me contacter',
  },

  // À peupler au fur et à mesure des livraisons — jamais de faux exemple ici
  // type 'site' : capture + lien vers un site en ligne (image relative à src/assets/realisations/)
  // type 'before-after' : galerie chantier avant/après (before/after relatifs à src/assets/realisations/)
  realisations: [
    {
      type: 'site',
      title: 'Chape Liquide Occitanie',
      badge: 'Réalisé par Mehdi — hors offre standard Présence Locale',
      description: 'Site vitrine développé et livré par Mehdi pour EURL Chape Liquide Occitanie, en ligne.',
      image: 'chape-liquide-occitanie/screenshot.jpg',
      url: 'https://chapeliquide-occitanie.fr',
    },
  ],
}

export default site
