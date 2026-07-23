import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { links } from '../../data/links'
import { asset, assetSrcSet } from '../../lib/asset'
import { teachers } from '../../data/teachers'
import { programs } from '../../data/programs'
import { ramadan2026 } from '../../data/impact'
import { articles } from '../../data/articles'
import { featuredVideo, supportingVideos, channelUrl } from '../../data/videos'
import { ArabicWord, ArchImage, ExtButton, Metric, SectionHeading } from '../ui/primitives'
import { VideoEmbed } from '../media/VideoEmbed'

/* Section 3: What Muraqabah means */
export function MeaningSection() {
  return (
    <section className="bg-paper py-24 lg:py-32" aria-labelledby="meaning-heading">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="font-arabic text-6xl leading-none text-rust sm:text-7xl" lang="ar" dir="rtl">
            مُراقَبة
          </p>
          <p className="eyebrow mt-6 text-deep/70">muraqabah &middot; n.</p>
          <h2 id="meaning-heading" className="mt-4 font-display text-3xl font-semibold leading-snug text-deep sm:text-4xl">
            The vigilant awareness that Allah is always watching.
          </h2>
          <p className="prose-mq mx-auto mt-6 text-center">
            Muraqabah Initiative exists to make that awareness practical: a society dedicated to
            sacred knowledge, refined character, and sincere community service. Knowledge that is not
            only learned, but embodied.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-3">
          {[
            { ar: 'العِلم', en: 'Academics', body: 'Structured courses in the Islamic sciences, taught from primary classical sources by qualified teachers.' },
            { ar: 'الخِدمة', en: 'Khidmah', body: 'Community service rooted in the Prophetic tradition, at home and overseas.' },
            { ar: 'الجَماعة', en: 'Community', body: 'A living community of scholars, students, volunteers, and seekers.' },
          ].map((p, i) => (
            <div key={p.en} data-reveal data-reveal-delay={i * 0.08} className="border-t border-deep/20 pt-6 text-center sm:text-left">
              <ArabicWord className="text-2xl text-copper">{p.ar}</ArabicWord>
              <h3 className="mt-2 font-display text-2xl font-semibold text-deep">{p.en}</h3>
              <p className="mt-2 text-sm leading-relaxed text-deep/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Section 4: Teachers */
export function TeachersSection() {
  return (
    <section className="bg-cream py-24 lg:py-32" aria-labelledby="teachers-heading">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our Teachers" title={<span id="teachers-heading">Living transmission</span>}>
            <p className="prose-mq mt-5">
              Our students are not consuming content. They are being connected to an unbroken chain
              of transmission, carried by teachers formed at Dar al-Mustafa in Tarim, Yemen.
            </p>
          </SectionHeading>
          <Link to="/teachers" data-reveal className="link-underline mb-1 hidden items-center gap-1.5 text-sm font-semibold text-rust sm:inline-flex">
            Meet both teachers <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-10">
          {teachers.map((t, i) => (
            <article key={t.slug} data-reveal data-reveal-delay={i * 0.1} className="grid gap-7 sm:grid-cols-[minmax(0,220px)_1fr]">
              <ArchImage
                src={t.portrait}
                srcSet={t.portraitSrcSet}
                sizes="(min-width: 640px) 220px, 60vw"
                alt={t.portraitAlt}
                className="mx-auto aspect-[3/4] w-full max-w-[240px] border border-deep/20 sm:mx-0"
              />
              <div>
                <p className="eyebrow text-ember">{t.title}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-deep">{t.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep/75">{t.summary}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-eyebrow text-rust">{t.currentProgramLabel}</p>
                <Link to={`/teachers/${t.slug}`} className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-deep">
                  Full profile <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <figure className="mt-16" data-reveal>
          <div className="overflow-hidden rounded-sm border border-deep/20">
            <img
              src={asset('/images/teachers/recording-still-1600.webp')}
              srcSet={assetSrcSet('/images/teachers/recording-still-900.webp 900w, /images/teachers/recording-still-1600.webp 1600w')}
              sizes="(min-width: 1280px) 1152px, 100vw"
              alt="Shaykh Zakaria AbdilAziz seated at a table of classical texts during a recording session"
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-xs uppercase tracking-eyebrow text-deep/70">
            Recording free weekly lessons for our YouTube channel
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

/* Section 5: Programs */
export function ProgramsSection() {
  return (
    <section className="bg-paper py-24 lg:py-32" aria-labelledby="programs-heading">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Programs" title={<span id="programs-heading">What we are teaching</span>} />
          <Link to="/programs" data-reveal className="link-underline mb-1 inline-flex items-center gap-1.5 text-sm font-semibold text-rust">
            All programs <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12">
          {programs.map((p, i) => (
            <article
              key={p.slug}
              data-reveal
              data-reveal-delay={i * 0.06}
              className="grid gap-4 border-t border-deep/20 py-8 last:border-b sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:gap-8"
            >
              <div>
                <p className={`eyebrow ${p.statusTone === 'open' ? 'text-rust' : p.statusTone === 'running' ? 'text-ember' : 'text-deep/70'}`}>
                  {p.status}
                </p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-deep">
                  <Link to={`/programs/${p.slug}`} className="hover:text-rust">
                    {p.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-deep/70">{p.teacherName}</p>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-deep/75">
                {p.short} <span className="text-deep/70">{p.format}.</span>
              </p>
              <div className="sm:text-right">
                <a
                  href={p.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1.5 text-sm font-semibold text-rust"
                >
                  {p.statusTone === 'open' ? 'Register' : p.statusTone === 'running' ? 'Enrolment' : 'Recordings'}
                  <ArrowUpRight size={14} aria-hidden="true" />
                  <span className="sr-only">for {p.name} (opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Section 6: Impact */
export function ImpactSection() {
  return (
    <section className="bg-deep py-24 text-cream lg:py-32" aria-labelledby="impact-heading">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading tone="dark" eyebrow="2026 Ramadan Impact Report" title={<span id="impact-heading">Feed 1000+ people this Ramadan</span>}>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.85] text-cream/80">
                In two weeks, our community raised {ramadan2026.raised}. Every dollar went directly to
                those in need, with no administrative fees taken, delivered with trusted partners
                across the GTA and Hamilton and through our team on the ground in Tarim, Yemen.
              </p>
            </SectionHeading>
            <blockquote className="mt-8 max-w-xl border-l-2 border-gold pl-5" data-reveal>
              <p className="font-display text-xl italic leading-relaxed text-cream/90">{ramadan2026.hadith}</p>
            </blockquote>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal>
              <a href={asset(links.reportPdf)} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Read the 2026 Ramadan Impact Report
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <ExtButton href={links.supportOurWork} variant="outline-cream">
                Support Our Work
              </ExtButton>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {ramadan2026.metrics.map((m) => (
                <Metric key={m.label} value={m.value} label={m.label} tone="dark" />
              ))}
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3" data-reveal>
              {['/images/khidmah/khidmah-rice-carry.webp', '/images/khidmah/khidmah-packing-garage.webp', '/images/khidmah/tarim-street-delivery.webp'].map((src) => (
                <img key={src} src={asset(src)} alt="" loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover" />
              ))}
            </div>
            <p className="mt-3 text-xs uppercase tracking-eyebrow text-cream/65">
              Hamilton and Tarim, Yemen &middot; Ramadan 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Section 7: Video and media */
export function MediaSection() {
  return (
    <section className="bg-cream py-24 lg:py-32" aria-labelledby="media-heading">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Media" title={<span id="media-heading">Knowledge, offered freely</span>}>
            <p className="prose-mq mt-5">
              Alongside our structured programs, Muraqabah maintains a constant stream of free,
              beneficial knowledge. No paywall stands between a seeker and sound scholarship.
            </p>
          </SectionHeading>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div data-reveal>
            {featuredVideo.id && <VideoEmbed id={featuredVideo.id} title={featuredVideo.title} />}
          </div>
          <div className="flex flex-col justify-between gap-8">
            <ul className="divide-y divide-deep/15 border-y border-deep/15">
              {supportingVideos.map((v) => (
                <li key={v.title} data-reveal>
                  <a
                    href={v.id ? `https://www.youtube.com/watch?v=${v.id}` : channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className="block font-display text-xl font-semibold text-deep group-hover:text-rust">{v.title}</span>
                      <span className="mt-1 block text-sm text-deep/70">{v.detail}</span>
                    </span>
                    <ArrowUpRight size={18} className="shrink-0 text-rust" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <div data-reveal>
              <ExtButton href={channelUrl} variant="outline">
                Watch on YouTube
              </ExtButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Section 8: Research */
export function ResearchSection() {
  return (
    <section className="bg-paper py-24 lg:py-32" aria-labelledby="research-heading">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Research &amp; Reflections" title={<span id="research-heading">Read. Reflect. Return.</span>} />
          <Link to="/research" data-reveal className="link-underline mb-1 inline-flex items-center gap-1.5 text-sm font-semibold text-rust">
            All writing <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {articles.map((a, i) => (
            <article key={a.slug} data-reveal data-reveal-delay={i * 0.08} className="flex flex-col border-t border-deep/20 pt-6">
              <p className="eyebrow text-ember">{a.category}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-deep">
                <Link to={`/research/${a.slug}`} className="hover:text-rust">
                  {a.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-deep/70">{a.excerpt}</p>
              <p className="mt-5 text-xs uppercase tracking-eyebrow text-deep/70">
                {a.author} &middot; {a.dateLabel} &middot; {a.readingTime}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Section 9: Support and community */
export function SupportSection() {
  return (
    <section className="bg-ember py-24 text-cream lg:py-32" aria-labelledby="support-heading">
      <div className="container-site">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow text-sand">Sadaqah jariyah, a gift that keeps giving</p>
          <h2 id="support-heading" className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-cream sm:text-5xl">
            Be the patron of this generation.
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-[1.85] text-cream/85">
            The scholars of the past were sustained by those who understood the value of what they
            carried. Your support becomes a chain of benefit that carries forward long after this life.
          </p>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div data-reveal className="rule-light pt-7">
            <h3 className="font-display text-2xl font-semibold text-cream">Support Our Work</h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/75">
              Sustain our teachers, educational programming, media production, community service, and
              the day-to-day growth of the initiative.
            </p>
            <div className="mt-6">
              <ExtButton href={links.supportOurWork}>Support Our Work</ExtButton>
            </div>
          </div>
          <div data-reveal data-reveal-delay="0.08" className="rule-light pt-7">
            <h3 className="font-display text-2xl font-semibold text-cream">Sponsor a Student</h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/75">
              Remove financial barriers for sincere students seeking structured Islamic education.
              Open a seat for someone who cannot afford one.
            </p>
            <div className="mt-6">
              <ExtButton href={links.sponsorStudent} variant="outline-cream">
                Sponsor a Student
              </ExtButton>
            </div>
          </div>
        </div>
        <div className="rule-light mt-14 flex flex-col items-start justify-between gap-5 pt-7 sm:flex-row sm:items-center" data-reveal>
          <p className="max-w-md text-sm text-cream/75">
            Join the conversation directly: program announcements, campaign updates, and community life.
          </p>
          <ExtButton href={links.whatsapp} variant="outline-cream">
            Join the WhatsApp Community
          </ExtButton>
        </div>
      </div>
    </section>
  )
}
