import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../lib/seo'
import { breadcrumbSchema, personSchema } from '../lib/schema'
import { ArchImage } from '../components/ui/primitives'
import { getTeacher } from '../data/teachers'
import { SupportSection } from '../components/home/sections'
import NotFound from './NotFound'

export default function TeacherProfile() {
  const { slug } = useParams()
  const t = slug ? getTeacher(slug) : undefined
  if (!t) return <NotFound />
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Teachers', path: '/teachers' },
    { name: t.name, path: `/teachers/${t.slug}` },
  ]
  return (
    <>
      <Seo title={t.name} description={t.summary} path={`/teachers/${t.slug}`} image={t.portrait} type="profile" jsonLd={[personSchema(t), breadcrumbSchema(crumbs)]} />
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
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,340px)_1fr]">
            <ArchImage
              src={t.portrait}
              srcSet={t.portraitSrcSet}
              sizes="(min-width: 1024px) 340px, 70vw"
              alt={t.portraitAlt}
              eager
              className="mx-auto aspect-[3/4] w-full max-w-[340px] border border-deep/20 lg:mx-0"
            />
            <div>
              <p aria-hidden="true" lang="ar" dir="rtl" className="font-arabic text-5xl text-sand">{t.arabicInitial}</p>
              <p className="eyebrow mt-4 text-ember">{t.title}</p>
              <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] text-deep sm:text-6xl">{t.name}</h1>
              <p className="prose-mq mt-6">{t.summary}</p>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div data-reveal>
            <h2 className="eyebrow text-rust">Biography</h2>
            <div className="prose-mq mt-6">
              {t.bio.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <div data-reveal>
              <h2 className="eyebrow text-rust">Training &amp; authorization</h2>
              <ul className="mt-6 space-y-3">
                {t.formation.map((f) => (
                  <li key={f} className="border-t border-deep/15 pt-3 text-sm leading-relaxed text-deep/80">{f}</li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <h2 className="eyebrow text-rust">Programs</h2>
              <ul className="mt-6 space-y-3">
                {t.teaches.map((f) => (
                  <li key={f} className="border-t border-deep/15 pt-3 text-sm leading-relaxed text-deep/80">{f}</li>
                ))}
              </ul>
              <Link to={`/programs/${t.currentProgramSlug}`} className="btn-primary mt-8">
                Current program <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SupportSection />
    </>
  )
}
