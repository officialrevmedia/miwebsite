import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Seo } from '../lib/seo'
import { breadcrumbSchema } from '../lib/schema'
import { PageHeader } from '../components/ui/PageHeader'
import { Metric, SectionHeading, ExtButton } from '../components/ui/primitives'
import { links } from '../data/links'
import { asset } from '../lib/asset'
import { ramadan2026, yearOne, qurbani2026 } from '../data/impact'
import { SupportSection } from '../components/home/sections'

export default function Impact() {
  return (
    <>
      <Seo
        title="Impact"
        description="Khidmah in numbers: the 2026 Ramadan campaign, Qurbani 2026 in Tarim, Yemen, and a first year of programs that reached 600+ students and fed 10,000+ people."
        path="/impact"
        jsonLd={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Impact', path: '/impact' }])}
      />
      <PageHeader
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Impact', path: '/impact' }]}
        eyebrow="Khidmah"
        title="Knowledge in action"
        arabic="الخِدمة"
        lede="Service is not an add-on to what we teach. It is the proof of it. Every figure below is drawn from documented campaigns, delivered with trusted partners at home and in Tarim, Yemen."
      />
      <section className="bg-paper py-20 lg:py-28" aria-labelledby="yo-heading">
        <div className="container-site">
          <SectionHeading eyebrow="Year One" title={<span id="yo-heading">{yearOne.heading}</span>} />
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {yearOne.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-deep py-20 text-cream lg:py-28" aria-labelledby="ram-heading">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading tone="dark" eyebrow="Ramadan 2026" title={<span id="ram-heading">{ramadan2026.title}</span>} />
            <Link to="/impact/ramadan-2026" data-reveal className="link-underline mb-1 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
              Full campaign breakdown <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {ramadan2026.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} tone="dark" />
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal>
            <a href={asset(links.reportPdf)} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Read the Impact Report (PDF) <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <Link to="/impact/ramadan-2026" className="btn-outline-cream">
              See the full breakdown <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-cream py-20 lg:py-28" aria-labelledby="qurbani-heading">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Eid al-Adha 2026" title={<span id="qurbani-heading">{qurbani2026.heading}</span>}>
              <p className="prose-mq mt-6">{qurbani2026.body}</p>
              <div className="mt-8" data-reveal>
                <ExtButton href={links.youtube} variant="outline">Watch the documentation</ExtButton>
              </div>
            </SectionHeading>
          </div>
          <div className="grid content-start gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {qurbani2026.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </div>
      </section>
      <SupportSection />
    </>
  )
}
