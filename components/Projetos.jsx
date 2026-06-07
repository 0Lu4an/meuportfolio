import styles from './Projetos.module.css'

// ────────────────────────────────────────────────────────────
// EDITE AQUI — adicione seus projetos reais
// status: 'live' | 'wip' | 'done'
// ────────────────────────────────────────────────────────────
const projects = [
  {
    num: '01',
    status: 'wip',
    statusLabel: 'Em andamento',
    type: 'Landing Page · Conversão',
    title: 'Nome do Projeto 1',
    desc: 'Descreva o problema do cliente, o que você construiu e o impacto real. Ex: "Reduziu bounce rate em 40% e aumentou conversões em 2x."',
    tags: ['React', 'Tailwind', 'Figma', 'Deploy'],
    href: '#',
    cursor: 'Ver projeto',
  },
  {
    num: '02',
    status: 'done',
    statusLabel: 'Entregue',
    type: 'Web App · Full Stack',
    title: 'Nome do Projeto 2',
    desc: 'Contexto do segundo projeto: segmento do cliente, a dor que tinha, o que foi entregue. Métrica real impressiona — taxa, tempo, leads.',
    tags: ['Python', 'PostgreSQL', 'APIs REST', 'Node.js'],
    href: '#',
    cursor: 'Ver projeto',
  },
  {
    num: '03',
    status: 'live',
    statusLabel: 'Live',
    type: 'Startup · Cofundador & CSO',
    title: 'Secco',
    desc: 'Cofundei e estruturei a Secco do zero enquanto cursava a faculdade. Responsável pela estratégia de produto, go-to-market, operações e relacionamento com clientes.',
    tags: ['Estratégia', 'Produto', 'Go-to-Market', 'Liderança'],
    href: 'https://secco.com.br',
    cursor: 'Ver Secco',
  },
]

export default function Projetos() {
  return (
    <section className="sec-full" id="projetos">
      <div className="sec">
        <p className="s-label r">02 — Projetos</p>
        <h2 className="r d1">
          O QUE<br /><em>CONSTRUÍ.</em>
        </h2>

        <div className={styles.list}>
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel={p.href.startsWith('http') ? 'noreferrer' : undefined}
              className={`${styles.proj} r d${i}`}
              data-cursor={p.cursor}
            >
              <div className={styles.num}>{p.num}</div>

              <div className={styles.body}>
                <div className={`${styles.status} ${styles[p.status]}`}>
                  {p.statusLabel}
                </div>
                <div className={styles.type}>{p.type}</div>
                <div className={styles.title}>{p.title}</div>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => (
                    <span className={`${styles.tag} tag`} key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.arr}>↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
