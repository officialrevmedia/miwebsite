import { Seo } from '../lib/seo'
import { breadcrumbSchema } from '../lib/schema'
import { PageHeader } from '../components/ui/PageHeader'
import { ExtButton } from '../components/ui/primitives'
import { links, charityWording } from '../data/links'
import { SupportSection } from '../components/home/sections'

const faqs = [
  {
    q: 'Where does my donation go?',
    a: 'Support Our Work sustains our teachers, educational programming, media production, community service, and operations. Sponsor a Student directly removes financial barriers for sincere students seeking structured Islamic education.',
  },
  {
    q: 'How are donations processed?',
    a: 'All donations are processed securely through Zeffy, a payment platform for nonprofits that passes 100 percent of your donation through to the organization.',
  },
  {
    q: 'Can I give monthly?',
    a: 'Yes. Both donation forms support one-time and recurring monthly contributions. Gardens of Paradise registration is itself a monthly contribution in the amount that is right for you.',
  },
  {
    q: 'I have a question about my donation.',
    a: 'Write to us at info@muraqabah.ca and we will respond as soon as we can.',
  },
]

export default function Donate() {
  return (
    <>
      <Seo
        title="Donate"
        description="Support Muraqabah Initiative: sustain teachers, programs, and khidmah, or sponsor a student seeking structured Islamic education. Sadaqah jariyah, a gift that keeps giving."
        path="/donate"
        jsonLd={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Donate', path: '/donate' }])}
      />
      <PageHeader
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Donate', path: '/donate' }]}
        eyebrow="Sadaqah jariyah, a gift that keeps giving"
        title="Build something that outlives you."
        lede="The Prophet ﷺ taught that when a person dies, their deeds end except three: ongoing charity, beneficial knowledge, and a righteous child who prays for them. Supporting sacred knowledge gathers all three."
      />
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div data-reveal className="flex flex-col border-t-2 border-rust bg-cream p-8 sm:p-10">
            <p className="eyebrow text-rust">For the initiative</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-deep">Support Our Work</h2>
            <p className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-deep/80">
              Sustain our teachers, educational programming, media production, community service, and
              the day-to-day growth of the initiative. One-time or monthly.
            </p>
            <div className="mt-8">
              <ExtButton href={links.supportOurWork}>Support Our Work</ExtButton>
            </div>
          </div>
          <div data-reveal data-reveal-delay="0.08" className="flex flex-col border-t-2 border-gold bg-cream p-8 sm:p-10">
            <p className="eyebrow text-gold">For a seeker</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-deep">Sponsor a Student</h2>
            <p className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-deep/80">
              Remove financial barriers for sincere students. Your sponsorship opens a seat in
              structured Islamic education for someone who cannot afford one.
            </p>
            <div className="mt-8">
              <ExtButton href={links.sponsorStudent} variant="outline">Sponsor a Student</ExtButton>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cream py-20 lg:py-24" aria-labelledby="faq-heading">
        <div className="container-site max-w-3xl">
          <h2 id="faq-heading" className="eyebrow text-rust">Common questions</h2>
          <dl className="mt-8">
            {faqs.map((f) => (
              <div key={f.q} data-reveal className="border-t border-deep/20 py-6">
                <dt className="font-display text-2xl font-semibold text-deep">{f.q}</dt>
                <dd className="mt-3 max-w-2xl text-[1.0625rem] leading-relaxed text-deep/75">{f.a}</dd>
              </div>
            ))}
          </dl>
          {charityWording && <p className="mt-8 border-t border-deep/20 pt-6 text-sm leading-relaxed text-deep/70">{charityWording}</p>}
        </div>
      </section>
      <SupportSection />
    </>
  )
}
