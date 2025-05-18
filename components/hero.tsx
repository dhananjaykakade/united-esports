
"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Logo from "@/components/logo"
import { Play, Video, Swords } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMobile()

  // Digital rain effect
  useEffect(() => {
    setMounted(true)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initial setup
    handleResize()

    const fontSize = isMobile ? 10 : 14
    const columns = Math.floor(canvas.width / fontSize)

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    const draw = () => {
      if (!ctx) return
      
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Add some randomness to the color
        const alpha = Math.random() * 0.5 + 0.1
        ctx.fillStyle = `rgba(255, 0, 0, ${alpha})`

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)
    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20">
      {/* Digital rain background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]"></div>

      {/* Crosshair elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-20 h-20 border-2 border-red-500/30 rounded-full"
          style={{ left: "30%", top: "20%" }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0, 0.3, 0],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-16 h-16"
          style={{ right: "25%", bottom: "30%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="relative w-full h-full">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-red-500/40"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-red-500/40"></div>
            <div className="absolute left-1/2 top-1/2 w-4 h-4 border border-red-500/60 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Logo className="w-32 h-32 mb-8" glowing={true} />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-red-500 inline-block relative">
              UNITED
              <motion.span
                className="absolute -inset-1 bg-red-500/10 blur-sm rounded-lg"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>{" "}
            Esports
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Where Skill Meets Firepower
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="default"
              className="bg-red-600 hover:bg-red-700 text-white border-none group relative overflow-hidden text-lg font-medium py-6"
              onClick={() => document.getElementById("players")?.scrollIntoView({ behavior: "smooth" })}
            >
              <motion.span
                className="absolute inset-0 bg-red-400/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <Play className="mr-2 h-5 w-5" /> Meet the Legends
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-500 hover:bg-red-600/10 group relative overflow-hidden text-lg font-medium py-6"
            >
              <motion.span
                className="absolute inset-0 bg-red-500/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Video className="mr-2 h-5 w-5" /> Watch in Action
            </Button>

            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:text-red-500 hover:bg-red-600/10 group text-lg font-medium py-6"
              onClick={() => window.open("https://discord.gg/Q4pT2ThHp8", "_blank")}
            >
              <Swords className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" /> Join the Squad
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}