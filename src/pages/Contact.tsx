import { ArrowUpRight, Mail } from 'lucide-react'
import { Seo } from '../lib/seo'
import { breadcrumbSchema, organizationSchema } from '../lib/schema'
import { PageHeader } from '../components/ui/PageHeader'
import { links } from '../data/links'
import { SupportSection } from '../components/home/sections'

const channels = [
  { label: 'Email', value: 'info@muraqabah.ca', href: links.email, detail: 'For program questions, partnerships, media, corrections, and everything else. We read every message.' },
  { label: 'WhatsApp Community', value: 'Join the community', href: links.whatsapp, detail: 'Program announcements, campaign updates, and community conversation, directly.' },
  { label: 'Instagram', value: '@muraqabah.initiative', href: links.instagram, detail: 'Reminders, announcements, and community life.' },
  { label: 'All links', value: 'linktr.ee/MuraqabahInitiative', href: links.linktree, detail: 'Every Muraqabah destination in one place.' },
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Reach Muraqabah Initiative: email info@muraqabah.ca, join the WhatsApp community, or find us on Instagram, TikTok, and YouTube. Based in the GTA, online globally."
        path="/contact"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]}
      />
      <PageHeader
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]}
        eyebrow="Contact"
        title="Write to us."
        lede="Based in the Greater Toronto Area, operating online globally. Whether you have a question about a program, a partnership, or a correction, we would like to hear from you."
      />
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-site">
          <a href={links.email} className="group inline-flex items-center gap-4" data-reveal>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-rust text-cream transition-colors group-hover:bg-ember">
              <Mail size={22} aria-hidden="true" />
            </span>
            <span className="font-display text-3xl font-semibold text-deep group-hover:text-rust sm:text-4xl">info@muraqabah.ca</span>
          </a>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => (
              <a key={c.label} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" data-reveal data-reveal-delay={i * 0.05} className="group border-t border-deep/20 pt-5">
                <p className="eyebrow text-ember">{c.label}</p>
                <p className="mt-2 flex items-center gap-1.5 font-display text-xl font-semibold text-deep group-hover:text-rust">
                  {c.value} <ArrowUpRight size={15} aria-hidden="true" />
                </p>
                <p className="mt-2 text-sm leading-relaxed text-deep/70">{c.detail}</p>
              </a>
            ))}
          </div>
          <p className="mt-14 max-w-xl border-t border-deep/20 pt-6 text-sm leading-relaxed text-deep/70" data-reveal>
            Newsletter: while our sign-up form is being finished, email us and ask to be added. We
            only use your email for Muraqabah updates, and you can unsubscribe any time by writing to
            info@muraqabah.ca.
          </p>
        </div>
      </section>
      <SupportSection />
    </>
  )
}
