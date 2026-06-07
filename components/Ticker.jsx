import styles from './Ticker.module.css'

const items = [
  'React', 'Python', 'PostgreSQL', 'Tailwind CSS', 'APIs REST',
  'JavaScript', 'Node.js', 'Git & GitHub', 'Estratégia Digital',
  'Deploy & DevOps', 'Go-to-Market', 'UX / UI',
]

export default function Ticker() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span className={styles.item} key={i}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
