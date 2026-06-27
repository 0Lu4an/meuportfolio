'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const ro = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('v')
          ro.unobserve(e.target)
        }
      }),
      { threshold: 0.08 }
    )

    // Aguarda o DOM completo
    const timer = setTimeout(() => {
      document.querySelectorAll('main .r, footer .r').forEach(el => ro.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      ro.disconnect()
    }
  }, [])

  return null
}