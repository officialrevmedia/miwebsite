import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../lib/seo'
import { articleSchema, breadcrumbSchema } from '../lib/schema'
import { articles, getArticle } from '../data/articles'
import type { Block } from '../data/articles'
import { SupportSection } from '../components/home/sections'
import NotFound from './NotFound'

function BlockView({ block }: { block: Block }) {
  if (block.type === 'h2') {
    return <h2 className="mt-12 font-display text-3xl font-semibold text-deep">{block.text}</h2>
  }
  if (block.type === 'quote') {
    return (
      <blockquote className="mt-8 border-l-2 border-gold pl-6">
        <p className="font-display text-xl italic leading-relaxed text-deep/85">{block.text}</p>
        {block.cite && <cite className="eyebrow mt-2 block not-italic text-deep/70">{block.cite}</cite>}
      </blockquote>
    )
  }
  return <p className="mt-5 first:mt-0">{block.text}</p>
}

export default function Article() {
  const { slug } = useParams()
  const a = slug ? getArticle(slug) : undefined
  if (!a) return <NotFound />
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: a.title, path: `/research/${a.slug}` },
  ]
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 2)
  return (
    <>
      <Seo title={a.title} description={a.excerpt} path={`/research/${a.slug}`} type="article" jsonLd={[articleSchema(a), breadcrumbSchema(crumbs)]} />
      <header className="bg-cream pb-14 pt-32 sm:pt-36 lg:pt-44">
        <div className="container-site max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-eyebrow text-deep/70">
              <li><Link to="/" className="link-underline hover:text-deep">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/research" className="link-underline hover:text-deep">Research</Link></li>
            </ol>
          </nav>
          <p className="eyebrow text-ember">{a.category}</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.06] text-deep sm:text-6xl">{a.title}</h1>
          <p className="prose-mq mt-6">{a.excerpt}</p>
          <p className="mt-6 text-xs uppercase tracking-eyebrow text-deep/70">
            {a.author} &middot; {a.dateLabel} &middot; {a.readingTime}
          </p>
        </div>
      </header>
      <article className="bg-paper py-16 lg:py-24">
        <div className="container-site max-w-3xl">
          {a.reviewNote && (
            <p className="mb-10 border-l-2 border-gold bg-cream px-5 py-4 text-sm leading-relaxed text-deep/75">{a.reviewNote}</p>
          )}
          <div className="prose-mq" data-reveal>
            {a.body.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </div>
          <p className="mt-12 border-t border-deep/20 pt-6 text-sm text-deep/70">
            Questions or corrections? Write to us through the{' '}
            <Link to="/contact" className="link-underline font-semibold text-rust">contact page</Link>.
          </p>
        </div>
      </article>
      <section className="bg-cream py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="container-site">
          <h2 id="related-heading" className="eyebrow text-rust">Keep reading</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {related.map((r) => (
              <article key={r.slug} data-reveal className="border-t border-deep/20 pt-5">
                <p className="eyebrow text-ember">{r.category}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-deep">
                  <Link to={`/research/${r.slug}`} className="hover:text-rust">{r.title}</Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-deep/70">{r.excerpt}</p>
                <Link to={`/research/${r.slug}`} className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-rust">
                  Read <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SupportSection />
    </>
  )
}
