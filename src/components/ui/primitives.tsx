import type { ReactNode } from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { asset, assetSrcSet } from '../../lib/asset'

export function Eyebrow({ children, tone = 'rust' }: { children: ReactNode; tone?: 'rust' | 'gold' | 'cream' }) {
  const color = tone === 'gold' ? 'text-gold' : tone === 'cream' ? 'text-cream/70' : 'text-rust'
  return <p className={`eyebrow ${color}`}>{children}</p>
}

export function ExtButton({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'outline' | 'outline-cream' }) {
  const cls = variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : 'btn-outline-cream'
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

export function InButton({ to, children, variant = 'outline' }: { to: string; children: ReactNode; variant?: 'primary' | 'outline' | 'outline-cream' }) {
  const cls = variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : 'btn-outline-cream'
  return (
    <Link to={to} className={cls}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  )
}

export function ArchImage({ src, srcSet, sizes, alt, className = '', eager = false }: { src: string; srcSet?: string; sizes?: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <div className={`arch overflow-hidden ${className}`}>
      <img
        src={asset(src)}
        srcSet={srcSet ? assetSrcSet(srcSet) : undefined}
        sizes={sizes}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding={eager ? 'sync' : 'async'}
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export function SectionHeading({ eyebrow, title, tone = 'light', children }: { eyebrow: string; title: ReactNode; tone?: 'light' | 'dark'; children?: ReactNode }) {
  return (
    <div data-reveal>
      <Eyebrow tone={tone === 'dark' ? 'gold' : 'rust'}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl ${tone === 'dark' ? 'text-cream' : 'text-deep'}`}>
        {title}
      </h2>
      {children}
    </div>
  )
}

export function Metric({ value, label, tone = 'light' }: { value: string; label: string; tone?: 'light' | 'dark' }) {
  return (
    <div data-reveal className={`border-t pt-5 ${tone === 'dark' ? 'border-cream/25' : 'border-deep/20'}`}>
      <p className={`font-display text-4xl font-semibold sm:text-5xl ${tone === 'dark' ? 'text-cream' : 'text-deep'}`}>{value}</p>
      <p className={`mt-2 max-w-[30ch] text-sm leading-relaxed ${tone === 'dark' ? 'text-cream/70' : 'text-deep/70'}`}>{label}</p>
    </div>
  )
}

export function ArabicWord({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span lang="ar" dir="rtl" className={`font-arabic ${className}`}>
      {children}
    </span>
  )
}
