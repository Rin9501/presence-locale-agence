---
name: presence-locale-seo-copywriting
description: "Méthode de recherche de mots-clés locaux et rédaction SEO pour les sites vitrines Présence Locale, applicable à tout client quelle que soit sa zone géographique (pas seulement l'Ariège). Déclencher systématiquement pour toute rédaction ou révision de contenu de site client — page d'accueil, page ville, page service, meta title/description, alt text — ainsi que pour l'analyse Search Console/GMB Insights en vue d'identifier des mots-clés prioritaires, et pour la vérification technique d'indexation (sitemap, robots.txt, canonical, JSON-LD, Search Console) à la livraison ou après clonage d'un template pour un nouveau client. Ne jamais écrire un texte de site client sans passer par ce skill : il fixe la base technique d'indexation, la méthode de sélection des mots-clés, le niveau d'écriture attendu (aucun texte générique, robotique ou cliché marketing n'est acceptable), et la boucle d'auto-évaluation post-livraison."
---

# SEO Copywriting — Présence Locale

Deux exigences non négociables sur ce skill :
1. **Les mots-clés viennent de la donnée, pas de l'intuition.**
2. **Le texte est écrit par le meilleur écrivain disponible, pas par un générateur de contenu SEO.** Un texte qui sonne comme "1000 articles de blog SEO" est un échec, même si les mots-clés sont bien placés.

Ne jamais sauter à la rédaction sans avoir fait l'étape 1 (mots-clés).

**Portée géographique** : ce skill sert pour n'importe quel client, où qu'il se trouve. La zone locale à utiliser dans les mots-clés, exemples et copywriting est **toujours celle du client traité** (sa ville, ses villages environnants, sa zone de chalandise réelle) — jamais une zone fixe. Avant de commencer, identifier la zone du client (demander à Mehdi si elle n'est pas déjà dans le CRM/le brief) et l'utiliser comme référence tout au long de l'étape 1 et 2.

---

## Étape 0 — Base technique d'indexation (avant tout copywriting)

Un texte parfait sur un site mal indexé ne sert à rien. Cette étape est **obligatoire à la livraison d'un site neuf**, et à re-vérifier après tout clonage de template pour un nouveau client (le code est réutilisé d'un client à l'autre — c'est la donnée qui doit être 100% propre à chaque fois, jamais un reliquat du client précédent).

### Checklist technique (site neuf ou reclôné depuis un template existant)
- [ ] **Sitemap.xml** généré et cohérent avec les pages réelles du site (pas de page fantôme, pas de page oubliée)
- [ ] **Robots.txt** présent, n'exclut pas par erreur des pages qu'on veut indexer
- [ ] **Canonical** sur chaque page, pointant vers l'URL finale du domaine du client (jamais un domaine de preview/staging oublié après clonage)
- [ ] **Hreflang** si site multilingue (route dédiée par langue, pas un simple toggle JS — cf. Finn Elec)
- [ ] **JSON-LD LocalBusiness** relu ligne à ligne après clonage : nom, adresse, téléphone, horaires, zone desservie — jamais une valeur du client précédent oubliée dans le template. Une donnée structurée fausse est un signal de mauvaise qualité pour Google, pas juste une coquille visuelle.
- [ ] **Search Console** : propriété vérifiée (TXT DNS ou fichier), sitemap soumis manuellement — ne pas compter sur la découverte automatique
- [ ] **GMB** : cohérence NAP (Nom/Adresse/Téléphone) strictement identique entre le site, la fiche GMB et les annuaires déjà en place — une incohérence NAP nuit à l'indexation locale

### Vérification à J+15 (dans la relance déjà existante)
En plus du suivi de performance habituel, vérifier dans Search Console l'onglet **Couverture/Pages indexées** : pages exclues ou en erreur qui ne devraient pas l'être = signal à traiter avant même de regarder le classement des mots-clés. Une page qui n'est pas indexée ne peut par définition pas remonter, quelle que soit la qualité du texte.

### Réflexe anti-spam sur les avis clients (GMB)
Jamais de sollicitation groupée ou automatisée d'avis (review gating), jamais d'avis incitatifs en échange d'une contrepartie — pratiques sanctionnables par Google. Les avis mis en avant restent ceux obtenus naturellement.

---

## Étape 1 — Trouver les mots-clés (par priorité de source)

### A. Search Console (site avec historique ≥ 4-6 semaines)
Demander l'export CSV "Requêtes" (jamais les screenshots de l'app — colonnes désalignées, illisibles). Trier par impressions, puis croiser avec la position :

