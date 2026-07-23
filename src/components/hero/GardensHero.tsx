import { Suspense, lazy, useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { links } from '../../data/links'
import { ThresholdArt } from './ThresholdArt'
import { ArchImage, Eyebrow } from '../ui/primitives'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const ThresholdScene = lazy(() => import('./ThresholdScene'))

export function GardensHero() {
  const reduced = usePrefersReducedMotion()
  const [enable3d, setEnable3d] = useState(false)

  useEffect(() => {
    if (reduced) return
    const fine = window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory
    const capable = fine && (memory === undefined || memory >= 4)
    if (!capable) return
    // Defer the 3D bundle until the page has settled.
    const id = window.setTimeout(() => setEnable3d(true), 1200)
    return () => window.clearTimeout(id)
  }, [reduced])

  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <Eyebrow>Gardens of Paradise &middot; Weekly Study Circle</Eyebrow>
          <h1 className="mt-6 font-display text-[2.9rem] font-semibold leading-[1.04] text-deep sm:text-6xl lg:text-7xl">
            Sit with knowledge.
            <br />
            Grow in <em className="italic text-rust">remembrance</em>.
          </h1>
          <p className="prose-mq mt-7">
            A recurring circle of sacred learning with Shaykh Zakaria AbdilAziz, bringing classical
            guidance into the realities of everyday life. The opening series, Weight of Words, begins
            with the ethics of speech.
          </p>
          <blockquote className="mt-7 max-w-xl border-l-2 border-gold pl-5">
            <p className="font-display text-lg italic leading-relaxed text-deep/80">
              &ldquo;The gatherings of remembrance are gardens of Paradise, so graze in them.&rdquo;
            </p>
            <cite className="eyebrow mt-2 block not-italic text-deep/70">Sunan al-Tirmidhi</cite>
          </blockquote>
          <p className="eyebrow mt-8 text-ember">Weekly online &middot; monthly in person &middot; launching September 2026</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={links.gardensRegister} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Register for Gardens of Paradise
              <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <Link to="/about" className="btn-outline">
              Discover Muraqabah
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px]" data-reveal>
          <div className="arch relative aspect-[3/4] overflow-hidden border border-deep/25 bg-cream">
            {enable3d ? (
              <Suspense fallback={<ThresholdArt className="h-full w-full" />}>
                <div className="absolute inset-0" aria-hidden="true">
                  <ThresholdScene />
                </div>
              </Suspense>
            ) : (
              <ThresholdArt className="h-full w-full" />
            )}
          </div>
          <ArchImage
            src="/images/teachers/zakaria-portrait-640.webp"
            srcSet="/images/teachers/zakaria-portrait-640.webp 640w, /images/teachers/zakaria-portrait-1100.webp 1100w"
            sizes="(min-width: 1024px) 210px, 40vw"
            alt="Shaykh Zakaria AbdilAziz, teacher of Gardens of Paradise"
            eager
            className="absolute -bottom-8 -left-6 w-[46%] border border-deep/25 shadow-[0_18px_40px_rgba(70,27,7,0.18)] sm:-left-10"
          />
        </div>
      </div>
    </section>
  )
}
