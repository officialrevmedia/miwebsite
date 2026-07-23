import { ArrowUpRight } from 'lucide-react'
import { Seo } from '../lib/seo'
import { breadcrumbSchema } from '../lib/schema'
import { PageHeader } from '../components/ui/PageHeader'
import { Metric, ExtButton } from '../components/ui/primitives'
import { links } from '../data/links'
import { asset } from '../lib/asset'
import { ramadan2026 } from '../data/impact'
import { SupportSection } from '../components/home/sections'

const photos = [
  { src: '/images/khidmah/khidmah-packing-garage.webp', alt: 'Volunteers packing family food packages in a garage staging area' },
  { src: '/images/khidmah/khidmah-rice-carry.webp', alt: 'A volunteer carrying a large bag of rice for distribution' },
  { src: '/images/khidmah/khidmah-van-loading.webp', alt: 'Volunteers loading packed boxes into a delivery van' },
  { src: '/images/khidmah/tarim-street-delivery.webp', alt: 'Food delivery through the streets of Tarim, Yemen' },
  { src: '/images/khidmah/tarim-family-support.webp', alt: 'Support reaching a family in Tarim, Yemen' },
  { src: '/images/khidmah/mosque-distribution.webp', alt: 'Food packages distributed outside a local mosque' },
]

export default function ImpactRamadan() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Impact', path: '/impact' },
    { name: 'Ramadan 2026', path: '/impact/ramadan-2026' },
  ]
  const d = ramadan2026.distribution
  return (
    <>
      <Seo
        title="Ramadan 2026 Campaign"
        description="The full breakdown of the Feed 1000+ People This Ramadan campaign: $14,725.80 raised in two weeks, over 300 family packages, 648 hot meals, and $3,850 in direct assistance."
        path="/impact/ramadan-2026"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Ramadan 2026 · Campaign report"
        title={ramadan2026.title}
        lede="Raised in two weeks, with zero administrative fees. Every dollar went directly to those in need, at home and in Tarim, Yemen."
      />
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {ramadan2026.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
          <div className="prose-mq mt-14" data-reveal>
            {ramadan2026.summary.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="mt-8" data-reveal>
            <a href={asset(links.reportPdf)} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Read the full Impact Report (PDF) <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-cream py-20 lg:py-28" aria-labelledby="dist-heading">
        <div className="container-site">
          <p className="eyebrow text-rust">Where it went</p>
          <h2 id="dist-heading" className="mt-3 font-display text-4xl font-semibold text-deep">Every dollar, accounted for</h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            {[d.packages, d.meals, d.aid].map((group) => (
              <div key={group.heading} data-reveal>
                <h3 className="border-t-2 border-rust pt-4 font-display text-2xl font-semibold text-deep">{group.heading}</h3>
                <ul className="mt-5 space-y-2.5">
                  {group.lines.map((line) => (
                    <li key={line} className="border-t border-deep/15 pt-2.5 text-sm leading-relaxed text-deep/80">{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-deep py-20 text-cream lg:py-28" aria-labelledby="partners-heading">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div data-reveal>
            <p className="eyebrow text-gold">A collective effort</p>
            <h2 id="partners-heading" className="mt-3 font-display text-4xl font-semibold text-cream">Delivered with trusted partners</h2>
            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {ramadan2026.partners.map((p) => (
                <li key={p} className="rule-light pt-2.5 text-sm text-cream/80">{p}</li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <blockquote className="border-l-2 border-gold pl-6">
              <p className="font-display text-2xl italic leading-relaxed text-cream/90">{ramadan2026.highlight}</p>
            </blockquote>
            <p className="mt-8 text-[1.0625rem] leading-[1.85] text-cream/75">{ramadan2026.tarim}</p>
          </div>
        </div>
      </section>
      <section className="bg-paper py-20 lg:py-28" aria-label="Campaign photography">
        <div className="container-site">
          <p className="eyebrow text-rust">On the ground</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {photos.map((p, i) => (
              <img key={p.src} src={asset(p.src)} alt={p.alt} loading="lazy" data-reveal data-reveal-delay={i * 0.04} className="aspect-[4/5] w-full rounded-sm object-cover" />
            ))}
          </div>
          <p className="mt-4 text-xs uppercase tracking-eyebrow text-deep/70">Hamilton, Mississauga, Brampton, and Tarim, Yemen · Ramadan 2026</p>
          <div className="mt-10" data-reveal>
            <ExtButton href={links.supportOurWork}>Support the work that continues</ExtButton>
          </div>
        </div>
      </section>
      <SupportSection />
    </>
  )
}
