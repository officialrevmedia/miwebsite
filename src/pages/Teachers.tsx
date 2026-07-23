import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../lib/seo'
import { breadcrumbSchema, personSchema } from '../lib/schema'
import { PageHeader } from '../components/ui/PageHeader'
import { ArchImage } from '../components/ui/primitives'
import { teachers } from '../data/teachers'
import { SupportSection } from '../components/home/sections'

export default function Teachers() {
  return (
    <>
      <Seo
        title="Our Teachers"
        description="Meet Shaykh Zakaria AbdilAziz and Shaykh Nuh Sanders, teachers formed at Dar al-Mustafa in Tarim, Yemen, carrying an unbroken chain of transmission."
        path="/teachers"
        jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Teachers', path: '/teachers' }]), ...teachers.map(personSchema)]}
      />
      <PageHeader
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Teachers', path: '/teachers' }]}
        eyebrow="Our Teachers"
        title="Living transmission"
        lede="Our students are not consuming content. They are being connected to an unbroken chain of transmission, carried by teachers formed at Dar al-Mustafa in Tarim, Yemen."
      />
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-site space-y-20">
          {teachers.map((t, i) => (
            <article key={t.slug} data-reveal className={`grid items-center gap-10 lg:grid-cols-[minmax(0,380px)_1fr] ${i % 2 === 1 ? 'lg:grid-flow-dense lg:[&>*:first-child]:col-start-2' : ''}`}>
              <ArchImage
                src={t.portrait}
                srcSet={t.portraitSrcSet}
                sizes="(min-width: 1024px) 380px, 80vw"
                alt={t.portraitAlt}
                className="mx-auto aspect-[3/4] w-full max-w-[380px] border border-deep/20"
              />
              <div>
                <p className="eyebrow text-ember">{t.title}</p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-deep sm:text-5xl">{t.name}</h2>
                <p className="prose-mq mt-5">{t.summary}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-eyebrow text-rust">{t.currentProgramLabel}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to={`/teachers/${t.slug}`} className="btn-primary">
                    Full profile <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                  <Link to={`/programs/${t.currentProgramSlug}`} className="btn-outline">
                    Current program
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SupportSection />
    </>
  )
}
