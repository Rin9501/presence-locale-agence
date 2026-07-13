# Présence Locale — site vitrine de l'agence

Site vitrine perso de Mehdi / Présence Locale : crédibilité commerciale pendant que les premiers clients sont livrés, et démonstration technique.

## Développement

```
npm install
cp .env.example .env   # renseigner VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY
npm run dev
```

## Build

```
npm run build
npm run preview
```

Déployé sur Netlify (build command `npm run build`, publish directory `dist`).

## Contenu

Tous les textes, prix et réalisations se modifient dans `src/config/site.js` — pas besoin de toucher aux composants.

Le composant `src/components/GalerieSlider.jsx` (slider de comparaison avant/après) est isolé et réutilisable tel quel dans `../template/src/components/Gallery.jsx` pour les clients BTP niveau 3.
