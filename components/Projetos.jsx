import styles from './Projetos.module.css'
 
const projects = [
  {
    num: '01',
    status: 'wip',
    statusLabel: 'Entregue',
    type: 'Landing Page · Bebidas & Delivery',
    title: 'Adega Beer',
    desc: 'Depósito de bebidas em Joaquim Nabuco/PE com +1.5k seguidores no Instagram — mas sem página própria para converter esse público. Criei uma landing page com visual escuro e premium que apresenta o negócio e direciona o cliente direto para o pedido via WhatsApp.',
    detail: 'Design bold alinhado ao posicionamento da adega. CTA direto, identidade forte.',
    tags: ['Figma', 'React', 'Tailwind', 'Vercel'],
    href: 'https://adegabeer.vercel.app',
    cursor: 'Ver projeto',
  },
  {
    num: '02',
    status: 'wip',
    statusLabel: 'Entregue',
    type: 'Landing Page · Beleza & Estética',
    title: 'MJ Studio Beauty',
    desc: 'Studio de maquiagem e design de sobrancelha que usava só o Instagram como vitrine. Desenvolvi uma landing page elegante que organiza os serviços e converte visitante em agendamento direto pelo WhatsApp.',
    detail: 'Atendimento em studio e domicílio. Visual feminino, serviços bem segmentados, foco em conversão.',
    tags: ['Figma', 'React', 'Tailwind', 'Vercel'],
    href: 'https://www.mjstudiobeauty.com.br',
    cursor: 'Ver projeto',
  },
  {
    num: '03',
    status: 'live',
    statusLabel: 'Live',
    type: 'Startup · Cofundador & CSO',
    title: 'Secco',
    desc: 'Cofundei a Secco em 2025, ainda na faculdade — startup de engenharia de software que transforma ideias em produtos digitais reais. Cuido de estratégia, produto e clientes. Já lançamos soluções próprias como o Secco Geocarbo.',
    detail: 'Engenharia avançada, parceria próxima, resultado mensurável. O projeto que mais me desafia.',
    tags: ['Estratégia', 'Produto', 'Go-to-Market', 'IA', 'Liderança'],
    href: 'https://seccolab.netlify.app',
    cursor: 'Ver Secco',
  },
]
 
export default function Projetos() {
  return (
    <section className="sec-full" id="projetos">
      <div className="sec">
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
                {p.detail && (
                  <p className={styles.detail}>{p.detail}</p>
                )}
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