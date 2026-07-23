import { Seo } from '../lib/seo'
import { PageHeader } from '../components/ui/PageHeader'

export default function Accessibility() {
  return (
    <>
      <Seo title="Accessibility" description="Muraqabah Initiative's commitment to an accessible website." path="/accessibility" />
      <PageHeader crumbs={[{ name: 'Home', path: '/' }, { name: 'Accessibility', path: '/accessibility' }]} eyebrow="Commitment" title="Accessibility" />
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site max-w-3xl">
          <div className="prose-mq" data-reveal>
            <p>We want every visitor to be able to read, navigate, and use this website. It is built to the WCAG 2.2 AA standard: semantic structure with one clear heading order, visible keyboard focus on every interactive element, a skip-to-content link, text alternatives for meaningful images, and colour choices tested for contrast.</p>
            <p>If you prefer reduced motion, the site respects your system setting: animations are removed and all content appears immediately. Videos never play automatically.</p>
            <p>If anything on this site is difficult for you to use, tell us at info@muraqabah.ca. We treat accessibility issues as defects and will fix them.</p>
          </div>
        </div>
      </section>
    </>
  )
}
