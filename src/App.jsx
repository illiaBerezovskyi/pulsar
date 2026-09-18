import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Directions from './components/Directions.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Packages from './components/Packages.jsx'
import Calculator from './components/Calculator.jsx'
import Faq from './components/Faq.jsx'
import Contacts from './components/Contacts.jsx'
import Requisites from './components/Requisites.jsx'
import Footer from './components/Footer.jsx'
import Offer from './components/Offer.jsx'

export default function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const isOffer = hash === '#/offer'

  useEffect(() => {
    if (isOffer) return
    // Reveal on scroll. A plain position check (instead of IntersectionObserver)
    // also catches blocks that an anchor jump scrolled past without them ever
    // intersecting the viewport — those would otherwise stay invisible.
    const pending = [...document.querySelectorAll('.reveal')]
    let frame = 0

    const check = () => {
      frame = 0
      for (let i = pending.length - 1; i >= 0; i--) {
        if (pending[i].getBoundingClientRect().top < window.innerHeight * 0.88) {
          pending[i].classList.add('is-visible')
          pending.splice(i, 1)
        }
      }
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }

    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [isOffer])

  if (isOffer) {
    return <Offer />
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Directions />
        <Services />
        <Process />
        <Packages />
        <Calculator />
        <Faq />
        <Contacts />
        <Requisites />
      </main>
      <Footer />
    </>
  )
}
