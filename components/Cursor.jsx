'use client'

import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    // Don't run on mobile (no cursor)
    if (window.matchMedia('(max-width: 768px)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    const text = textRef.current
    if (!dot || !ring || !text) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx, ry = my

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    const tick = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      text.style.left = rx + 'px'
      text.style.top  = ry + 'px'
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)

    // Progress bar
    const onScroll = () => {
      const prog = document.getElementById('prog')
      if (prog) {
        prog.style.width = (scrollY / (document.body.scrollHeight - innerHeight) * 100) + '%'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Hover effect on interactive elements
    const hoverEls = document.querySelectorAll(
      'a, button, .pill, .tag, .diff-item, .sobre-feat, .proc-item, .h-stat'
    )
    const addH   = () => document.body.classList.add('c-h')
    const removeH = () => document.body.classList.remove('c-h')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addH)
      el.addEventListener('mouseleave', removeH)
    })

    // Data-cursor elements
    const cursorEls = document.querySelectorAll('[data-cursor]')
    cursorEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('c-xl')
        text.textContent = el.dataset.cursor
      })
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('c-xl')
        text.textContent = ''
      })
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', addH)
        el.removeEventListener('mouseleave', removeH)
      })
    }
  }, [])

  return (
    <>
      <div id="c"   ref={dotRef}  className={styles.dot}  />
      <div id="cr"  ref={ringRef} className={styles.ring} />
      <div id="ct"  ref={textRef} className={styles.text} />
      <div id="prog" />

      {/* Inject global cursor-state CSS */}
      <style>{`
        .c-h  #c  { width: 8px; height: 8px; }
        .c-h  #cr { width: 44px; height: 44px; border-color: rgba(232,255,71,.55); }
        .c-xl #c  { width: 0; opacity: 0; }
        .c-xl #cr { width: 72px; height: 72px; border-color: rgba(232,255,71,.22); }
        .c-xl #ct { opacity: 1; }
      `}</style>
    </>
  )
}
