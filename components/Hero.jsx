'use client'
 
import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
 
const stats = [
  { value: 2,    suffix: '+',  label: 'Anos de Estudo' },
  { value: 1,    suffix: '',   label: 'Empresa fundada' },
  { value: 100,  suffix: '%',  label: 'Entregue no prazo' },
  { value: null, display: 'OTW', label: 'Open to work' },
]
 
function animateCount(el, target, suffix = '') {
  el.textContent = '0' + suffix
  const duration = 1800
  const start = performance.now()
  const update = (now) => {
    const p = Math.min((now - start) / duration, 1)
    const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
    el.textContent = Math.floor(eased * target) + suffix
    if (p < 1) requestAnimationFrame(update)
    else el.textContent = target + suffix
  }
  setTimeout(() => requestAnimationFrame(update), 400)
}
 
export default function Hero() {
  const statRefs  = useRef([])
  const photoRef  = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
 
  // Nav scroll state
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
 
  // Lock body when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])
 
  // Subtle mouse parallax on photo — desktop only
  useEffect(() => {
    const mq = window.matchMedia('(pointer:fine) and (min-width:961px)')
    if (!mq.matches) return
    const el = photoRef.current
    if (!el) return
    let tx = 0, ty = 0, cx = 0, cy = 0, raf
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth  - 0.5) * 10
      ty = (e.clientY / window.innerHeight - 0.5) * 6
    }
    const loop = () => {
      cx += (tx - cx) * 0.038
      cy += (ty - cy) * 0.038
      el.style.transform = `translate(${cx}px,${cy}px)`
      raf = requestAnimationFrame(loop)
    }
    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])
 
  // Count-up on stats
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return
            const el  = e.target
            const idx = Number(el.dataset.idx)
            const s   = stats[idx]
            if (s.value !== null) animateCount(el, s.value, s.suffix)
            observer.unobserve(el)
          })
        },
        { threshold: 0.1 }
      )
      statRefs.current.forEach((el) => el && observer.observe(el))
      return () => observer.disconnect()
    }, 800)
    return () => clearTimeout(timer)
  }, [])
 
  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
 
  const navLinks = [
    { href: '#sobre',        label: 'Projetos'     },
    { href: '#projetos',     label: 'Sobre'        },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#contato',      label: 'Contato'      },
  ]
 
  return (
    <>
 
      {/* ── Mobile overlay menu ── */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <button className={styles.mobileClose}
          onClick={() => setMenuOpen(false)} aria-label="Fechar menu">✕</button>
        <nav className={styles.mobileNav}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={styles.mobileNavLink}
              onClick={(e) => { go(e, l.href); setMenuOpen(false) }}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className={styles.mobileAvail}>
          <span className={styles.navDot} />
          Disponível agora
        </div>
      </div>
 
      {/* ── Hero ── */}
      <section id="hero" className={styles.hero}>
 
        {/* LEFT */}
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
              <a href="https://wa.me/5581979018628?text=Olá%20Luan%2C%20vim%20pelo%20seu%20portfólio!"
                target="_blank" rel="noreferrer" className="btn btn-accent">
                <span>Falar comigo</span><span>→</span>
              </a>
              <a href="#projetos" className="btn btn-ghost"
                onClick={(e) => go(e, '#projetos')}>Ver projetos</a>
            </div>
          </div>
        </div>
 
        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.photoWrap} ref={photoRef}>
 
            {/* Photo — bleeds across column grid */}
            <div className={styles.photoFrame} data-cursor="Foto · Luan">
              <img src="/FotoMinha1.png" alt="Luan Felipe" className={styles.photo} />
              {/* Dissolve gradients */}
              <div className={styles.pfT} />
              <div className={styles.pfL} />
              <div className={styles.pfB} />
              <div className={styles.pfGlow} />
              <div className={styles.photoLabel}>
                <span>Luan Felipe · Recife</span>
                <span className={styles.photoBadge}>Disponível</span>
              </div>
            </div>
 
            {/* Stats */}
            <div className={styles.stats}>
              {stats.map((s, i) => (
                <div className={`${styles.stat} h-stat`} key={i}>
                  <div className={styles.statN}
                    ref={(el) => (statRefs.current[i] = el)}
                    data-idx={i}>
                    {s.display ?? '0'}
                  </div>
                  <div className={styles.statL}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
 
      </section>
    </>
  )
}
  