import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

// One reveal system for the whole site. Any element with [data-reveal]
// rises softly into place as it enters the viewport. Reduced-motion users
// see everything immediately.
export function useReveal() {
  const { pathname } = useLocation()
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const els = gsap.utils.toArray<HTMLElement>('[data-reveal]')
    if (reduced) {
      els.forEach((el) => el.classList.add('is-revealed'))
      return
    }
    const triggers: ScrollTrigger[] = []
    els.forEach((el) => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: Number(el.dataset.revealDelay ?? 0),
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          onComplete: () => el.classList.add('is-revealed'),
        },
      )
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
    })
    ScrollTrigger.refresh()
    return () => triggers.forEach((t) => t.kill())
  }, [pathname, reduced])
}
