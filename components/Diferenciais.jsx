import styles from './Diferenciais.module.css'

const items = [
  {
    num: '01',
    title: 'Código + Negócio',
    desc: 'Não entrego só funcionalidade. Entrego solução. Sei o que o código precisa fazer pra gerar resultado real — aprendi isso fundando a Secco.',
  },
  {
    num: '02',
    title: 'Visão de Produto',
    desc: 'Como CSO, penso em UX, funil e retenção antes de abrir o editor. Isso faz diferença no que construo — e no que fica de pé depois que entrego.',
  },
  {
    num: '03',
    title: 'Comunicação Direta',
    desc: 'Sem enrolação, sem jargão desnecessário. Explico o que estou fazendo, por quê, e quando entrego. Respeito o seu tempo tanto quanto o meu.',
  },
]

export default function Diferenciais() {
  return (
    <section className="sec-full" id="diferenciais">
      <div className="sec">
        <h2 className="r d1">
          O QUE ME<br /><em>DIFERENCIA.</em>
        </h2>
        <div className={`${styles.grid} r d2`}>
          {items.map(item => (
            <div className={`${styles.item} diff-item`} key={item.num}>
              <div className={styles.num}>{item.num}</div>
              <div className={styles.title}>{item.title}</div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
