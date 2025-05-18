"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { Info, Users, Trophy, Gamepad, Award } from "lucide-react"

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const isMobile = useMobile()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Hide on desktop


  const navItems = [
    { id: "about", icon: Info, label: "About" },
    { id: "teams", icon: Trophy, label: "Teams" },
    { id: "players", icon: Users, label: "Players" },
    { id: "creators", icon: Gamepad, label: "Creators" },
    { id: "sponsors", icon: Award, label: "Sponsors" },
  ]

  useEffect(() => {
    const sections = navItems.map((item) => item.id)

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
    if (!isMobile) return null

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-t border-red-800/20 py-2"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-lg transition-colors",
              activeSection === item.id ? "text-red-500" : "text-gray-400 hover:text-white",
            )}
            onClick={() => scrollToSection(item.id)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <item.icon className="h-5 w-5 mb-1" />
              {activeSection === item.id && (
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
            <span className="text-xs">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
