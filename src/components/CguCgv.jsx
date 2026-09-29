import pageMeta from '../config/pageMeta'
import useDocumentMeta from '../hooks/useDocumentMeta'
import site from '../config/site'

export default function CguCgv() {
  const legal = site.legal

  useDocumentMeta(pageMeta['/cgu-cgv'].title, pageMeta['/cgu-cgv'].description, '/cgu-cgv')

  return (
    <main className="mx-auto max-w-3xl flex-1 px-6 py-16 sm:py-20">
      <a href="/" className="inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] transition hover:text-[var(--color-orange-text)]">
        <span aria-hidden="true">←</span> Retour au site
      </a>

      <h1 className="mt-6 text-4xl font-bold text-[var(--ink)]">Conditions générales</h1>
      <p className="mt-3 text-sm text-[var(--ink-muted)]">
        Conditions générales d’utilisation du site et conditions générales de vente des prestations proposées par{' '}
        {legal.tradeName}.
      </p>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-[var(--ink-body)]">
        <section>
          <h2 className="text-2xl font-semibold text-[var(--ink)]">Conditions générales d’utilisation (CGU)</h2>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Objet</h3>
          <p className="mt-2">
            Les présentes CGU régissent l’accès et la consultation du site {site.business.name} par tout visiteur.
            Le fait de consulter le site implique l’acceptation pleine et entière de ces conditions.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Accès au site</h3>
          <p className="mt-2">
            Le site est accessible gratuitement à tout visiteur disposant d’un accès à internet. Les frais de
            connexion et d’équipement nécessaires pour y accéder restent à la charge du visiteur.{' '}
            {legal.tradeName} met en œuvre les moyens raisonnables pour assurer un accès continu au site, sans
            garantie de disponibilité permanente (maintenance, panne, ou tout événement hors de son contrôle).
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Contenu et propriété intellectuelle</h3>
          <p className="mt-2">
            Les textes, visuels et éléments graphiques du site sont la propriété de {legal.tradeName}, sauf mention
            contraire, et ne peuvent être reproduits sans autorisation préalable — voir le détail sur la page{' '}
            <a href="/mentions-legales" className="underline">
              mentions légales
            </a>
            . Les informations présentées (offres, tarifs, réalisations) sont fournies à titre indicatif et peuvent
            évoluer sans préavis ; seul le devis accepté par un client fait foi pour une prestation donnée.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Formulaire de contact et données personnelles</h3>
          <p className="mt-2">
            L’usage du formulaire de contact et le traitement des données transmises sont détaillés sur la page{' '}
            <a href="/mentions-legales" className="underline">
              mentions légales
            </a>
            , de même que la gestion des cookies et de la mesure d’audience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[var(--ink)]">Conditions générales de vente (CGV)</h2>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Champ d’application</h3>
          <p className="mt-2">
            Les présentes CGV s’appliquent à toute prestation de création de site vitrine et/ou d’optimisation de
            fiche Google Business vendue par {legal.tradeName} ({legal.legalForm}, SIRET {legal.siret}) à un client
            professionnel agissant pour les besoins de son activité. Le
            détail des offres et tarifs en vigueur est présenté sur la page{' '}
            <a href="/offres" className="underline">
              Offres
            </a>
            .
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Devis et commande</h3>
          <p className="mt-2">
            Toute prestation fait l’objet d’un devis gratuit et personnalisé, établi après un premier échange avec
            le client. La commande est réputée ferme dès l’accord exprès du client sur ce devis (par écrit — SMS,
            email — ou par tout autre moyen explicite convenu entre les parties). Aucune prestation ne débute avant
            cet accord.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Déroulement de la prestation</h3>
          <p className="mt-2">
            La prestation se déroule selon les grandes étapes décrites sur la page{' '}
            <a href="/methode" className="underline">
              Méthode
            </a>{' '}
            : échange initial, réunion des contenus puis maquette soumise à validation du client, livraison du site
            et/ou de la fiche Google optimisée, puis bilan à 60 jours comparé à l’état de la fiche au démarrage. Les délais communiqués au devis sont
            indicatifs et dépendent notamment de la rapidité avec laquelle le client fournit les contenus nécessaires
            (photos, logo, textes, accès) et valide chaque étape.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Tarifs et paiement</h3>
          <p className="mt-2">
            Les tarifs applicables sont ceux indiqués au devis accepté par le client, correspondant à l’offre en
            vigueur au jour de l’acceptation (voir la page{' '}
            <a href="/offres" className="underline">
              Offres
            </a>
            ). Un acompte est dû à la signature du devis ; le solde de la première année peut être réglé en une
            ou plusieurs échéances, dans la limite de trois, selon le calendrier fixé au devis. Le paiement
            s’effectue par virement bancaire, sauf modalité différente convenue au devis. TVA non applicable,
            art. 293 B du CGI.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Suivi annuel et fin du suivi</h3>
          <p className="mt-2">
            Le suivi de la première année (tenue de la fiche Google, réponses aux avis, petites modifications du
            site, bilan à 60 jours et points trimestriels, nom de domaine et hébergement) est compris dans le prix
            de la première année. Au-delà, il se renouvelle chaque année au tarif indiqué au devis, et le client
            peut y renoncer à chaque échéance annuelle. En cas d’arrêt du suivi, le site et le nom de domaine sont
            transférés au client, et l’exclusivité sectorielle prend fin.
          </p>
          <p className="mt-2">
            Les clients ayant souscrit une maintenance ou un suivi avant le 29 septembre 2026 conservent les
            conditions de leur devis.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Propriété du site livré</h3>
          <p className="mt-2">
            Une fois la prestation intégralement réglée, le site livré (code, contenus fournis par le client)
            appartient pleinement au client. {legal.tradeName} conserve le droit de mentionner la réalisation
            comme référence dans son book, sauf demande contraire expresse du client.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Obligations du client</h3>
          <p className="mt-2">
            Le client s’engage à fournir les éléments nécessaires à la réalisation de la prestation (textes,
            photos, logo, accès à sa fiche Google existante le cas échéant) et à valider les étapes soumises dans
            un délai raisonnable, faute de quoi les délais indicatifs communiqués au devis ne sont plus opposables
            à {legal.tradeName}.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Responsabilité</h3>
          <p className="mt-2">
            {legal.tradeName} s’engage à mettre en œuvre les moyens nécessaires à la bonne réalisation du site
            et/ou de la fiche Google (obligation de moyens). Les résultats communiqués sur ce site (visibilité,
            interactions, demandes de devis) sont des exemples mesurés chez des clients réels et ne constituent
            pas une garantie de résultat équivalent, les performances dépendant de facteurs propres à chaque
            activité et hors du contrôle de {legal.tradeName} (concurrence locale, algorithmes Google, saisonnalité
            de l’activité).
          </p>
          <p className="mt-2">
            Par exception, {legal.tradeName} s’engage sur la garantie suivante : l’état de la fiche Google du client
            est mesuré au démarrage de la prestation ; si, 60 jours plus tard, la fiche n’a pas progressé,{' '}
            {legal.tradeName} poursuit le travail à ses frais jusqu’à ce qu’elle progresse.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">Droit applicable et litiges</h3>
          <p className="mt-2">
            Les présentes CGU/CGV sont soumises au droit français. En cas de litige, une solution amiable sera
            recherchée en priorité entre les parties ; à défaut, le litige relèvera de la juridiction compétente
            selon les règles de droit commun.
          </p>
        </section>
      </div>
    </main>
  )
}
