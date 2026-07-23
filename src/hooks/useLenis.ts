import { useEffect } from 'react'
import Lenis from 'lenis'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

// Weighted, calm smooth scrolling. Skipped for reduced-motion users and
// coarse pointers (touch devices scroll natively for performance).
export function useLenis() {
  const reduced = usePrefersReducedMotion()
  useEffect(() => {
    if (reduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95 })
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [reduced])
}
