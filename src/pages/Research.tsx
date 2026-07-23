import { Link } from 'react-router-dom'
import { Seo } from '../lib/seo'
import { breadcrumbSchema } from '../lib/schema'
import { PageHeader } from '../components/ui/PageHeader'
import { articles } from '../data/articles'
import { SupportSection } from '../components/home/sections'

export default function Research() {
  return (
    <>
      <Seo
        title="Research & Reflections"
        description="Writing from Muraqabah Initiative: spirituality, hadith sciences, and impact reports. Read, reflect, return."
        path="/research"
        jsonLd={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Research', path: '/research' }])}
      />
      <PageHeader
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Research', path: '/research' }]}
        eyebrow="Research &amp; Reflections"
        title="Read. Reflect. Return."
        lede="Essays and reports from the initiative: the ideas behind our name, the sciences behind our courses, and the documentation behind our khidmah."
      />
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-site space-y-2">
          {articles.map((a) => (
            <article key={a.slug} data-reveal className="grid gap-4 border-t border-deep/20 py-9 last:border-b sm:grid-cols-[160px_1fr_auto] sm:items-baseline sm:gap-8">
              <p className="eyebrow text-ember">{a.category}</p>
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-semibold leading-snug text-deep">
                  <Link to={`/research/${a.slug}`} className="hover:text-rust">{a.title}</Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-deep/70">{a.excerpt}</p>
              </div>
              <p className="text-xs uppercase tracking-eyebrow text-deep/70 sm:text-right">
                {a.dateLabel}
                <span className="mt-1 block">{a.readingTime}</span>
              </p>
            </article>
          ))}
        </div>
      </section>
      <SupportSection />
    </>
  )
}
