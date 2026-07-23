import { Seo } from '../lib/seo'
import { organizationSchema, breadcrumbSchema } from '../lib/schema'
import { PageHeader } from '../components/ui/PageHeader'
import { ArabicWord, Metric, SectionHeading } from '../components/ui/primitives'
import { yearOne } from '../data/impact'
import { SupportSection } from '../components/home/sections'

const commitments = [
  { title: 'Authentic transmission', body: 'Unbroken scholarly chains reaching back to the Prophet \ufdfa.' },
  { title: 'Structured learning', body: 'Classical texts, taught by qualified teachers.' },
  { title: 'Character first', body: 'Knowledge designed to transform the self, the home, and the community.' },
  { title: 'Service as expression', body: 'Khidmah flowing naturally from what we teach.' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Muraqabah Initiative is a GTA-based society dedicated to sacred knowledge, refined character, and sincere community service. Knowledge that is not only learned, but embodied."
        path="/about"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]}
      />
      <PageHeader
        crumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]}
        eyebrow="Rooted in faith, grounded in purpose"
        title={<>Knowledge that is not only learned, but <em className="italic text-rust">embodied</em>.</>}
        arabic="مُراقَبة"
        lede="Muraqabah is the vigilant awareness that Allah is always watching. Our vision is to build a community that lives with it."
      />
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="prose-mq" data-reveal>
            <p>
              Muraqabah Initiative exists to make that awareness practical: a society dedicated to
              sacred knowledge, refined character, and sincere community service. This constant
              awareness shapes how we worship, how we act, and how we care for others. It is one of
              the most essential dimensions of our faith.
            </p>
            <p>
              Canada&rsquo;s Muslim community is the fastest-growing religious demographic in the
              country: young, educated, and searching. In the absence of qualified scholarship, that
              vacuum is filled by unqualified voices. Muraqabah exists to be the alternative.
            </p>
            <p>
              Muraqabah was founded by Shaykh Zakaria AbdilAziz, Mirza Veletanlic, and Ahmad Mirza,
              and is based in the Greater Toronto Area, operating online globally.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {commitments.map((c, i) => (
              <div key={c.title} data-reveal data-reveal-delay={i * 0.06} className="border-t border-deep/20 pt-5">
                <h2 className="font-display text-xl font-semibold text-deep">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-deep/70">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cream py-20 lg:py-28" aria-labelledby="pillars-heading">
        <div className="container-site">
          <SectionHeading eyebrow="Our Pillars" title={<span id="pillars-heading">Three pillars. One purpose.</span>} />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              { ar: 'العِلم', en: 'Academics', body: 'Structured courses in the Islamic sciences: text-based learning from primary classical sources, live weekly classes, and one-day intensives.' },
              { ar: 'الخِدمة', en: 'Khidmah', body: 'Community service rooted in Prophetic tradition: food drives, Ramadan care packages, financial aid, and support for those in need at home and abroad.' },
              { ar: 'الجَماعة', en: 'Community', body: 'A living community of learners, study circles, scholars, and seekers, united by a shared love of knowledge and commitment to spiritual growth.' },
            ].map((p, i) => (
              <div key={p.en} data-reveal data-reveal-delay={i * 0.07} className="border-t border-deep/20 pt-6">
                <ArabicWord className="text-3xl text-copper">{p.ar}</ArabicWord>
                <h3 className="mt-3 font-display text-2xl font-semibold text-deep">{p.en}</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-deep py-20 text-cream lg:py-28" aria-labelledby="yearone-heading">
        <div className="container-site">
          <SectionHeading tone="dark" eyebrow="Year One" title={<span id="yearone-heading">{yearOne.heading}</span>} />
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {yearOne.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} tone="dark" />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-paper py-20 lg:py-28" aria-labelledby="standard-heading">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="The Standard" title={<span id="standard-heading">Sacred knowledge deserves a sacred standard of presentation.</span>} />
          <div className="prose-mq" data-reveal>
            <p>
              We are not a cookie-cutter platform. Every course, campaign, and publication is crafted
              to a professional, premium standard: cinematic video and photography, designed course
              materials and impact reports that honour the tradition they carry, and excellence as a
              form of respect, for the knowledge and for you.
            </p>
          </div>
        </div>
      </section>
      <SupportSection />
    </>
  )
}
