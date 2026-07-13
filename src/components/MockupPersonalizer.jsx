import { useState } from 'react'

// Personnalisation légère et honnête : on ne prétend pas générer le futur site du
// prospect (le mockup ci-dessus reste la vraie capture de Chape Liquide Occitanie),
// on relie juste son activité au principe démontré par l'exemple.
export default function MockupPersonalizer() {
  const [business, setBusiness] = useState('')

  return (
    <div className="mt-4 rounded-lg border border-[var(--border-soft)] bg-[var(--surface-card)] p-4">
      <label htmlFor="mockup-business" className="block text-xs font-medium text-[var(--ink-soft)]">
        Curieux du rendu pour votre activité ?
      </label>
      <input
        id="mockup-business"
        type="text"
        value={business}
        onChange={(event) => setBusiness(event.target.value)}
        placeholder="Ex. Boulangerie Dupont"
        className="mt-1 w-full rounded-md border border-[var(--border-soft)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--ink)] focus:border-[var(--color-orange)] focus:outline-none"
      />
      <p className="mt-2 text-sm text-[var(--ink-body)]">
        Un site pensé pour{' '}
        <strong className="font-semibold text-[var(--ink)]">{business || 'votre activité'}</strong>, sur le même
        principe que celui ci-dessus pour Chape Liquide Occitanie.
      </p>
    </div>
  )
}