| Cas | Position | Impressions | Action |
|---|---|---|---|
| **Cible prioritaire** | 8–20 | correctes (>15-20) | Renforcer le mot-clé dans H1/title/corps — Google a déjà compris la pertinence, il manque du poids |
| **Quick win pur** | <8 mais 0 clic | correctes | Le classement est bon, le snippet (title/meta) ne donne pas envie de cliquer → réécrire title/meta uniquement |
| **Bruit** | >30 | faibles (1-3) | Ignorer |
| **Déjà acquis** | <8 | avec clics réguliers | Ne pas toucher, juste surveiller |

Vérifier aussi l'onglet Pages : une page avec beaucoup d'impressions et peu de clics est un problème de copywriting (title/meta), pas de contenu.

### B. Recherche ciblée (site neuf sans historique, ou en complément de A)
- Autocomplete Google sur "[métier] [ville du client]" et "[métier]" seul + section "Autres recherches"
- GMB Insights du client (ou d'un client de référence du même secteur, même si situé ailleurs) : requêtes qui ont mené jusqu'à la fiche
- Toujours croiser avec un mot-clé + ville/village de la zone de chalandise réelle du client — jamais un mot-clé générique seul (trop de concurrence nationale, zéro pertinence locale)

### Priorisation finale
- 5 à 8 mots-clés max par site, pas plus — un site sur-optimisé sur 20 mots-clés n'en sert bien aucun
- Toujours ancrés dans la zone géographique réelle du client (sa ville et les villages/quartiers qu'il dessert effectivement — à vérifier avec lui plutôt que supposer)
- Distinguer métier générique ("carreleur") vs service précis ("pose carrelage salle de bain", "rénovation terrasse") — les deux ont leur place mais pas dans les mêmes emplacements
- Vérifier rapidement qui ressort déjà dessus ; si un concurrent trône dessus avec une fiche solide, chercher une variante moins disputée plutôt que de s'épuiser dessus

---

## Étape 2 — Placement technique (une fois les mots-clés choisis)

Dans l'ordre d'impact :
1. **Title** de la page : métier + ville du client, formulé pour donner envie de cliquer (pas juste empilé)
2. **H1** : reprend le mot-clé principal, formulation naturelle
3. **Meta description** : mot-clé + différenciateur du client + CTA — c'est elle qui convertit l'impression en clic, jamais un remplissage passe-partout
4. **Corps du texte** : mot-clé principal 2-3 fois max + variantes, jamais forcé — si on le compte plus de 3 fois en le relisant, c'est trop
5. **Alt text photos chantiers** (niveau 3 BTP) : décrit la photo avec le mot-clé, jamais "photo1.jpg" ou vide
6. **GMB** : catégorie principale = mot-clé métier, description et posts réutilisent les mêmes mots-clés que le site — cohérence obligatoire

---

## Étape 3 — Écrire comme le meilleur écrivain, pas comme un générateur SEO

C'est l'étape que la plupart des outils SEO ratent. Un texte peut avoir tous les bons mots-clés au bon endroit et rester mauvais parce qu'il sonne creux, générique, interchangeable avec celui du concurrent d'à côté.

### Principes d'écriture

**Précision plutôt que génériques.** "Un travail soigné et durable" ne veut rien dire — n'importe quel artisan peut l'écrire. "Chape coulée à niveau au laser, séchage contrôlé avant pose du revêtement" dit quelque chose de vrai et concret sur ce que fait vraiment le client. Toujours préférer le détail concret vérifiable au qualificatif vague.

**Montrer, pas déclarer.** Ne pas écrire "nous sommes réactifs" — montrer un fait qui le prouve ("devis sous 48h", "chantier commencé la semaine suivante"). Une affirmation non étayée sonne comme du marketing ; un fait précis sonne comme une preuve.

**Varier la syntaxe.** Une succession de phrases courtes sujet-verbe-complément, toutes calquées sur le même patron, c'est la signature d'un texte généré à la chaîne. Alterner longueur et construction des phrases comme le ferait un vrai rédacteur qui relit son texte à voix haute.

**Bannir les clichés marketing.** Liste noire à ne jamais utiliser, sous aucune formulation : "n'hésitez pas à nous contacter", "votre satisfaction est notre priorité", "à votre écoute", "leader dans son domaine", "depuis toujours passionné par...", "un travail de qualité" (sans précision de ce qui la définit), "n'attendez plus". Si une formulation pourrait être copiée-collée sur le site de n'importe quel concurrent en changeant juste le nom, elle est à réécrire.

**Écrire pour un humain d'abord.** Le lecteur est un habitant de la ville ou du village du client qui cherche un artisan pour de vrai, pas un algorithme. Le ton reste cohérent avec le positionnement Présence Locale : concret, local, "pas une arnaque". Si un passage sonne creux ou robotique à la lecture à voix haute, il est sur-optimisé — le réécrire entièrement, ne pas juste retirer des mots-clés.

**Une seule idée forte par phrase.** Ne pas empiler les qualificatifs ("un carreleur expérimenté, sérieux, minutieux et passionné basé à [ville] qui..."). Chaque phrase porte une information, pas une liste d'adjectifs.

**Rythme de fin de texte.** La dernière phrase d'une section ou d'une page doit avoir un poids, pas être un simple point final administratif. C'est souvent là que se joue la conversion (CTA, dernière impression avant de fermer l'onglet).

### Garde-fou final avant de livrer un texte
Se relire en se demandant : *"Est-ce que ce texte pourrait être publié tel quel sur le site d'un concurrent en changeant juste le nom et la ville ?"* Si oui → pas assez spécifique, à retravailler avec des détails propres à ce client précis (son savoir-faire, ses chantiers réels, ce que Sonia/Mehdi savent de lui).

---

## Étape 4 — Auto-évaluation et amélioration continue

Ce skill ne s'arrête pas à la livraison. Il s'intègre au cycle déjà en place (Search Console 4-6 semaines, relance J+15 dans Notion) et se corrige lui-même à partir des résultats réels.

### À chaque nouvelle utilisation du skill sur un client existant
Avant de rédiger, si le site a déjà du recul (≥4-6 semaines en ligne) : refaire l'étape 1-A (export GSC) sur ce client précis avant de retoucher quoi que ce soit. Comparer aux mots-clés visés lors de la précédente rédaction :
- Mots-clés visés qui montent en position ou en clics → la formulation retenue a marché, la garder comme référence
- Mots-clés visés qui stagnent en position >20 après 6 semaines malgré un bon placement → soit le mot-clé était mal choisi (trop concurrentiel, mauvaise intention de recherche), soit le texte autour ne convainc pas assez Google — retravailler la page, pas juste le title
- Pages en bonne position mais 0 clic (le cas "quick win" de l'étape 1-A) → signe que le title/meta écrit précédemment était trop générique, révélateur d'une écriture pas assez travaillée à l'étape 3, à corriger en priorité avant d'aborder un nouveau client

### Journal d'apprentissage
Tenir une note courte (dans la mémoire du projet ou un fichier dédié `learnings-seo-copywriting.md` selon ce qui existe déjà côté Mehdi) qui accumule, client après client :
- Quelles formulations de title/meta ont fait grimper le CTR une fois mesurées
- Quels types de mots-clés locaux ont réellement converti vs quels types sont restés du bruit (impressions sans clic)
- Quelles tournures de phrases ou structures de page ont eu l'air de mieux retenir (si un client donne un retour, ou si le temps passé sur la page augmente en Analytics)

Ce journal sert à affiner les principes d'écriture de l'étape 3 au fil du temps : si un motif se répète sur 3+ clients (ex : les meta descriptions avec une question convertissent mieux que les meta descriptions déclaratives), l'intégrer directement dans ce SKILL.md comme nouvelle règle, pas seulement dans le journal.

### Revue du skill lui-même
Environ tous les 5-10 sites traités avec ce skill, relire le SKILL.md en entier à la lumière du journal d'apprentissage et proposer à Mehdi les ajustements de méthode qui se dégagent des résultats réels (pas des impressions subjectives). Le skill est un document vivant, pas figé — mais toute modification de la méthode doit être justifiée par de la donnée GSC/Analytics réelle, jamais par une intuition, pour rester cohérent avec l'exigence de l'étape 1.

---

## Cas particulier — Niveau 1 santé (professions réglementées)

Aucun copywriting commercial. Ton strictement factuel sur la fiche GMB (horaires, spécialités, coordonnées). Pas de superlatif, pas de CTA incitatif, pas d'adjectif valorisant non vérifiable — cohérence déontologique, voir les instructions du projet.

---

## Checklist avant livraison d'un texte de site

- [ ] Étape 0 technique validée (sitemap, robots.txt, canonical, JSON-LD relu ligne à ligne, GSC vérifié et sitemap soumis, cohérence NAP)
- [ ] Mots-clés choisis à partir de données réelles (GSC export ou recherche ciblée documentée), pas d'intuition seule
- [ ] 5-8 mots-clés max, tous ancrés localement
- [ ] Title + H1 + meta description écrits en dernier, une fois le corps rédigé — pas l'inverse
- [ ] Aucune formule de la liste noire de clichés
- [ ] Test "concurrent copié-collé" passé
- [ ] Relu à voix haute une fois
- [ ] Pour le niveau 1 santé : validé ton factuel, zéro incitation commerciale
- [ ] Si client existant avec recul GSC : comparaison faite avec la rédaction précédente avant de retoucher
- [ ] Rappel posé (ou vue Notion existante utilisée) pour revenir mesurer ce texte dans 4-6 semaines
