import styles from './Contato.module.css'

const links = [
  { label: 'Email',     value: 'lunfelipe.dev@gmail.com',         href: 'mailto:lunfelipe.dev@gmail.com' },
  { label: 'LinkedIn',  value: 'luanfelipe-dev',                  href: 'https://www.linkedin.com/in/luanfelipe-dev/' },
  { label: 'GitHub',    value: '0Lu4an',                          href: 'https://github.com/0Lu4an' },
  { label: 'Telefone',  value: '+55 (81) 97901-8628',             href: 'tel:+5581979018628' },
]

export default function Contato() {
  return (
    <section className={styles.section} id="contato">
      <div className={styles.bgText} aria-hidden="true">VAMOS</div>

      <div className={styles.inner}>

        <div className={`${styles.title} r d1`}>
          VAMOS<br />CONSTRUIR<br /><span>ALGO REAL.</span>
        </div>

        <p className={`${styles.sub} r d2`}>
          Disponível para freelas, projetos e consultoria. Entrego resultado, não só código.
        </p>

        <a
          href="https://wa.me/5581979018628?text=Olá%20Luan%2C%20vim%20pelo%20seu%20portfólio!"
          target="_blank"
          rel="noreferrer"
          className={`btn btn-accent r d3 ${styles.waCta}`}
        >
          <span>Falar pelo WhatsApp</span>
          <span>→</span>
        </a>

        <div className={`${styles.links} r d4`}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
              className={styles.link}
            >
              <span className={styles.linkLabel}>{l.label}</span>
              <span className={styles.linkValue}>{l.value}</span>
              <span className={styles.arr}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
