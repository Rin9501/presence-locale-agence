// Contenu du site — seul fichier à modifier pour ajuster les textes, prix ou réalisations
const site = {
  // Identifiant dans la table `site_content` mutualisée (projet Supabase presence-locale-agence) —
  // sert de bac à sable pour tester le panneau admin (presence-locale-admin/) avec le compte
  // Google de Mehdi avant de l'ouvrir à de vrais clients.
  supabaseSiteId: 'ladalle-agence',
  business: {
    name: 'La Dalle',
    // Reformulé le 29/09/2026 (offre unique) : "Trouvé en 60 jours" se lisait comme une promesse de
    // résultat. Le H1 affiché est écrit en dur dans Hero.jsx (mise en forme sur 3 lignes).
    tagline: 'Introuvable sur Google ? On mesure votre fiche au jour 0, on la compare au jour 60.',
    // Réécrit le 29/09/2026 pour l'offre unique : cible artisans du bâtiment Ariège + Aude,
    // suivi inclus (plus de "maintenance optionnelle").
    subtitle:
      'Fiche Google et site vitrine pour les artisans du bâtiment d’Ariège et de l’Aude qui manquent de demandes. On installe tout, on tient votre fiche à jour chaque mois, on répond à vos avis : vous restez sur vos chantiers.',
    zone: 'Toute l’Ariège (09)',
    contactZone: 'Basés à Mirepoix, on intervient jusqu’à 50 km par la route, en Ariège et dans l’Aude',
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
    // Daté le 21/09/2026, même raison que la carte Réalisations : « ×4 en 1 mois » sans fenêtre de
    // mesure se lit comme un régime permanent. Sur les deux autres clients mesurés ce jour-là
    // (Idriss, Victoria), la courbe d'interactions redescend après le pic de mise en ligne — donc
    // un multiplicateur non daté est trompeur par construction. Chiffre inchangé, fenêtre affichée.
    repere: 'Fiche Google : 7 interactions en juin, 31 en juillet 2026',
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

  // Section "Et après la mise en ligne" (ApresLivraisonSection.jsx) — réécrite le 29/09/2026 pour
  // l'offre unique : bilan 60 jours comparé au jour 0 (+ garantie de continuation) et suivi inclus,
  // à la place de la maintenance optionnelle 250/300 €/an.
  apresLivraison: {
    kicker: 'Et après la mise en ligne',
    titre: 'On ne disparaît pas une fois payés.',
    etapes: [
      {
        repere: 'Jour 0 → jour 60',
        titre: 'Bilan à 60 jours, comparé au jour 0',
        description:
          'Le jour où on commence, on fait des captures datées de votre fiche Google. À 60 jours, on refait les mêmes et on les pose côte à côte. Si la fiche n’a pas progressé, on continue à nos frais jusqu’à ce qu’elle progresse.',
      },
      {
        repere: 'Toute l’année',
        titre: 'Le suivi, compris dans l’offre',
        description:
          'Une mise à jour de la fiche chaque mois, une réponse à chaque avis, deux petites modifications du site par mois et un point chiffré tous les trois mois. Domaine et hébergement compris. Vous nous envoyez vos photos de chantier, on s’occupe du reste.',
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

  // Zone d'intervention détaillée (nouveau composant ZoneInterventionSection.jsx, 04/09/2026) —
  // vient renforcer business.zone ("Toute l'Ariège"), ne le remplace pas. Liste construite comme
  // pour mirepoix-materiaux (commit eb955ec, 03/09/2026) : communes des départements 09/11/31
  // (geo.api.gouv.fr, population ≥ 800 habitants) dont la distance ROUTIÈRE réelle depuis Mirepoix
  // (API de routage OSRM, pas à vol d'oiseau — la zone est vallonnée, l'écart dépasse souvent
  // 10-15km) est ≤ 50km, triées par distance croissante. Si Mehdi veut aligner un jour les zones
  // de service de sa fiche Google Business sur cette liste, se limiter aux ~20 premières
  // (limite Google : 20 zones de service maximum) — cette liste-ci, plus complète, sert le site
  // et le JSON-LD (LocalBusinessSchema.jsx), pas la fiche GMB directement.
  zoneIntervention: {
    radiusKm: 50,
    eyebrow: 'Zone d’intervention',
    titre: 'Toute l’Ariège, et au-delà si la route le permet.',
    intro:
      'Basés à Mirepoix, on se déplace dans tout le département — et dans les communes limitrophes de l’Aude et de la Haute-Garonne, tant que le trajet reste raisonnable. Le repère retenu : 50 km par la route depuis Mirepoix, pas à vol d’oiseau.',
    featured: [
      'Pamiers',
      'Foix',
      'Lavelanet',
      'Saverdun',
      'Mazères',
      'Varilhes',
      'Laroque-d’Olmes',
      'La Tour-du-Crieu',
      'Verniolle',
      'Castelnaudary',
      'Limoux',
      'Bram',
      'Chalabre',
      'Fanjeaux',
      'Montréal',
      'Calmont',
      'Avignonet-Lauragais',
    ],
    closingNote: 'Une commune plus loin sur la liste, ou pas dedans du tout ? Dites-nous où vous êtes, on vous confirme si ça reste jouable.',
    // Liste complète triée par distance croissante — alimente le bloc dépliable de
    // ZoneInterventionSection.jsx et le areaServed du JSON-LD (LocalBusinessSchema.jsx).
    communes: [
      { nom: 'Les Pujols', dept: '09', km: 18.6 },
      { nom: 'Laroque-d’Olmes', dept: '09', km: 19.1 },
      { nom: 'Fanjeaux', dept: '11', km: 22.2 },
      { nom: 'Lavelanet', dept: '09', km: 23.0 },
      { nom: 'Belpech', dept: '11', km: 24.3 },
      { nom: 'Belvèze-du-Razès', dept: '11', km: 24.6 },
      { nom: 'Verniolle', dept: '09', km: 24.9 },
      { nom: 'La Tour-du-Crieu', dept: '09', km: 25.7 },
      { nom: 'Chalabre', dept: '11', km: 25.7 },
      { nom: 'Villeneuve-d’Olmes', dept: '09', km: 26.8 },
      { nom: 'Villasavary', dept: '11', km: 27.5 },
      { nom: 'Varilhes', dept: '09', km: 28.6 },
      { nom: 'Saint-Jean-du-Falga', dept: '09', km: 29.3 },
      { nom: 'Montréal', dept: '11', km: 30.5 },
      { nom: 'Pamiers', dept: '09', km: 31.4 },
      { nom: 'Bram', dept: '11', km: 31.5 },
      { nom: 'Mazères', dept: '09', km: 31.6 },
      { nom: 'Rieux-de-Pelleport', dept: '09', km: 32.5 },
      { nom: 'Villeneuve-la-Comptal', dept: '11', km: 33.2 },
      { nom: 'Pexiora', dept: '11', km: 33.3 },
      { nom: 'Saint-Jean-de-Verges', dept: '09', km: 35.0 },
      { nom: 'Crampagna', dept: '09', km: 35.3 },
      { nom: 'Castelnaudary', dept: '11', km: 35.5 },
      { nom: 'Bonnac', dept: '09', km: 35.6 },
      { nom: 'Bélesta', dept: '09', km: 36.1 },
      { nom: 'Mas-Saintes-Puelles', dept: '11', km: 36.8 },
      { nom: 'Arzens', dept: '11', km: 37.0 },
      { nom: 'Villepinte', dept: '11', km: 37.2 },
      { nom: 'Saint-Martin-Lalande', dept: '11', km: 37.4 },
      { nom: 'Calmont', dept: '31', km: 38.2 },
      { nom: 'Lasbordes', dept: '11', km: 39.1 },
      { nom: 'Alzonne', dept: '11', km: 39.1 },
      { nom: 'Foix', dept: '09', km: 39.6 },
      { nom: 'Limoux', dept: '11', km: 39.9 },
      { nom: 'Alairac', dept: '11', km: 40.1 },
      { nom: 'Villesèquelande', dept: '11', km: 40.2 },
      { nom: 'Caux-et-Sauzens', dept: '11', km: 41.7 },
      { nom: 'Labastide-d’Anjou', dept: '11', km: 42.1 },
      { nom: 'Pieusse', dept: '11', km: 42.2 },
      { nom: 'Saint-Paul-de-Jarrat', dept: '09', km: 43.1 },
      { nom: 'Pezens', dept: '11', km: 43.7 },
      { nom: 'Lavalette', dept: '11', km: 44.2 },
      { nom: 'Saint-Papoul', dept: '11', km: 44.4 },
      { nom: 'Montgailhard', dept: '09', km: 44.6 },
      { nom: 'Avignonet-Lauragais', dept: '31', km: 45.1 },
      { nom: 'Gardouch', dept: '31', km: 45.9 },
      { nom: 'Montolieu', dept: '11', km: 46.2 },
      { nom: 'Moussoulens', dept: '11', km: 46.7 },
      { nom: 'Saverdun', dept: '09', km: 48.3 },
      { nom: 'Ventenac-Cabardès', dept: '11', km: 48.3 },
      { nom: 'Espéraza', dept: '11', km: 48.9 },
      { nom: 'Saissac', dept: '11', km: 48.9 },
    ],
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
      // Paragraphes 1, 2 et 4 revus le 29/09/2026 (offre unique) : "on fait venir des clients"
      // sonnait comme une promesse de résultat ; "60 clics vers son site" n'avait aucune source
      // traçable dans le code (remplacé par le chiffre daté 7 → 31 interactions, déjà sourcé plus bas).
      "Beaucoup d’agences livrent un site et disparaissent le jour du virement. Nous, on ne vend pas seulement un site : on tient votre fiche Google à jour toute l’année, et on vous montre, captures datées à l’appui, ce qui a bougé.",
      "On ne vous demande pas de nous croire sur parole. Chape Liquide Occitanie n’avait aucune présence en ligne ; sa fiche Google est passée de 7 interactions en juin 2026 à 31 en juillet — des chiffres qu’on vous montre, pas des captures triées sur le volet. Décrocher le chantier ensuite, ça reste vous : on amène les clients jusqu’à votre porte, pas au-delà. La preuve avant la promesse, sur chaque site qu’on livre.",
      "La Dalle, c’est un duo basé à Mirepoix, avec un pied dans le bâtiment — carreleur de métier côté technique. On sait comment un particulier choisit son électricien ou son plombier, parce qu’on est du terrain : joignables, pas une boîte anonyme à l’autre bout du pays.",
      "Un prix connu avant de signer, aucune licence logicielle à payer chaque mois. Le bilan à 60 jours compare votre fiche à ce qu’elle était le jour où on a commencé ; si elle n’a pas progressé, on continue à nos frais. Et si un jour vous arrêtez le suivi, le site et le nom de domaine vous sont transférés. Un seul interlocuteur, du premier appel au dernier point chiffré.",
    ],
    whyNotWordpress: {
      title: 'Pourquoi pas WordPress ou Wix',
      points: [
        'Un site sur-mesure, livré en quelques jours, pas en semaines.',
        'Pas de licence mensuelle à un CMS : l’hébergement est compris dans le suivi.',
        'Un code propre et rapide, pensé pour être trouvé sur Google et consulté sur mobile.',
      ],
    },
    // "Au-delà du site" (outils internes, panneau d'administration) retiré le 29/09/2026 :
    // hors offre unique, outillage gelé jusqu'au 31/10.
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
        // Réécrit le 29/09/2026 : l'ancien texte vendait le panneau admin, hors offre unique.
        benefit: 'Chaque demande envoyée depuis votre site est enregistrée en plus de l’email : aucune ne se perd si un message tombe en indésirables.',
      },
      {
        name: 'Netlify',
        role: 'L’hébergement',
        benefit: 'Le site est diffusé sur un réseau mondial de serveurs (CDN) — il s’affiche vite, même en 4G moyenne en Ariège.',
      },
    ],
    // "3 à 4 secondes" retiré le 29/09/2026 : chiffre sans source. Le seul chiffre affiché ici est
    // celui mesuré en direct par PerfBadge.jsx.
    comparison:
      'Un site WordPress charge son thème et ses extensions à chaque visite, même ceux dont la page ne se sert pas. Un site codé sur-mesure comme celui-ci ne charge que ce dont il a besoin — le temps ci-dessous est mesuré par votre navigateur, pas écrit à l’avance.',
  },

  // Offre unique v1, décidée le 29/09/2026 et gelée jusqu'au bilan du 31/10/2026. Source de vérité :
  // section « ⭐ OFFRE UNIQUE v1 » en tête de la page Notion « 📋 Fiches-produits — La Dalle ».
  // Remplace les deux axes du 03/08 (fiche seule santé 190 € / site + fiche 790-990 €), le Suivi
  // Premium, la maintenance à la carte et tous les add-ons (multipage, identité visuelle, bilingue,
  // annuaires). Les clients signés avant le 29/09 gardent ce qu'ils ont signé — voir CGV.
  //
  // Interdit partout (site, SMS, devis) : promettre une place (top 3, 1er…), un nombre d'appels,
  // de chantiers ou un chiffre d'affaires — Google classe selon l'endroit d'où on cherche.
  // Garantie et exclusivité : formulations de Mehdi, à reprendre MOT POUR MOT, au tutoiement et à
  // la 1re personne, affichées comme une citation signée (le reste du site reste en "nous/vous").
  offresIntro: 'Un seul prix, le même pour tous les métiers du bâtiment. Le premier échange et l’audit de votre fiche Google sont gratuits, sans engagement.',
  offre: {
    cible: 'Artisans du bâtiment — Ariège et Aude',
    titre: 'Fiche Google + site vitrine, suivis toute l’année',
    description:
      'Pour l’artisan qui manque de demandes et n’a ni le temps ni l’envie de s’occuper d’internet. On met tout en place, puis on tient votre fiche à jour chaque mois.',
    inclus: [
      'Fiche Google optimisée, puis tenue active : une mise à jour par mois (photos de chantier ou publication) et une réponse à chaque avis',
      'Site vitrine avec galerie de chantiers, textes rédigés par nous à partir de vos vrais chantiers',
      'Chevalet QR pour les avis, flyers et cartes de visite',
      'Une méthode simple pour demander un avis à vos clients en fin de chantier',
      'Bilan à 60 jours, comparé aux captures datées du jour 0',
      'Un point chiffré tous les 3 mois : positions, vues, appels',
      'Deux petites modifications du site par mois',
      'Nom de domaine et hébergement inclus',
    ],
    prix: '1 460 € HT',
    prixDetail: 'la 1re année : 990 € de mise en place + 470 € de suivi',
    paiement: 'Paiement possible en 3 fois, acompte à la signature.',
    renouvellement: 'Ensuite 470 €/an pour garder le suivi et l’exclusivité sur votre secteur.',
    tva: 'TVA non applicable, art. 293 B du CGI',
    // Décision Mehdi 29/09/2026 : si le suivi n'est pas renouvelé, site et domaine sont transférés
    // au client (ils restent à lui), seuls le suivi et l'exclusivité s'arrêtent.
    sortie: 'Si vous arrêtez le suivi, on vous transfère le site et le nom de domaine : ils restent à vous.',
    garantie: {
      titre: 'La garantie',
      citation:
        'On mesure ta fiche le jour où je commence. Si à 60 jours elle n’a pas progressé, je continue à mes frais jusqu’à ce qu’elle progresse.',
    },
    exclusivite: {
      titre: 'L’exclusivité',
      citation:
        'Un seul artisan par métier et par secteur. Je ne travaille jamais pour ton concurrent tant que ton suivi est actif.',
    },
    signature: 'Mehdi',
    // Seule option de l'offre. Proposée au bilan 60 jours (termes de recherche de la fiche venant de
    // cette commune) ou à la signature (artisan qui travaille clairement loin, photos de chantiers
    // là-bas). Contenu réel obligatoire, jamais de page dupliquée.
    option: {
      badge: 'Seule option',
      titre: 'Une page pour une commune où vous travaillez souvent',
      description:
        'Une page dédiée à une commune précise, construite avec vos chantiers réels sur place — jamais une page recopiée où seul le nom de la ville change. On vous la propose au bilan à 60 jours si les recherches qui mènent à votre fiche viennent de cette commune, ou dès la signature si vous y travaillez déjà régulièrement.',
      prix: '150 € HT',
      prixDetail: 'par page',
    },
  },

  // Page /fiches-produits (04/09/2026), lien direct envoyé par Mehdi en RDV/SMS : pas dans le menu,
  // noindex. Depuis l'offre unique (29/09/2026), plus d'onglets par secteur — les anciens liens
  // ?secteur=… ouvrent simplement la fiche unique. Les montants et les inclus sont lus dans
  // site.offre, jamais dupliqués ici.
  fichesProduits: {
    kicker: 'Fiche produit',
    titre: 'Ce qui est inclus, ligne par ligne.',
    intro: 'Le détail exact de l’offre, sans argumentaire — pour comparer avant de signer.',
    exclus: [
      'Les photos de chantier : vous nous envoyez les vôtres, même prises au téléphone',
      'Pages consacrées à une commune : 150 € HT la page, seule option de l’offre',
      'Panneau d’administration ou tableau de bord : le point chiffré tous les 3 mois remplit ce rôle',
      'Une promesse de place sur Google ou d’un nombre d’appels : Google classe selon l’endroit d’où l’on cherche, personne ne peut la tenir honnêtement',
    ],
    facts: [
      { label: 'Délai', valeur: '5 à 10 jours ouvrés à réception de vos textes et photos' },
      { label: 'Paiement', valeur: 'Acompte à la signature, paiement possible en 3 fois' },
      { label: 'Renouvellement', valeur: 'Suivi à 470 €/an à partir de la 2e année, à votre choix' },
      { label: 'Propriété', valeur: 'Si vous arrêtez le suivi, site et nom de domaine vous sont transférés' },
    ],
  },

  // Supports physiques inclus dans l'offre (chevalet QR avis + flyers + cartes de visite). Bloc
  // retiré du site le 05/09/2026, remis le 29/09/2026 avec l'offre unique, sans le chevalet neutre
  // santé (Niveau 1 fermé aux nouveaux devis — l'image reste dans src/assets, non utilisée).
  supportsPhysiques: {
    titre: 'Un objet dans la vraie vie, pas juste un lien',
    intro:
      'Chevalet, flyers et cartes de visite sont inclus dans l’offre, avec le même QR code partout : celui qui ouvre la page d’avis de votre fiche Google.',
    items: [
      {
        id: 'chevaletAvisGoogle',
        alt: 'Chevalet en bois avec plaque gravée QR code et NFC vers les avis Google',
        legende: 'Au bureau ou au dépôt : QR et NFC vers vos avis Google.',
      },
      {
        id: 'flyerBtp',
        alt: 'Flyers imprimés avec QR code pour recueillir un avis en fin de chantier',
        legende: 'Remis en fin de chantier, pour un avis pendant que le client a le résultat sous les yeux.',
      },
      {
        id: 'carteVisiteBtp',
        alt: 'Cartes de visite avec QR code pour un artisan du bâtiment',
        legende: 'Glissées à chaque devis, avec le même QR que sur le chantier.',
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
          'Par SMS, téléphone ou autour d’un café : votre métier, les communes où vous travaillez, ce que vous avez déjà (photos de chantier, logo, avis) et ce qu’il vous manque.',
      },
      {
        titre: 'On réunit la matière, puis une vraie maquette',
        description:
          'S’il manque des photos, un logo ou des avis, on vous aide à les rassembler — rien n’est laissé au hasard. Vous voyez ensuite une première version en ligne avec vos vrais contenus, pas un exemple générique : vous validez, ou on ajuste, avant tout engagement.',
      },
      {
        titre: 'Jour 0 : on mesure, puis on met en ligne',
        description:
          'Le jour où on commence, on fait des captures datées de votre fiche Google : c’est la base du bilan à 60 jours. Puis le site part en ligne, la fiche est optimisée, les mentions légales sont en règle. Rien n’est publié sans votre accord.',
      },
      {
        titre: 'On s’en occupe toute l’année',
        description:
          'Une mise à jour de la fiche chaque mois, une réponse à chaque avis, deux petites modifications du site par mois. À 60 jours, le bilan comparé au jour 0 ; ensuite, un point chiffré tous les trois mois.',
      },
    ],
  },

  // FAQ — répond explicitement à des questions déjà couvertes ailleurs sur le site (offre, process),
  // sous une forme directement citable pour le SEO et les moteurs de réponse IA (GEO). Rendu par
  // FaqSection.jsx qui génère aussi le JSON-LD FAQPage à partir de ce même tableau (pas de duplication).
  faq: [
    {
      question: 'Combien coûte un site vitrine avec La Dalle ?',
      reponse:
        '1 460 € HT la première année, le même prix pour tous les métiers du bâtiment : 990 € de mise en place (fiche Google, site vitrine avec galerie de chantiers, chevalet, flyers et cartes de visite) et 470 € de suivi pour l’année. Paiement possible en 3 fois, avec un acompte à la signature. Les années suivantes, 470 € par an si vous voulez garder le suivi et l’exclusivité sur votre secteur. Seule option : une page consacrée à une commune, 150 € HT la page. TVA non applicable, art. 293 B du CGI.',
    },
    {
      question: 'Pourquoi un site internet en plus de la fiche Google ?',
      reponse:
        'La fiche Google fait apparaître votre activité dans les recherches et sur la carte — c’est souvent le premier contact avec un client. Elle ne montre pas tout : pas de vraie galerie de chantiers, pas de place pour détailler vos prestations, pas de mentions légales. Le site prend le relais une fois le clic fait : il montre le travail réel, répond aux questions qui restent, et reçoit une demande de devis même le soir, quand vous êtes rentré du chantier. Les deux se complètent, c’est pour ça qu’ils ne sont pas vendus séparément.',
    },
    {
      question: 'Le bilan à 60 jours, qu’est-ce que c’est concrètement ?',
      reponse:
        'Le jour où on commence, on fait des captures datées de votre fiche Google : vues, recherches, appels, position sur votre métier dans votre secteur. À 60 jours, on refait exactement les mêmes et on vous montre les deux côte à côte. Si la fiche n’a pas progressé, Mehdi continue à ses frais jusqu’à ce qu’elle progresse : c’est la garantie de l’offre.',
    },
    {
      question: 'Travaillez-vous aussi pour mes concurrents ?',
      reponse:
        'Non : un seul artisan par métier et par secteur. Si on accompagne déjà un plombier sur votre secteur, on ne prendra pas un second plombier à côté de lui tant que son suivi est actif. C’est aussi ce que couvrent les 470 € par an au-delà de la première année.',
    },
    {
      question: 'Faut-il payer un abonnement mensuel ?',
      reponse:
        'Non, aucune mensualité. La première année se règle en une fois ou en 3 fois. Ensuite, le suivi se renouvelle à 470 € par an, et vous restez libre de l’arrêter : on vous transfère alors le site et le nom de domaine, qui restent à vous. Vous perdez simplement la tenue de la fiche et l’exclusivité sur votre secteur.',
    },
    {
      question: 'À quoi sert une page consacrée à une commune ?',
      reponse:
        'Si une bonne partie de vos chantiers se fait dans une autre commune que la vôtre, une page dédiée, avec vos chantiers réels sur place, aide Google à faire le lien entre votre activité et cette commune. C’est la seule option de l’offre : 150 € HT la page. On vous la propose au bilan à 60 jours si les recherches qui mènent à votre fiche viennent de là, ou dès la signature si vous y travaillez déjà régulièrement. Jamais de page recopiée où seul le nom de la ville change.',
    },
    {
      question: 'Combien de temps pour être livré ?',
      reponse:
        'Quelques jours après validation de la maquette. Vous voyez d’abord une version en ligne du site avant tout engagement, puis la livraison suit rapidement une fois vos retours pris en compte.',
    },
    {
      // Réponse élargie le 04/09/2026 : ne contredisait pas la nouvelle section "Zone
      // d'intervention" (zoneIntervention, page d'accueil), mais restait plus étroite qu'elle
      // sans raison — toute l'Ariège reste la base, la zone 50km route couvre aussi l'Aude et
      // la Haute-Garonne. Cette FAQ vit sur /methode, PAS sur la page d'accueil où se trouve la
      // section détaillée — d'où le lien explicite plutôt qu'un "plus haut sur cette page".
      question: 'Intervenez-vous dans tout le département ?',
      reponse:
        'Oui, dans toute l’Ariège (09), et jusqu’à 50 km de Mirepoix par la route dans les départements limitrophes (Aude, Haute-Garonne) — le détail des communes est sur la page d’accueil, section « Zone d’intervention ». Le premier échange se fait par SMS, téléphone ou autour d’un café, où que vous soyez dans la zone.',
    },
    {
      question: 'Que se passe-t-il après la mise en ligne ?',
      reponse:
        'Le suivi est compris dans la première année : une mise à jour de votre fiche chaque mois, une réponse à chaque avis, deux petites modifications du site par mois, le bilan à 60 jours, puis un point chiffré tous les trois mois. Vous nous envoyez vos photos de chantier, on s’occupe du reste — avec un seul interlocuteur, du premier appel au dernier point.',
    },
  ],

  // À peupler au fur et à mesure des livraisons — jamais de faux exemple ici. Ordre revu le 29/09/2026 :
  // artisans du bâtiment d'abord (cible de l'offre unique), clients hors bâtiment ensuite.
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
      // Comparaison "au-dessus de la moyenne du secteur" retirée le 29/09/2026 : le repère ~2-3 %
      // n'avait aucune source. Seuls restent les chiffres GSC datés.
      description: 'Position moyenne 8,5 sur « chape liquide », avec un CTR de 5 % (Search Console, 29/05 → 28/07/2026).',
      image: 'chape-liquide-occitanie/screenshot.jpg',
      url: 'https://chapeliquide-occitanie.fr',
      // Daté explicitement le 21/09/2026 : « ×4 en 1 mois » sans fenêtre laissait croire à un régime
      // permanent. Chiffre inchangé (7 juin → 31 juillet 2026), seule la formulation devient datable.
      stat: 'Fiche Google : 7 interactions en juin, 31 en juillet 2026',
    },
    {
      type: 'site',
      title: 'Mirepoix Toiture',
      badge: 'Site + galerie chantiers — Artisan BTP',
      description: 'De la charpente à la couverture, tout le métier présenté au même endroit.',
      image: 'mirepoix-toiture/screenshot.jpg',
      url: 'https://mirepoix-toiture.fr',
      // Corrigé le 21/09/2026. L'ancien « +8 demandes de devis / mois » n'avait aucune source et est
      // contredit par ses GMB Insights (avr.→sept. 2026 : 1 appel, 15 clics vers le site, 276 vues de
      // fiche). Remplacé par un chiffre de position lisible dans l'export Search Console du 21/09
      // (24/07→19/09/2026) : « couvreur mirepoix », 96 impressions, position moyenne 6,78.
      stat: '1re page sur « couvreur mirepoix » en 8 semaines',
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
    {
      type: 'site',
      title: 'VH Beauty Studio',
      badge: 'Fiche Google · Institut de beauté',
      description: 'Fiche Google reprise de zéro : horaires, photos, avis relancés.',
      image: 'vh-beauty-studio/screenshot.jpg',
      url: 'https://vh-beauty-studio.fr',
      // Corrigé le 21/09/2026. L'ancien « 3× plus de vues sur Maps » n'était soutenu par aucune donnée,
      // et les demandes d'itinéraire (seul indicateur Maps suivi mois par mois) baissent sur la période :
      // 68 en juin, 57 en juillet, 37 en août, 25 en septembre. Remplacé par le contraste mesuré dans ses
      // GMB Insights : 0 appel d'avril à juillet, 8 en août, 8 en septembre, après mise en ligne du site
      // le 25/07 et reprise de la fiche le 07/08.
      stat: '16 appels depuis la fiche Google, contre 0 avant',
    },
    {
      // Pas de "stat" : aucun chiffre de performance confirmé pour ce client à ce jour,
      // cohérent avec la règle "jamais de faux exemple" de ce tableau (même choix que
      // Finn Elec et Cyrille Peinture ci-dessus).
      type: 'site',
      title: 'Mirepoix Matériaux',
      badge: 'Site vitrine · Négoce de matériaux (réseau Tout Faire)',
      description: 'Matériaux, outillage et conseils de pro pour particuliers et professionnels, avec zone de livraison affichée jusqu’à 50 km de Mirepoix.',
      image: 'mirepoix-materiaux/screenshot.jpg',
      url: 'https://mirepoixmateriaux.fr',
    },
  ],
}

export default site
