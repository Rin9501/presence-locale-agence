import { useState } from 'react'
import site from '../config/site'
import Reveal from './Reveal'

// Émet aussi le JSON-LD FAQPage à partir du même tableau site.faq affiché juste en dessous —
// contenu visible et schema ne peuvent donc jamais diverger. Utile pour le SEO classique et
// pour le GEO (les moteurs de réponse IA favorisent le contenu Q/R structuré et factuel).
function FaqSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: site.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.reponse,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="chamfer border border-[var(--border-soft)] bg-[var(--surface-card)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-medium text-[var(--ink)]">{item.question}</span>
        <span
          aria-hidden="true"
          className={`shrink-0 text-[var(--color-orange-text)] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      <div className="faq-panel" data-open={isOpen}>
        <div>
          <p className="px-5 pb-4 text-sm text-[var(--ink-muted)]">{item.reponse}</p>
        </div>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="px-6 py-16">
      <FaqSchema />
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl text-[var(--ink)]">Questions fréquentes</h2>
        <div className="mt-8 space-y-3">
          {site.faq.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
