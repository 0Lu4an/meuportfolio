import styles from './Processo.module.css'

const steps = [
  { num: '01', title: 'Entender', desc: 'Antes de escrever código, entendo o problema real. Quem usa, qual a dor, o que define sucesso.' },
  { num: '02', title: 'Planejar', desc: 'Estruturo escopo, prazo e riscos antes de começar. Sem surpresas no meio do projeto.' },
  { num: '03', title: 'Construir', desc: 'Código limpo, componentes reutilizáveis, performance desde o início. Entrego rápido sem entregar errado.' },
  { num: '04', title: 'Melhorar',   desc: 'Produto lançado não é produto pronto. Acompanho, meço e melhoro com você depois do deploy.' },
]

export default function Processo() {
  return (
    <section className="sec-full">
      <div className="sec">
        <p className="s-label r">04 — Como trabalho</p>
        <h2 className="r d1">
          MEU<br /><em>PROCESSO.</em>
        </h2>
        <div className={`${styles.grid} r d2`}>
          {steps.map(s => (
            <div className={`${styles.item} proc-item`} key={s.num}>
              <div className={styles.num}>{s.num}</div>
              <div className={styles.title}>{s.title}</div>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
