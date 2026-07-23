import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../navigation/Navbar'
import { Footer } from './Footer'
import { useLenis } from '../../hooks/useLenis'
import { useReveal } from '../../hooks/useReveal'

export function Layout() {
  const { pathname } = useLocation()
  useLenis()
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
