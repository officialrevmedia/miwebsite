import { Link } from 'react-router-dom'
import { Instagram, Youtube, MessageCircle, Mail } from 'lucide-react'
import { links, charityWording } from '../../data/links'
import { asset } from '../../lib/asset'

const col1 = [
  { label: 'About Muraqabah', to: '/about' },
  { label: 'Our Teachers', to: '/teachers' },
  { label: 'Impact', to: '/impact' },
  { label: 'Research & Reflections', to: '/research' },
  { label: 'Contact', to: '/contact' },
]
const col2 = [
  { label: 'All Programs', to: '/programs' },
  { label: 'Gardens of Paradise', to: '/programs/gardens-of-paradise' },
  { label: 'Chains of Trust', to: '/programs/chains-of-trust' },
  { label: 'Spheres of Faith', to: '/programs/spheres-of-faith' },
  { label: 'Media & Videos', to: '/media' },
]

export function Footer() {
  return (
    <footer className="bg-deep text-cream">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={asset('/images/brand/logo-colour-dark.png')} alt="Muraqabah Initiative" className="h-20 w-auto" loading="lazy" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Muraqabah Initiative connects seekers to traditional Islamic scholarship, meaningful
              spiritual formation, and sincere community service in the Greater Toronto Area and online.
            </p>
            <a href={links.email} className="link-underline mt-5 inline-flex items-center gap-2 text-sm text-gold">
              <Mail size={15} aria-hidden="true" /> {'info@muraqabah.ca'}
            </a>
          </div>
          <nav aria-label="Initiative">
            <p className="eyebrow text-gold">Initiative</p>
            <ul className="mt-5 space-y-3">
              {col1.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-underline text-sm text-cream/80 hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Programs">
            <p className="eyebrow text-gold">Programs</p>
            <ul className="mt-5 space-y-3">
              {col2.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-underline text-sm text-cream/80 hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow text-gold">Get Involved</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href={links.supportOurWork} target="_blank" rel="noopener noreferrer" className="link-underline text-cream/80 hover:text-cream">Support Our Work</a></li>
              <li><a href={links.sponsorStudent} target="_blank" rel="noopener noreferrer" className="link-underline text-cream/80 hover:text-cream">Sponsor a Student</a></li>
              <li><a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="link-underline text-cream/80 hover:text-cream">WhatsApp Community</a></li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/70 transition-colors hover:text-gold"><Instagram size={19} /></a>
              <a href={links.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-cream/70 transition-colors hover:text-gold"><Youtube size={20} /></a>
              <a href={links.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-cream/70 transition-colors hover:text-gold">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 6.9a4.8 4.8 0 0 1-3.5-1.6v7.6a5.9 5.9 0 1 1-5.9-5.9c.2 0 .5 0 .7.1v3a2.9 2.9 0 1 0 2.2 2.8V1.5h3a4.8 4.8 0 0 0 4.7 4.1z"/></svg>
              </a>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp community" className="text-cream/70 transition-colors hover:text-gold"><MessageCircle size={19} /></a>
            </div>
          </div>
        </div>
        {charityWording && (
          <p className="rule-light mt-12 pt-6 text-xs leading-relaxed text-cream/60">{charityWording}</p>
        )}
        <div className={`${charityWording ? '' : 'rule-light mt-12'} flex flex-col gap-3 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between`}>
          <p>&copy; {new Date().getFullYear()} Muraqabah Initiative. Rooted in faith, grounded in purpose.</p>
          <p className="flex gap-5">
            <Link to="/privacy" className="link-underline hover:text-cream">Privacy</Link>
            <Link to="/accessibility" className="link-underline hover:text-cream">Accessibility</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
