import { useEffect, useState } from 'react'
import { loadGtag } from '../lib/analytics'

const STORAGE_KEY = 'presence-locale-cookie-consent'

// null = pas encore répondu (bandeau visible), 'accepted' | 'refused' = choix déjà fait
export default function useCookieConsent() {
  const [consent, setConsent] = useState(() => localStorage.getItem(STORAGE_KEY))

  useEffect(() => {
    if (consent === 'accepted') loadGtag()
  }, [consent])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setConsent('accepted')
  }

  function refuse() {
    localStorage.setItem(STORAGE_KEY, 'refused')
    setConsent('refused')
  }

  // Permet de revenir sur son choix depuis les mentions légales (rouvre le bandeau)
  function resetConsent() {
    localStorage.removeItem(STORAGE_KEY)
    setConsent(null)
  }

  return { consent, accept, refuse, resetConsent }
}
