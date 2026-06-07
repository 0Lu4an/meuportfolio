'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const stats = [
  { value: null, display: '3+', label: 'Anos codando' },
  { value: null, display: '2+', label: 'Empresas fundadas' },
  { value: 100,  suffix: '%',   label: 'Entregue no prazo' },
  { value: null, display: '∞',  label: 'Café consumido' },
]

function animateCount(el, target, suffix = '') {
  const duration = 1400
  const start = performance.now()
  const update = (now) => {
    const p = Math.min((now - start) / duration, 1)
    const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
    el.textContent = Math.floor(eased * target) + suffix
    if (p < 1) requestAnimationFrame(update)
    else el.textContent = target + suffix
  }
  requestAnimationFrame(update)
}

export default function Hero() {
  const statRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target
          const idx = Number(el.dataset.idx)
          const stat = stats[idx]
          if (stat.value !== null) animateCount(el, stat.value, stat.suffix)
          observer.unobserve(el)
        })
      },
      { threshold: 0.4 }
    )
    statRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Scroll to section helper
  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      {/* ── LEFT COLUMN ── */}
      <div className={styles.left}>
        <div>
          <div className={styles.tag}>Recife, PE · 2026</div>
          <div className={styles.name}>
            <span>LUAN</span>
            <span className={styles.nameAccent}>FELIPE.</span>
          </div>
          <div className={styles.sub}>Dev Full Stack · CSO · Ciência da Computação</div>
          <p className={styles.desc}>
            Dev full stack que também funda empresas.<br />
            Código limpo. Estratégia real. Resultado mensurável.
          </p>
        </div>

        <div className={styles.bottom}>
          <div className={styles.role}>Open to work · Recife &amp; Remoto</div>
          <div className={styles.ctas}>
            <a
              href="https://wa.me/5581979018628?text=Olá%20Luan%2C%20vim%20pelo%20seu%20portfólio!"
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent"
            >
              <span>Falar comigo</span>
              <span>→</span>
            </a>
            <a href="#projetos" className="btn btn-ghost" onClick={e => go(e, '#projetos')}>
              Ver projetos
            </a>
          </div>
        </div>
      </div>

      {/* ── RIGHT COLUMN ── */}
      <div className={styles.right}>
        <div className={styles.photoWrap}>
          {/* Foto — troque o placeholder pelo <img> quando tiver a foto:
              <img src="/foto.jpg" alt="Luan Felipe" className={styles.photo} />
          */}
          <div className={styles.photoFrame} data-cursor="Foto · Luan">
            <div className={styles.photoPh}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>Adicione sua foto</span>
            </div>
            <div className={styles.photoLabel}>
              <span>Luan Felipe · Recife</span>
              <span className={styles.photoBadge}>Disponível</span>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {stats.map((s, i) => (
              <div className={`${styles.stat} h-stat`} key={i}>
                <div
                  className={styles.statN}
                  ref={el => (statRefs.current[i] = el)}
                  data-idx={i}
                >
                  {s.display ?? '0' + (s.suffix ?? '')}
                </div>
                <div className={styles.statL}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
