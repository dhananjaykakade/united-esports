"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Hide on mobile as we'll use bottom nav instead
  if (isMobile) return null

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-black/90 backdrop-blur-sm border-b border-red-800/20" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo className="h-12 w-12" />
          <span className="ml-2 text-xl font-bold tracking-wider hidden md:inline-block">UNITED</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {[
            { name: "About", id: "about" },
            { name: "Teams", id: "teams" },
            { name: "Players", id: "players" },
            { name: "Creators", id: "creators" },
            { name: "Sponsors", id: "sponsors" },
          ].map((item) => (
            <motion.div key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                className="text-white hover:text-red-500 hover:bg-red-900/10 relative group"
                onClick={() => scrollToSection(item.id)}
              >
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Button>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Navigation Toggle - Not needed as we'll use bottom nav */}
      </div>

      {/* Mobile Navigation Menu - Not needed as we'll use bottom nav */}
    </header>
  )
}
