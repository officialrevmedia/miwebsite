import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Eyebrow } from './primitives'

interface Crumb { name: string; path: string }

export function PageHeader({ eyebrow, title, lede, crumbs, arabic }: { eyebrow: string; title: ReactNode; lede?: string; crumbs?: Crumb[]; arabic?: string }) {
  return (
    <header className="bg-cream pb-16 pt-32 sm:pt-36 lg:pt-44">
      <div className="container-site">
        {crumbs && (
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
        )}
        <div className="flex items-start justify-between gap-8">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-deep sm:text-6xl">{title}</h1>
            {lede && <p className="prose-mq mt-6">{lede}</p>}
          </div>
          {arabic && (
            <p lang="ar" dir="rtl" className="hidden shrink-0 font-arabic text-6xl leading-none text-sand sm:block" aria-hidden="true">
              {arabic}
            </p>
          )}
        </div>
      </div>
    </header>
  )
}
