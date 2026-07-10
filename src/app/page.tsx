import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero/Hero'
import About from '@/components/sections/About/About'
import Projects from '@/components/sections/Projects/Projects'
import Experience from '@/components/sections/Experience/Experience'
import Stack from '@/components/sections/Stack/Stack'
import Contact from '@/components/sections/Contact/Contact'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/effects/Cursor'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
