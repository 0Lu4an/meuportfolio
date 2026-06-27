'use client'

import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#sobre',       label: 'Sobre' },
  { href: '#projetos',    label: 'Projetos' },
  { href: '#diferenciais',label: 'Diferenciais' },
  { href: '#contato',     label: 'Contato' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo} onClick={e => handleLink(e, '#hero')}>LF.</a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.status}>
          <span className={styles.dot} />
          Disponível
        </div>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={e => handleLink(e, l.href)}>
            {l.label}
          </a>
        ))}
        <div className={styles.mobileStatus}>
          <span className={styles.dot} />
          Disponível agora
        </div>
      </div>
    </>
  )
}
