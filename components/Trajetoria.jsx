import styles from './Trajetoria.module.css'

const items = [
  {
    period: '2025 — 2028',
    inst: 'UNIFAVIP — Ciência da Computação',
    course: 'Bacharelado · 3º Período em andamento',
    detail: 'Arquitetura · Banco de Dados · Redes · Segurança',
  },
  {
    period: '2025 — hoje',
    inst: 'Secco — Cofundador & CSO',
    course: 'Experiência prática em gestão, estratégia e produto',
    detail: 'Go-to-Market · Produto · Operações · Clientes',
  },
  {
    period: '2025 — hoje',
    inst: 'Dev Full Stack',
    course: 'React, Python, PostgreSQL, Node.js, Next.js, APIs, Deploy',
    detail: 'Projetos reais · Cursos · Documentação · Comunidade',
  },
]

export default function Trajetoria() {
  return (
    <section className="sec-full">
      <div className="sec">
        <p className="s-label r">05 — Trajetória</p>
        <h2 className="r d1">
          ONDE<br /><em>APRENDO.</em>
        </h2>
        <div className={styles.list}>
          {items.map((item, i) => (
            <div className={`${styles.item} r d${i + 1}`} key={i}>
              <div className={styles.period}>{item.period}</div>
              <div>
                <div className={styles.inst}>{item.inst}</div>
                <div className={styles.course}>{item.course}</div>
                <div className={styles.detail}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
