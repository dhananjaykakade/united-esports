"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"
import { Instagram, Twitter, Youtube, Twitch, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitch, href: "#", label: "Twitch" },
    { icon: Discord, href: "#", label: "Discord", hasNotification: true },
  ]

  return (
    <footer className="bg-black border-t border-red-900/20 relative pt-12 pb-24 md:pb-12">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-10 w-10" />
              <span className="text-xl font-bold tracking-wider">UNITED ESPORTS</span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">Where Skill Meets Firepower</p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.div
                key={social.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-black/50 border-red-900/30 hover:bg-red-950/30 hover:border-red-500/50 relative"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />

                    {/* Notification dot for Discord */}
                    {social.hasNotification && (
                      <motion.span
                        className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: 9999,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </a>
                </Button>

                {/* Animated ring on hover */}
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-red-500/0 pointer-events-none"
                  whileHover={{
                    borderColor: "rgba(239, 68, 68, 0.3)",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-red-900/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© {currentYear} UNITED Esports. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
