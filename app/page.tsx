import Navbar from "../components/navbar"
import Hero from "@/components/hero"
import About from "../components/about"
import InternshipCallout from "@/components/internship-callout"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <InternshipCallout />
      <Contact />
      <Footer />
    </main>
  )
}
