import { useEffect, useState } from 'react'
import site from '../config/site'

// Fusionne du contenu éditable côté client (panneau admin self-service, Supabase) par-dessus
// site.js. `null` tant que rien n'est chargé — les composants doivent retomber sur les valeurs
// statiques de site.js si un champ n'existe pas encore côté Supabase. Voir presence-locale-admin/
// pour le panneau qui écrit ici. Même pattern que template/src/hooks/useSiteContent.js.
//
// Import différé : même pattern que ContactForm.jsx — sans ça le SDK Supabase (~200 Ko) se
// retrouve statiquement inclus dans le bundle principal au lieu de rester dans son propre chunk
// lazy, gonflant le chargement initial de chaque page même sans jamais toucher au formulaire.
export function useSiteContent() {
  const [content, setContent] = useState(null)

  useEffect(() => {
    let cancelled = false
    import('../lib/supabaseClient').then(({ supabase }) =>
      supabase
        .from('site_content')
        .select('*')
        .eq('site_id', site.supabaseSiteId)
        .maybeSingle()
        .then(({ data }) => {
          if (!cancelled) setContent(data)
        }),
    )
    return () => {
      cancelled = true
    }
  }, [])

  return content
}
