import { ArrowUpRight } from 'lucide-react'
import { Seo } from '../lib/seo'
import { breadcrumbSchema, videoSchema } from '../lib/schema'
import { PageHeader } from '../components/ui/PageHeader'
import { ExtButton } from '../components/ui/primitives'
import { VideoEmbed } from '../components/media/VideoEmbed'
import { featuredVideo, supportingVideos, channelUrl } from '../data/videos'
import { socialPosts } from '../data/social'
import { links } from '../data/links'
import { asset } from '../lib/asset'
import { SupportSection } from '../components/home/sections'

const channels = [
  { label: 'YouTube', detail: 'Full lessons, program recordings, and khidmah documentation', href: links.youtube },
  { label: 'Instagram', detail: 'Reminders, program announcements, and community life', href: links.instagram },
  { label: 'TikTok', detail: 'Short-form beneficial knowledge', href: links.tiktok },
  { label: 'WhatsApp Community', detail: 'Announcements and conversation, directly', href: links.whatsapp },
]

export default function Media() {
  return (
    <>
      <Seo
        title="Media"
        description="Free, beneficial knowledge from Muraqabah Initiative: lessons, program recordings, and khidmah documentation on YouTube, Instagram, and TikTok."
        path="/media"
        jsonLd={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Media', path: '/media' }]),
          ...(featuredVideo.id ? [videoSchema(featuredVideo.id, featuredVideo.title)] : []),
        ]}
      />
      <PageHeader
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Media', path: '/media' }]}
        eyebrow="Media"
        title="Knowledge, offered freely"
        lede="Alongside our structured programs, Muraqabah maintains a constant stream of free, beneficial knowledge. No paywall stands between a seeker and sound scholarship."
      />
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div data-reveal>
            {featuredVideo.id && <VideoEmbed id={featuredVideo.id} title={featuredVideo.title} />}
            <p className="mt-4 text-sm text-deep/70">{featuredVideo.detail}</p>
          </div>
          <div>
            <h2 className="eyebrow text-rust">More from the channel</h2>
            <ul className="mt-5 divide-y divide-deep/15 border-y border-deep/15">
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
            <div className="mt-7" data-reveal>
              <ExtButton href={channelUrl}>Watch on YouTube</ExtButton>
            </div>
          </div>
        </div>
      </section>
      {socialPosts.length > 0 && (
        <section className="bg-cream py-16 lg:py-24" aria-labelledby="social-heading">
          <div className="container-site">
            <h2 id="social-heading" className="eyebrow text-rust">From our community</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {socialPosts.map((p) => (
                <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" className="group border-t border-deep/20 pt-4" data-reveal>
                  {p.image && <img src={asset(p.image)} alt="" loading="lazy" className="aspect-square w-full rounded-sm object-cover" />}
                  <p className="mt-3 text-sm leading-relaxed text-deep/75 group-hover:text-deep">{p.caption}</p>
                  <p className="eyebrow mt-2 text-ember">{p.platform}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="bg-cream py-16 lg:py-24" aria-labelledby="channels-heading">
        <div className="container-site">
          <h2 id="channels-heading" className="eyebrow text-rust">Where to find us</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" data-reveal data-reveal-delay={i * 0.05} className="group border-t border-deep/20 pt-5">
                <p className="flex items-center gap-2 font-display text-2xl font-semibold text-deep group-hover:text-rust">
                  {c.label} <ArrowUpRight size={16} aria-hidden="true" />
                </p>
                <p className="mt-2 text-sm leading-relaxed text-deep/70">{c.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <SupportSection />
    </>
  )
}
