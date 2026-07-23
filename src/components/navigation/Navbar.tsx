import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { links } from '../../data/links'
import { asset } from '../../lib/asset'

const nav = [
  { label: 'About', to: '/about' },
  { label: 'Teachers', to: '/teachers' },
  { label: 'Programs', to: '/programs' },
  { label: 'Impact', to: '/impact' },
  { label: 'Research', to: '/research' },
  { label: 'Media', to: '/media' },
  { label: 'Donate', to: '/donate' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-calm ${
        scrolled ? 'bg-paper/95 shadow-[0_1px_0_rgba(70,27,7,0.12)] backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-deep focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <div className={`container-site flex items-center justify-between transition-all duration-500 ease-calm ${scrolled ? 'py-3' : 'py-5'}`}>
        <Link to="/" className="flex items-center gap-3" aria-label="Muraqabah Initiative, home">
          <img src={asset('/images/brand/emblem-colour.png')} alt="" className={`w-auto transition-all duration-500 ease-calm ${scrolled ? 'h-9' : 'h-11'}`} />
          <span className="font-display text-xl font-semibold lowercase leading-none text-deep">
            muraqabah
            <span className="block text-[0.6em] tracking-[0.18em] text-deep/70">initiative</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `link-underline text-sm font-medium ${isActive ? 'text-rust' : 'text-deep/85 hover:text-deep'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a href={links.gardensRegister} target="_blank" rel="noopener noreferrer" className="btn-primary !min-h-[40px] !px-5 !py-2 text-[13px]">
            Register for Gardens
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-deep lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-deep px-6 pb-10 pt-24 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 overflow-y-auto">
          {nav.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              tabIndex={open ? 0 : -1}
              className="flex min-h-[52px] items-baseline gap-4 border-b border-cream/15 py-3 font-display text-3xl font-semibold text-cream"
            >
              <span className="font-sans text-xs text-gold">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <a
          href={links.gardensRegister}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
          className="btn-primary mt-8 w-full"
        >
          Register for Gardens of Paradise
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} className="btn-outline-cream mt-3 w-full">
          Join the WhatsApp Community
        </a>
      </div>
    </header>
  )
}
