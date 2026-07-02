import { Nav } from "@/components/ui/Nav"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Portfolio } from "@/components/sections/Portfolio"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/ui/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
