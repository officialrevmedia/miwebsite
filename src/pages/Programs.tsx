import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Seo } from '../lib/seo'
import { breadcrumbSchema, courseSchema } from '../lib/schema'
import { PageHeader } from '../components/ui/PageHeader'
import { programs, archive } from '../data/programs'
import { SupportSection } from '../components/home/sections'

export default function Programs() {
  return (
    <>
      <Seo
        title="Programs"
        description="Structured courses in the Islamic sciences: Gardens of Paradise with Shaykh Zakaria AbdilAziz, Chains of Trust with Shaykh Nuh Sanders, and our completed flagship, Spheres of Faith."
        path="/programs"
        jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Programs', path: '/programs' }]), ...programs.map(courseSchema)]}
      />
      <PageHeader
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Programs', path: '/programs' }]}
        eyebrow="Programs"
        title="Text-based. Teacher-led. Transformative."
        arabic="العِلم"
        lede="Every Muraqabah course is rooted in a classical text, guided by a qualified teacher, and structured so that what is studied is carried into life."
      />
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-site space-y-16">
          {programs.map((p) => (
            <article key={p.slug} data-reveal className="grid gap-8 border-t border-deep/20 pt-10 lg:grid-cols-[1fr_1.4fr_auto]">
              <div>
                <p className={`eyebrow ${p.statusTone === 'open' ? 'text-rust' : p.statusTone === 'running' ? 'text-ember' : 'text-deep/70'}`}>{p.status}</p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-deep">
                  <Link to={`/programs/${p.slug}`} className="hover:text-rust">{p.name}</Link>
                </h2>
                {p.arabic && <p lang="ar" dir="rtl" className="mt-2 font-arabic text-2xl text-copper">{p.arabic}</p>}
                <p className="mt-3 text-sm text-deep/70">{p.teacherName}</p>
              </div>
              <div className="max-w-xl">
                <p className="text-[1.0625rem] leading-relaxed text-deep/80">{p.short}</p>
                <dl className="mt-5 space-y-1.5 text-sm text-deep/70">
                  <div className="flex gap-3"><dt className="w-20 shrink-0 font-semibold text-deep/70">Format</dt><dd>{p.format}</dd></div>
                  <div className="flex gap-3"><dt className="w-20 shrink-0 font-semibold text-deep/70">Schedule</dt><dd>{p.schedule}</dd></div>
                  <div className="flex gap-3"><dt className="w-20 shrink-0 font-semibold text-deep/70">Level</dt><dd>{p.level}</dd></div>
                  {p.text && <div className="flex gap-3"><dt className="w-20 shrink-0 font-semibold text-deep/70">Text</dt><dd>{p.text}</dd></div>}
                </dl>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Link to={`/programs/${p.slug}`} className="btn-outline">Program page <ArrowRight size={15} aria-hidden="true" /></Link>
                <a href={p.cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {p.cta.label} <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-cream py-20 lg:py-24" aria-labelledby="archive-heading">
        <div className="container-site">
          <p className="eyebrow text-rust">Past and announced</p>
          <h2 id="archive-heading" className="mt-3 font-display text-3xl font-semibold text-deep">What we have built, and what is coming</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {archive.map((a, i) => (
              <div key={a.name} data-reveal data-reveal-delay={i * 0.05} className="border-t border-deep/20 pt-5">
                <h3 className="font-display text-xl font-semibold text-deep">{a.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-deep/70">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SupportSection />
    </>
  )
}
