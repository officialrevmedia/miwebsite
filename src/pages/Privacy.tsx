import { Seo } from '../lib/seo'
import { PageHeader } from '../components/ui/PageHeader'

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy" description="How Muraqabah Initiative handles your information." path="/privacy" />
      <PageHeader crumbs={[{ name: 'Home', path: '/' }, { name: 'Privacy', path: '/privacy' }]} eyebrow="Policy" title="Privacy" />
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site max-w-3xl">
          <div className="prose-mq" data-reveal>
            <p>Muraqabah Initiative respects your privacy. This website does not use advertising trackers and does not sell personal information.</p>
            <p>This site is a static website. We do not collect personal information through it directly. Videos are embedded through YouTube&rsquo;s privacy-enhanced mode and load only after you choose to play them.</p>
            <p>Donations and program registrations are processed by Zeffy on Zeffy&rsquo;s own pages, under Zeffy&rsquo;s privacy policy. Course delivery uses Zoom, under Zoom&rsquo;s privacy policy. If you email us or ask to join our newsletter, we use your email address only for Muraqabah correspondence and updates, and you can ask us to remove it at any time.</p>
            <p>Questions about your information can be sent to info@muraqabah.ca.</p>
          </div>
        </div>
      </section>
    </>
  )
}
