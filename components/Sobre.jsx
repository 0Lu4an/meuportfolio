'use client'
 
import { useEffect, useRef } from 'react'
import styles from './Sobre.module.css'
 
const skills = [
  'React','Python','PostgreSQL','JavaScript','Tailwind',
  'Node.js','APIs REST','Git','Deploy','Figma','Estratégia','Go-to-Market','Next.js',
]
 
const feats = [
  {
    num: '01',
    title: 'Formação',
    desc: 'Ciência da Computação - UNIFAVIP. 3º período em andamento. Arquitetura, banco de dados, redes e segurança no currículo.',
  },
  {
    num: '02',
    title: 'Secco · CSO & Cofundador',
    desc: 'Responsável pela estratégia de produto, go-to-market e relacionamento com clientes desde a fundação. Aprendi que código sem estratégia não vai a lugar nenhum.',
  },
  {
    num: '03',
    title: 'Disponível agora',
    desc: 'Aberto a estágios, freelas e parcerias. Respondo no mesmo dia. Pode chegar.',
  },
]
 
const counters = [
  { value: 2,   suffix: '+ ano', label: 'Experiência com código' },
  { value: 10,  suffix: '+',     label: 'Tecnologias dominadas' },
  { value: 100, suffix: '%',     label: 'Comprometimento' },
]
 
function animateCount(el, target, suffix = '') {
  const duration = 1600
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
 
export default function Sobre() {
  const counterRefs = useRef([])
  const sectionRef  = useRef(null)
 
  // Contadores animados
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target
          const idx = Number(el.dataset.idx)
          animateCount(el, counters[idx].value, counters[idx].suffix)
          observer.unobserve(el)
        })
      },
      { threshold: 0.5, rootMargin: '0px 0px -50px 0px' }
    )
    // pequeno delay para garantir que o DOM montou
    const timer = setTimeout(() => {
      counterRefs.current.forEach(el => el && observer.observe(el))
    }, 300)
    return () => { clearTimeout(timer); observer.disconnect() }
  }, [])
 
  return (
    <section className="sec-full" id="sobre" ref={sectionRef}>
      <div className="sec">
        <h2 className="r d1">
          DEV QUE<br />TAMBÉM<br /><em>FUNDA.</em>
        </h2>
 
        <div className={styles.grid}>
          <div className={`${styles.body} r d1`}>
            <p>
              Tenho 20 anos, estudo Ciência da Computação na <strong>UNIFAVIP</strong> e sou
              cofundador e CSO da <em>Secco</em> — startup que ajudei a tirar do papel enquanto
              ainda cursava o 2º período.
            </p>
            <p>
              Isso me deu algo que a maioria dos devs não tem: sei escrever código{' '}
              <em>e</em> entendo o que esse código precisa fazer no mundo real. Conheço
              cliente, conheço negócio, conheço deadline de verdade.
            </p>
            <p>
              Trabalho com <strong>Next.js, React, Python e PostgreSQL</strong> no dia a dia — mas o
              que realmente entrego é clareza: interfaces que fazem sentido, sistemas que não
              travam, soluções que o cliente consegue usar.
            </p>
            <div className={styles.pills}>
              {skills.map(s => (
                <span className={`${styles.pill} pill`} key={s}>{s}</span>
              ))}
            </div>
          </div>
 
          <div className={`${styles.feats} r d2`}>
            {feats.map(f => (
              <div className={`${styles.feat} sobre-feat`} key={f.num}>
                <div className={styles.featNum}>{f.num}</div>
                <div>
                  <div className={styles.featTitle}>{f.title}</div>
                  <p className={styles.featDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* Stats com counter animado */}
        <div className={`${styles.statsRow} r d3`}>
          {counters.map((c, i) => (
            <div className={styles.statItem} key={i}>
              <div
                className={styles.statN}
                ref={el => (counterRefs.current[i] = el)}
                data-idx={i}
              >
                0{c.suffix}
              </div>
              <div className={styles.statL}>{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 