import { Link, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Seo } from '../lib/seo'
import { breadcrumbSchema, courseSchema } from '../lib/schema'
import { getProgram } from '../data/programs'
import { getTeacher } from '../data/teachers'
import { ArchImage } from '../components/ui/primitives'
import { SupportSection } from '../components/home/sections'
import NotFound from './NotFound'

export default function ProgramPage() {
  const { slug } = useParams()
  const p = slug ? getProgram(slug) : undefined
  if (!p) return <NotFound />
  const teacher = getTeacher(p.teacherSlug)
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: p.name, path: `/programs/${p.slug}` },
  ]
  return (
    <>
      <Seo title={p.name} description={p.short} path={`/programs/${p.slug}`} jsonLd={[courseSchema(p), breadcrumbSchema(crumbs)]} />
      <header className="bg-cream pb-16 pt-32 sm:pt-36 lg:pt-44">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-eyebrow text-deep/70">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-deep/75">{c.name}</span>
                  ) : (
                    <Link to={c.path} className="link-underline hover:text-deep">{c.name}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className={`eyebrow ${p.statusTone === 'open' ? 'text-rust' : p.statusTone === 'running' ? 'text-ember' : 'text-deep/70'}`}>{p.status}</p>
              <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-deep sm:text-6xl">{p.name}</h1>
              {p.arabic && <p lang="ar" dir="rtl" className="mt-4 font-arabic text-3xl text-copper">{p.arabic}</p>}
              <p className="prose-mq mt-6">{p.short}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={p.cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {p.cta.label} <ArrowUpRight size={15} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
              {p.note && <p className="mt-5 max-w-xl text-sm leading-relaxed text-deep/70">{p.note}</p>}
            </div>
            {teacher && (
              <Link to={`/teachers/${teacher.slug}`} className="group hidden max-w-[280px] lg:block" data-reveal>
                <ArchImage
                  src={teacher.portrait}
                  srcSet={teacher.portraitSrcSet}
                  sizes="280px"
                  alt={teacher.portraitAlt}
                  className="aspect-[3/4] border border-deep/20"
                />
                <p className="eyebrow mt-4 text-ember">Taught by</p>
                <p className="mt-1 font-display text-2xl font-semibold text-deep group-hover:text-rust">{teacher.name}</p>
              </Link>
            )}
          </div>
        </div>
      </header>
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-mq" data-reveal>
            {p.description.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
          <aside data-reveal>
            <h2 className="eyebrow text-rust">At a glance</h2>
            <dl className="mt-6 space-y-4">
              {[
                ['Teacher', p.teacherName],
                ['Format', p.format],
                ['Schedule', p.schedule],
                ['Level', p.level],
                ...(p.text ? [['Text', p.text] as [string, string]] : []),
              ].map(([dt, dd]) => (
                <div key={dt} className="border-t border-deep/15 pt-3">
                  <dt className="text-xs font-semibold uppercase tracking-eyebrow text-deep/70">{dt}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-deep/85">{dd}</dd>
                </div>
              ))}
            </dl>
            {teacher && (
              <Link to={`/teachers/${teacher.slug}`} className="btn-outline mt-8 lg:hidden">
                About {teacher.shortName} <ArrowRight size={15} aria-hidden="true" />
              </Link>
            )}
          </aside>
        </div>
      </section>
      {p.themes && (
        <section className="bg-cream py-20 lg:py-28" aria-labelledby="themes-heading">
          <div className="container-site">
            <p className="eyebrow text-rust">Opening series</p>
            <h2 id="themes-heading" className="mt-3 max-w-2xl font-display text-4xl font-semibold text-deep">{p.themesTitle}</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {p.themes.map((t, i) => (
                <div key={t.title} data-reveal data-reveal-delay={i * 0.05} className="border-t border-deep/20 pt-5">
                  <h3 className="font-display text-xl font-semibold text-deep">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-deep/70">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <SupportSection />
    </>
  )
}
