import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Message pour les curieux qui ouvrent la console — développeur ou prospect technique
console.log(
  '%cla dalle%c\nVous regardez sous le capot ? Ce site est codé sur-mesure (React + Vite + Supabase), pas de CMS.\nDéveloppeur aussi, ou un projet en tête ? presencelocale.contact@gmail.com',
  'font-size: 18px; font-weight: bold; color: #c1652f;',
  'font-size: 13px; color: #1c2b33;',
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
