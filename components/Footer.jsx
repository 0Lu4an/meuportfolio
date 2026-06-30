import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>LF.</div>
      <div className={styles.copy}>© 2026 Luan Felipe — Recife, PE</div>
      <div className={styles.links}>
        <a href="https://www.linkedin.com/in/luanfelipe-dev/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/0Lu4an" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:luanfelipe.dev@gmail.com">Email</a>
      </div>
    </footer>
  )
}
