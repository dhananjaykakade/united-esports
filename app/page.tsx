import { Suspense } from "react"
import Navbar from "@/components/navbar"
import BottomNav from "@/components/bottom-nav"
import Hero from "@/components/hero"
import About from "@/components/about"
import Teams from "@/components/teams"
import Players from "@/components/players"
import Creators from "@/components/creators"
import Sponsors from "@/components/sponsors"
import Footer from "@/components/footer"
import LoadingSpinner from "@/components/loading-spinner"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-noise-pattern opacity-5 pointer-events-none"></div>

      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Teams />
          <Players />
          <Creators />
          <Sponsors />
        </main>
        <Footer />
        <BottomNav />
        <ScrollToTop />
      </Suspense>
    </div>
  )
}
