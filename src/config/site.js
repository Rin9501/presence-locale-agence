// Contenu du site — seul fichier à modifier pour ajuster les textes, prix ou réalisations
const site = {
  business: {
    name: 'Luora',
    // H1 orienté résultat client ; le descriptif de l'activité vit dans subtitle
    tagline: 'Vos clients vous cherchent sur Google. Faites-vous trouver.',
    // Reprend la "ligne site — hero" de la charte Luora : dit quoi/où/pour qui + plante le moat (ex-artisan, joignable)
    subtitle:
      'Sites internet et fiches Google pour les artisans de l’Ariège. Par un ancien du métier, qui répond quand vous appelez.',
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

  // Page /mentions-legales. Situation au 17/07/2026 : auto-entreprise de Mehdi en cours de
  // radiation (effective le 10/08/2026), nouvelle immatriculation prévue ensuite avec le bon
  // code APE. legalName et siret laissés vides d'ici là — la page s'adapte automatiquement
  // (aucun champ vide affiché). ⚠️ Dès la réimmatriculation : remplir legalName, legalForm,
  // siret et registeredAddress avec les infos officielles.
  legal: {
    legalName: 'Mehdi Courtinat', // confirmé par courrier URSSAF du 10/07/2026
    tradeName: 'Luora',
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
    title: 'Pourquoi Luora',
    paragraphs: [
      "Le bouche-à-oreille fait vivre un commerce ou un artisan — mais aujourd’hui, il commence sur Google. Avant d’appeler, vos futurs clients tapent votre métier et votre ville : ceux qu’ils trouvent décrochent le chantier ou le rendez-vous.",
      "Luora, c’est un duo basé à Mirepoix, avec un pied dans le bâtiment — carreleur de métier côté technique. Nous savons comment vos clients choisissent un artisan ou un commerce, et ce qu’ils regardent avant de se décider.",
      "Nous optimisons votre fiche Google Business et construisons votre site vitrine sur-mesure : des textes écrits pour votre métier et votre zone, vos vraies photos et vos vrais avis — pas un modèle générique rempli à la chaîne.",
      "Et après la livraison, vous n’êtes pas lâché dans la nature : hébergement, nom de domaine et petites modifications sont couverts par un forfait annuel clair. Un seul interlocuteur, du premier échange à la maintenance.",
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
      prix: '80–150 €',
      recurrent: 'Suivi mensuel optionnel : 15–20 €/mois',
    },
    {
      niveau: 2,
      titre: 'Site vitrine + Fiche Google',
      cible: 'Commerces, beauté, restauration',
      description: 'Site vitrine sur-mesure et optimisation de votre fiche Google Business.',
      prix: '300–400 €',
      recurrent: 'Puis 240 €/an tout compris : hébergement, nom de domaine et 2 modifications par mois',
    },
    {
      niveau: 3,
      titre: 'Site + Galerie chantiers + Fiche Google',
      cible: 'Artisans du BTP',
      description: 'Site vitrine, galerie de chantiers avant/après, et optimisation de votre fiche Google Business.',
      prix: '400–600 €',
      recurrent: 'Puis 240 €/an tout compris : hébergement, nom de domaine et 2 modifications par mois',
    },
  ],

  // Sous-titre de la section offres — jamais de formulation qui avoue un manque de références
  offresIntro: 'Tarifs de lancement — devis gratuit, sans engagement.',

  // Parcours client en 4 étapes — répond aux objections pratiques (durée, engagement, après-vente)
  process: {
    title: 'Comment ça se passe',
    steps: [
      {
        titre: 'On échange',
        description:
          'Par SMS, téléphone ou autour d’un café : votre activité, ce que vous avez déjà (photos, logo, avis) et ce qu’il vous manque.',
      },
      {
        titre: 'Vous voyez une maquette',
        description:
          'Nous construisons une première version de votre site et vous envoyons le lien. Vous validez — ou on ajuste — avant tout engagement.',
      },
      {
        titre: 'Livraison en quelques jours',
        description:
          'Site en ligne, fiche Google optimisée, mentions légales en règle. Rien n’est publié sans votre accord.',
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
      question: 'Combien coûte un site vitrine avec Luora ?',
      reponse:
        'Entre 300 et 600 € selon votre activité (commerce, beauté, artisan du BTP), en tarif de lancement. Ensuite, un forfait annuel unique de 240 € couvre l’hébergement, le nom de domaine et 2 petites modifications par mois — pas d’abonnement mensuel.',
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
      question: 'Intervenez-vous en dehors de Mirepoix ?',
      reponse:
        'Oui, dans tout le bassin Mirepoix–Pamiers–Lavelanet et les alentours. Le premier échange se fait par SMS, téléphone ou autour d’un café, où que vous soyez dans cette zone.',
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
      badge: 'Site vitrine — Artisan BTP',
      description: 'Site vitrine développé par Mehdi (Luora) pour l’EURL Chape Liquide Occitanie, en ligne.',
      image: 'chape-liquide-occitanie/screenshot.jpg',
      url: 'https://chapeliquide-occitanie.fr',
    },
  ],
}

export default site
