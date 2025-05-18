"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Infinity } from "lucide-react"
import { useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

export default function Sponsors() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [revealed, setRevealed] = useState(false)
  const isMobile = useMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const handleReveal = () => {
    if (!revealed) {
      setRevealed(true)
    }
  }

  return (
    <section id="sponsors" className="py-20 bg-black relative scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/5 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              Our <span className="text-red-500">Sponsors</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We're proud to partner with industry-leading brands that support our vision and help us achieve
              excellence.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            {!revealed ? (
              <motion.div
                className="relative cursor-pointer"
                onClick={handleReveal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="bg-black/50 border border-red-900/20 backdrop-blur-sm overflow-hidden group hover:border-red-500/30 transition-all duration-300 aspect-video flex items-center justify-center">
                  <CardContent className="p-10 flex flex-col items-center justify-center h-full">
                    <motion.div
                      className="text-center"
                      animate={{
                        scale: [0.95, 1.05, 0.95],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: 9999,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="text-red-500 mb-4">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 2L15 5H21V11L24 14L21 17V23H15L12 26L9 23H3V17L0 14L3 11V5H9L12 2Z"
                            fill="currentColor"
                            fillOpacity="0.2"
                          />
                          <path
                            d="M12 6L14 9H18V13L20 14L18 15V19H14L12 21L10 19H6V15L4 14L6 13V9H10L12 6Z"
                            fill="currentColor"
                            fillOpacity="0.6"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Sponsor Reveal</h3>
                      <p className="text-gray-400 text-sm">{isMobile ? "Tap" : "Click"} to unlock our main sponsor</p>
                    </motion.div>
                  </CardContent>
                </Card>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 border-2 border-red-500/30 pointer-events-none"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.98, 1.01, 0.98],
                  }}
                  transition={{
                    duration: 2,
                    repeat: 9999,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Card className="bg-black/50 border border-red-900/20 backdrop-blur-sm overflow-hidden group hover:border-red-500/30 transition-all duration-300">
                  <CardContent className="p-10 flex flex-col items-center">
                    <div className="mb-6 relative">
                      <motion.div
                        className="absolute -inset-8 bg-white/5 rounded-full blur-md"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: 9999,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="relative bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-full"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: 9999,
                          ease: "linear",
                        }}
                      >
                        <Infinity className="h-20 w-20 text-white" />
                      </motion.div>
                    </div>
                    <motion.h3
                      className="text-3xl font-bold mb-4 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Infinity
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 text-center max-w-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Our primary sponsor supporting UNITED Esports in our competitive journey across all titles.
                      Infinity provides cutting-edge gaming hardware and technology to ensure our players perform at
                      their best.
                    </motion.p>

                    <motion.div
                      className="mt-6 flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <motion.button
                        className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 rounded-md text-white text-sm font-bold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Visit Website
                      </motion.button>
                      <motion.button
                        className="px-4 py-2 bg-transparent border border-red-600 text-red-500 rounded-md text-sm font-bold"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(220, 38, 38, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Products
                      </motion.button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
