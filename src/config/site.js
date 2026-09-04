// Contenu du site — seul fichier à modifier pour ajuster les textes, prix ou réalisations
const site = {
  // Identifiant dans la table `site_content` mutualisée (projet Supabase presence-locale-agence) —
  // sert de bac à sable pour tester le panneau admin (presence-locale-admin/) avec le compte
  // Google de Mehdi avant de l'ouvrir à de vrais clients.
  supabaseSiteId: 'ladalle-agence',
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
  // en option, tarif différencié par niveau depuis le 27/08/2026 (250€/an commerces, 300€/an BTP).
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
          'Mises à jour, sécurité, fiche Google surveillée — 250 €/an pour un commerce, 300 €/an pour un artisan du BTP, sans engagement, un interlocuteur unique tant que vous restez client.',
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
        'Chevalet neutre inclus : un QR code renvoie vers votre fiche, sans inciter à laisser un avis',
        'Bilan à 60 jours inclus, formulé sobrement : visibilité de la fiche, pas « clients gagnés »',
      ],
      // Tarif unique décidé le 03/08/2026 (~30 min de travail une fois les documents fournis, un
      // forfait expert clair plutôt qu'un tarif horaire). Passé de 150€ à 190€ le 07/08/2026 pour
      // intégrer le chevalet neutre désormais inclus (voir décision Supports physiques QR code,
      // journal Notion 06/08 puis 07/08).
      prix: '190 €',
      recurrent: 'Suivi mensuel optionnel : 15 €/mois',
    },
    axeB: {
      titre: 'Site vitrine + Fiche Google',
      cible: 'Commerces, beauté, restauration et artisans du BTP',
      description:
        'Un seul package structuré, quel que soit votre secteur. Les artisans du BTP gardent leur spécificité — la galerie de chantiers avant/après — comme variante du même package, pas comme catégorie à part.',
      inclus: [
        'Site vitrine sur-mesure et optimisation de votre fiche Google Business',
        'Supports imprimés inclus, adaptés à votre activité : chevalet pour un commerce ou un point fixe, flyers et cartes de visite pour un artisan sur les chantiers',
        'Bilan gratuit à 60 jours, automatique pour tous — la preuve concrète de ce que ça a généré, pas juste une facture',
        'Maintenance en option, sans engagement : détail et tarif juste en dessous, selon votre activité',
        'Artisans du BTP : galerie de chantiers avant/après en plus du site',
      ],
      // Grille figée en prix fixe le 27/08/2026 (session de cadrage pricing, voir doc Notion
      // "Fiches-produits — La Dalle") : remplace la fourchette basse "à partir de 500€/600€" du
      // 03/08 — le scope du forfait de base est maintenant borné au millimètre (pages, révisions,
      // délai), la fourchette n'était plus justifiée.
      prixCommerces: '790 €',
      prixBtp: '990 €',
      // Modèle de maintenance différencié par niveau depuis le 27/08/2026 (remplace le tarif unique
      // "25€/mois ou 250€/an" du 06-07/08, jamais différencié BTP/commerce jusqu'ici). Deux
      // temporalités : signée dès le devis (prix réduit, domaine inclus) ou à la carte plus tard
      // (prix plein, domaine facturé à part) — incite à trancher à la signature, cohérent avec le
      // constat terrain que le BTP sollicite plus de petites modifs post-livraison (Finn Elec,
      // Mirepoix Matériaux).
      recurrent:
        'Signée dès le devis : +200 € (commerces) ou +250 € (BTP), nom de domaine inclus — sinon 250 €/an (commerces) ou 300 €/an (BTP) à la carte plus tard, sans engagement.',
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

  // Blocs add-ons/modalités, versés dans le code le 28/08/2026 à partir du doc Notion
  // "Fiches-produits — La Dalle" (grille figée le 27/08) : ces éléments existaient déjà en pricing
  // interne mais n'avaient jamais été rendus publics sur /offres. Rendus par OffreAddOns.jsx.
  offresAddOns: {
    titre: 'Ce qui s’ajoute au forfait de base, si besoin',
    intro:
      'Un site vitrine Ariège tient rarement en une seule page pour tout le monde : voici ce qui se chiffre en plus, avec le même principe qu’ailleurs sur le site — un prix fixe, pas une fourchette.',
    extensionMultipage: {
      titre: 'Plusieurs pages plutôt qu’une seule',
      badge: 'Extension',
      description:
        'Le forfait de base tient sur une landing page à sections. Si vous voulez des pages séparées — une URL et un référencement propres à chacune, par exemple Accueil, Services et Contact distincts, ou une page dédiée par prestation — chaque page ajoutée reste chiffrée à l’unité : rédaction avec la même méthode de mots-clés locaux, mise en page cohérente avec le reste du site, un tour de révision dédié en plus des deux tours du forfait de base. Comptez environ deux jours ouvrés de délai supplémentaire par page. Au-delà de trois pages ajoutées, ou dès qu’il faut préserver un système tiers existant (prise de rendez-vous, paiement en ligne) ou repenser une architecture par catégorie et par ville, on sort de ce tarif linéaire pour un devis dédié, entre 1500 et 3000 € et plus selon l’ampleur.',
      prix: '+150 €',
      prixDetail: 'par page ajoutée, jusqu’à 3 pages',
    },
    identiteVisuelle: {
      titre: 'Pas encore de logo ou de charte graphique ?',
      badge: 'Add-on',
      description:
        'Les forfaits Niveau 2 et 3 partent du principe que vous avez déjà une identité exploitable — un logo, des couleurs qui tiennent debout. Si ce n’est pas le cas, cette étape se règle avant que le design du site puisse démarrer : le site en dépend directement.',
      formules: [
        {
          nom: 'Palette et typographie seules',
          description: 'Vous avez déjà un logo ou un nom posé, il manque juste des couleurs et une police cohérentes.',
          prix: '150 €',
          revisions: '2 tours de révision inclus',
        },
        {
          nom: 'Identité complète',
          description: 'Logo, palette et typographie créés de zéro, à partir de votre activité et de ce qui vous différencie.',
          prix: '350 €',
          revisions: '3 tours de révision inclus',
        },
      ],
      note: 'Au-delà des tours inclus : +50 € par tour supplémentaire.',
    },
    autres: [
      {
        titre: 'Version bilingue du site',
        description: 'Traduction complète en anglais, déjà livrée pour un artisan de la zone.',
        prix: '200 €',
      },
      {
        // Prix figé le 03/09/2026 (remplace "Sur devis") : tâche bornée/admin (recopier les infos
        // sur 4 fiches), pas créative — cohérent avec le principe "prix fixe partout" de la grille.
        // Passage en devis dédié réservé au cas rare d'une fiche existante à récupérer/fusionner.
        titre: 'Cohérence sur les annuaires locaux',
        description: 'PagesJaunes, Waze, Apple Maps, Yelp : mêmes horaires et coordonnées partout, pas seulement sur Google.',
        prix: '80 €',
      },
    ],
    modalites: {
      titre: 'Bon à savoir avant de signer',
      items: [
        'Nom de domaine : 40 €/an (achat, renouvellement et configuration technique) — facturé à part, sauf si la maintenance est signée dès le devis initial, où il est inclus sans supplément.',
        'Acompte de 50 % à la signature du devis, solde à la livraison — devis signé obligatoire avant tout début de travail.',
      ],
    },
  },

  // Fiches produits par secteur — page /fiches-produits (04/09/2026), lien direct envoyé par
  // Mehdi en RDV/SMS : pas dans le menu, pas liée depuis /offres. Ton factuel type devis, pas
  // commercial comme /offres. Contenu transcrit de l'Artifact "La Dalle — Offres & Tarifs"
  // (03/09/2026), qui sert de brief. Les prix ne sont JAMAIS dupliqués ici : le composant
  // SecteurTabs lit directement site.offres pour les montants — cette clé ne porte que les
  // inclus/exclus et repères factuels propres à chaque secteur.
  fichesProduits: {
    kicker: 'Fiche produit',
    titre: 'Ce qui est inclus, secteur par secteur.',
    intro: 'Le détail exact de chaque prestation, sans argumentaire commercial — pour comparer avant de signer.',
    secteurs: {
      commerces: {
        label: 'Commerces & beauté',
        cible: 'Coiffure, esthétique, restauration, commerces de proximité',
        inclus: [
          'Site vitrine une page, 4 à 6 sections (accueil, présentation, services ou menu, galerie photo, avis, contact)',
          'Adapté mobile et ordinateur',
          'Fiche Google Business optimisée pour les recherches locales',
          'Textes rédigés sur mesure à partir de ce que vous fournissez — pas de texte tout fait',
          '2 séries de retouches incluses (textes + mise en page)',
          'Formulaire de contact',
          'QR code avis Google personnalisé, avec chevalet à poser en caisse ou à l’accueil',
        ],
        exclus: [
          'Pages séparées supplémentaires',
          'Retouches au-delà des 2 séries incluses',
          'Photos professionnelles (vous les fournissez, sauf accord contraire)',
          'Maintenance après la 1re année',
        ],
      },
      btp: {
        label: 'Artisans BTP',
        cible: 'Carrelage, maçonnerie, plomberie, électricité, paysage',
        inclus: [
          'Site vitrine une page, 4 à 6 sections (accueil, services, galerie chantiers avant/après, avis, contact/devis)',
          'Galerie chantiers : jusqu’à 10 photos avant/après incluses, optimisées pour Google',
          'Adapté mobile et ordinateur',
          'Fiche Google Business optimisée pour les recherches locales',
          'Textes rédigés sur mesure',
          '2 séries de retouches incluses',
          'Formulaire de demande de devis',
          'QR code avis Google + flyers et cartes de visite (chevalet en plus si dépôt ou bureau)',
        ],
        exclus: [
          'Photos au-delà des 10 incluses — supplément par lot, à définir ensemble',
          'Pages séparées supplémentaires',
          'Retouches au-delà des 2 séries incluses',
          'Prise de photo sur chantier (vous fournissez les photos)',
          'Maintenance après la 1re année',
        ],
      },
      sante: {
        label: 'Professions de santé',
        cible: 'Professions de santé réglementées — ton factuel, jamais commercial',
        inclus: [
          'Audit complet de votre fiche Google existante (horaires, photos, catégories, avis)',
          'Optimisation et mise à jour de tous les champs pertinents',
          'Chevalet neutre inclus : le QR code renvoie vers votre fiche, sans jamais inciter à laisser un avis',
          'Bilan à 60 jours inclus, formulé sobrement — la visibilité de la fiche, jamais « des clients gagnés »',
        ],
        exclus: [
          'Site vitrine — si vous en voulez un, voir Commerces & beauté',
          'Suivi au-delà du bilan à 60 jours — 15 €/mois à la carte',
          'Aucune sollicitation d’avis ni superlatif dans les textes : la déontologie de votre profession l’impose, pas une option',
        ],
      },
    },
    facts: [
      { label: 'Délai', valeur: '5 à 10 jours ouvrés à réception de vos textes et photos' },
      { label: 'Paiement', valeur: '50 % à la signature, solde à la livraison' },
      { label: 'Engagement', valeur: 'Devis signé avant de commencer, pas d’abonnement forcé' },
      { label: 'Propriété', valeur: 'Le site vous appartient — code et hébergement transférables si besoin' },
    ],
  },

  // Supports physiques inclus dans chaque prestation, sans ligne facturée à part (décision actée
  // le 06/08/2026, prix Axe A/B ajustés le 07/08). Deux chevalets distincts et volontairement pas
  // interchangeables : neutre pour la santé (contrainte déontologique — jamais d'incitation à
  // l'avis, confirmée notamment pour les ostéopathes) et avis Google pour le commerce.
  supportsPhysiques: {
    titre: 'Un objet dans la vraie vie, pas juste un lien',
    intro:
      'Chaque prestation inclut un support imprimé adapté à votre activité, sans ligne facturée à part — chevalet gravé pour un commerce ou une fiche Google seule, flyers et cartes de visite pour un artisan qui travaille sur les chantiers.',
    items: [
      {
        id: 'chevaletNeutre',
        alt: 'Chevalet en bois avec plaque gravée et QR code neutre, pour une fiche Google professions de santé',
        legende: 'Professions de santé : le QR renvoie uniquement vers votre fiche, jamais vers une demande d’avis.',
      },
      {
        id: 'chevaletAvisGoogle',
        alt: 'Chevalet en bois avec plaque gravée QR code et NFC vers les avis Google',
        legende: 'Commerces : QR et NFC vers vos avis Google, posé en caisse ou à l’accueil.',
      },
      {
        id: 'flyerBtp',
        alt: 'Flyers imprimés avec QR code pour recueillir un avis en fin de chantier',
        legende: 'Artisans du BTP : remis en fin de chantier pour recueillir un retour à chaud.',
      },
      {
        id: 'carteVisiteBtp',
        alt: 'Cartes de visite avec QR code pour un artisan du BTP',
        legende: 'Artisans du BTP : glissées à chaque échange, avec le même QR que sur le chantier.',
      },
    ],
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
        'Un prix fixe, pas une fourchette : 790 € pour un commerce ou un institut de beauté, 990 € pour un artisan du BTP avec galerie chantiers avant/après. Ce prix couvre le site, l’optimisation de votre fiche Google et deux tours de révision. Pour une fiche Google seule (professions de santé), c’est un tarif unique de 190 €, chevalet neutre inclus. Une maintenance optionnelle est ensuite proposée, sans engagement : 250 €/an pour un commerce, 300 €/an pour un artisan du BTP — moins cher si elle est signée dès le devis initial plutôt que prise à la carte plus tard.',
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
        'Non, aucun abonnement obligatoire ni engagement sur plusieurs années : le site vous appartient. Une maintenance est proposée en option, sans engagement — 250 €/an pour un commerce, 300 €/an pour un artisan du BTP, hébergement et nom de domaine compris — vous restez libre de ne pas la prendre.',
    },
    {
      question: 'Et si j’ai besoin de plusieurs pages, ou pas encore de logo ?',
      reponse:
        'Le forfait de base tient sur une landing page à sections. Si vous préférez des pages séparées (Accueil, Services, Contact en pages distinctes, par exemple), chaque page ajoutée coûte 150 € de plus, jusqu’à 3 pages. Si vous n’avez pas encore de logo ou de charte graphique exploitable, on peut la créer avant de démarrer le site : 150 € pour une palette et une typographie sur un logo déjà existant, 350 € pour une identité complète créée de zéro.',
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
    {
      type: 'site',
      title: 'Finn Elec',
      badge: 'Site vitrine + fiche Google · Électricien',
      description: 'Électricité générale, climatisation et éclairage sur mesure — diagnostic sur place avant devis.',
      image: 'finn-elec/screenshot.jpg',
      url: 'https://finn-elec.fr',
    },
    {
      type: 'site',
      title: 'EURL Cyrille Peinture',
      badge: 'Site + galerie chantiers — Artisan peintre',
      description: 'De la peinture classique à la fresque sculptée, chaque chantier suivi de près.',
      image: 'cyrille-peinture/screenshot.jpg',
      url: 'https://cyrille-peinture.fr',
    },
  ],
}

export default site
