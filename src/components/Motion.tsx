import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './motion.css'

gsap.registerPlugin(ScrollTrigger)

export default function Motion() {
  const circle = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const candidates = gsap.utils.toArray<HTMLElement>(
        'main h1, main h2, main .editorial-label, .about-lower, .service-row, .approach-columns article, .partners, .region-list li, .faq-section details, .service-detail, .values-grid article, .contact-info, .contact-form, .footer-grid > *',
      )
      // Animate each content group once, without stacking parent/child movement.
      const targets = candidates.filter(el => !candidates.some(parent => parent !== el && parent.contains(el)))
      targets.forEach(el => {
        gsap.from(el, {
          y: 20, opacity: 0, duration: 0.75, ease: 'power2.out',
          delay: el.getBoundingClientRect().top < window.innerHeight ? 0.25 : 0,
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: el, start: 'top 94%', once: true },
        })
      })
      const refresh = () => ScrollTrigger.refresh()
      window.addEventListener('load', refresh)
      return () => window.removeEventListener('load', refresh)
    })
    media.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const dot = circle.current!
      const selector = 'a, button, summary'
      let active: HTMLElement | null = null
      let moving: HTMLElement | null = null
      let bounds: DOMRect | null = null
      const animations = gsap.context(() => {})
      const animate = (fn: () => void) => animations.add(fn)
      const reset = () => {
        if (moving) {
          const target = moving
          animate(() => { gsap.to(target, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.5)', overwrite: true, clearProps: 'transform' }) })
        }
        active = moving = null
        bounds = null
        animate(() => { gsap.to(dot, { opacity: 0, scale: 0.4, duration: 0.2, overwrite: 'auto' }) })
      }
      const move = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') return
        const target = event.target instanceof Element ? event.target.closest<HTMLElement>(selector) : null
        if (!target || target.matches(':disabled')) { if (active) reset(); return }
        if (target !== active) {
          reset()
          active = target
          bounds = target.getBoundingClientRect()
          // Large links keep their layout steady; only their arrow is magnetic.
          moving = bounds.width > 360 ? target.querySelector<HTMLElement>('.row-arrow') : target
          animate(() => {
            gsap.set(dot, { x: event.clientX, y: event.clientY })
            gsap.to(dot, { opacity: 1, scale: 1, duration: 0.25, overwrite: 'auto' })
          })
        }
        const rect = bounds!
        animate(() => {
          gsap.to(dot, { x: event.clientX, y: event.clientY, duration: 0.18, ease: 'power2.out', overwrite: 'auto' })
          if (moving) gsap.to(moving, {
            x: gsap.utils.clamp(-7, 7, (event.clientX - rect.left - rect.width / 2) * 0.14),
            y: gsap.utils.clamp(-5, 5, (event.clientY - rect.top - rect.height / 2) * 0.14),
            duration: 0.3, ease: 'power2.out', overwrite: true,
          })
        })
      }
      document.addEventListener('pointermove', move)
      document.documentElement.addEventListener('pointerleave', reset)
      window.addEventListener('blur', reset)
      window.addEventListener('scroll', reset, true)
      document.addEventListener('pointerdown', reset)
      return () => {
        document.removeEventListener('pointermove', move)
        document.documentElement.removeEventListener('pointerleave', reset)
        window.removeEventListener('blur', reset)
        window.removeEventListener('scroll', reset, true)
        document.removeEventListener('pointerdown', reset)
        animations.revert()
      }
    })
    return () => media.revert()
  }, [pathname])

  return <div ref={circle} className="magnetic-circle" aria-hidden="true" />
}
