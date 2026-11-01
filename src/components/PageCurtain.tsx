import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import './page-curtain.css'

export default function PageCurtain() {
  const curtain = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      // Cover the new route before paint, then lift to reveal it underneath.
      // Reverting the context also handles rapid navigation and Strict Mode.
      gsap.fromTo(curtain.current,
        { yPercent: 0, visibility: 'visible' },
        {
          yPercent: -100,
          duration: 0.6,
          delay: 0,
          ease: 'power3.inOut',
          onComplete: () => { gsap.set(curtain.current, { visibility: 'hidden' }) },
        },
      )
    })
    return () => media.revert()
  }, [pathname])

  return <div ref={curtain} className="page-curtain" aria-hidden="true" />
}
