import Cursor from '../components/Cursor'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import Sobre from '../components/Sobre'
import Projetos from '../components/Projetos'
import Diferenciais from '../components/Diferenciais'
import Processo from '../components/Processo'
import Trajetoria from '../components/Trajetoria'
import Contato from '../components/Contato'
import Footer from '../components/Footer'
import RevealObserver from '../components/RevealObserver'

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Sobre />
        <Projetos />
        <Diferenciais />
        <Processo />
        <Trajetoria />
        <Contato />
      </main>
      <Footer />
    </>
  )
}