import pageMeta from '../../src/config/pageMeta.js'

// Le site est une SPA React en CSR pur (pas de SSR/prerendering) : le HTML brut envoyé par
// Netlify est toujours celui de index.html, identique quelle que soit la route — le title,
// le canonical et les balises OG ne sont corrigés par page qu'une fois le JS exécuté
// (useDocumentMeta.js). Un crawler qui n'exécute pas de JS (certains bots, les unfurlers
// sociaux Facebook/LinkedIn, le 1er passage de Google avant son rendu JS différé) voit donc
// toujours le contenu de la homepage sur /offres, /methode et /mentions-legales.
//
// Cette edge function réécrit le HTML avant qu'il ne parte, pour ces 5 routes précisément —
// pas de wildcard, ce site a 5 pages fixes, pas de raison de matcher plus large. Elle laisse
// tout le reste (assets, images) totalement intact : context.next() ne passe même pas par ici
// pour ces chemins, seuls les 5 paths déclarés dans `config.path` ci-dessous sont interceptés.
const SITE_URL = 'https://ladalle-agence.fr'

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export default async (request, context) => {
  const response = await context.next()
  const { pathname } = new URL(request.url)
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  const meta = pageMeta[path]
  if (!meta) return response

  const title = escapeHtml(meta.title)
  const ogTitle = escapeHtml(meta.ogTitle ?? meta.title)
  const description = escapeHtml(meta.description)
  const canonicalUrl = `${SITE_URL}${path === '/' ? '/' : path}`

  let html = await response.text()
  html = html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonicalUrl}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonicalUrl}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${ogTitle}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${ogTitle}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`)

  const headers = new Headers(response.headers)
  headers.delete('content-length')
  headers.delete('etag')

  return new Response(html, { status: response.status, headers })
}

export const config = {
  path: ['/', '/offres', '/methode', '/mentions-legales', '/cgu-cgv'],
}
