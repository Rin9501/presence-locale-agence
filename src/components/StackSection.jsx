import site from '../config/site'
import PerfBadge from './PerfBadge'
import Reveal from './Reveal'

export default function StackSection() {
  const { stack } = site

  return (
    <section id="stack" className="relative overflow-hidden bg-[var(--color-navy)] px-6 py-16 text-white">
      <img
        src="/la-dalle-crack-accent.svg"
        alt=""
        aria-hidden="true"
        className="crack-accent pointer-events-none absolute right-6 top-0 h-full w-auto max-w-none opacity-70 mix-blend-screen sm:right-16 lg:right-[8%]"
      />
      <Reveal className="relative mx-auto max-w-4xl">
        <h2 className="text-2xl">{stack.title}</h2>
        <p className="mt-3 max-w-2xl text-white/70">{stack.intro}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {stack.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 80} className="chamfer border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-baseline gap-2">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <span className="[font-family:var(--font-utility)] text-xs uppercase tracking-wide text-[var(--color-orange)]">{item.role}</span>
              </div>
              <p className="mt-2 text-sm text-white/70">{item.benefit}</p>
            </Reveal>
          ))}
        </div>

        <div className="chamfer mt-8 border border-dashed border-white/15 px-6 py-6">
          <p className="text-sm text-white/70">{stack.comparison}</p>
          <PerfBadge />
        </div>
      </Reveal>
    </section>
  )
}
