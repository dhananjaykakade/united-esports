"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Twitch, Youtube, Gamepad, Sparkles, Wifi } from "lucide-react"
import { useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

const creators = [
  {
    name: "Pratham",
    alias: "TopG",
    platforms: ["Twitch", "YouTube"],
    games: ["Valorant", "BGMI", "Minecraft"],
    tagline: "Streaming the best gameplay 24/7",
    initials: "PT",
    isLive: true,
    followers: "125K",
    mainPlatform: "Twitch",
    platformIcon: Twitch,
    platformColor: "from-purple-600 to-purple-800",
  },
  {
    name: "Amol",
    alias: "Tochan",
    platforms: ["YouTube", "Instagram"],
    games: ["Valorant", "PUBG PC", "BGMI"],
    tagline: "High-skill gameplay and tutorials",
    initials: "AR",
    isLive: false,
    followers: "89K",
    mainPlatform: "YouTube",
    platformIcon: Youtube,
    platformColor: "from-red-600 to-red-800",
  },
  {
    name: "Dhananjay",
    alias: "DKJoD",
    platforms: ["Twitch", "YouTube", "Instagram"],
    games: ["Valorant", "Apex Legends"],
    tagline: "Strategy and team play specialist",
    initials: "DK",
    isLive: true,
    followers: "210K",
    mainPlatform: "Twitch",
    platformIcon: Twitch,
    platformColor: "from-purple-600 to-purple-800",
  },
  {
    name: "Rohit",
    alias: "Legend",
    platforms: ["YouTube", "TikTok"],
    games: ["BGMI", "Minecraft", "Clash Royale"],
    tagline: "Entertainment and skill combined",
    initials: "RL",
    isLive: false,
    followers: "156K",
    mainPlatform: "YouTube",
    platformIcon: Youtube,
    platformColor: "from-red-600 to-red-800",
  },
]

export default function Creators() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [hoveredCreator, setHoveredCreator] = useState<string | null>(null)
  const isMobile = useMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="creators" className="py-20 bg-black relative scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              Content <span className="text-red-500">Creators</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our talented content creators bring UNITED Esports to audiences worldwide through streams, videos, and
              social media content.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {creators.map((creator) => (
              <motion.div
                key={creator.alias}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredCreator(creator.alias)}
                onHoverEnd={() => setHoveredCreator(null)}
                onTouchStart={() => isMobile && setHoveredCreator(creator.alias)}
                className="cursor-pointer"
              >
                <Card className="bg-black/50 border border-red-900/20 backdrop-blur-sm overflow-hidden group relative">
                  {/* Platform-colored gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${creator.platformColor} opacity-10 group-hover:opacity-15 transition-opacity duration-300`}
                  ></div>

                  {/* Live indicator */}
                  {creator.isLive && (
                    <div className="absolute top-4 right-4 flex items-center">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-red-500 mr-1"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: 9999,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="text-xs font-bold text-red-500">LIVE</span>
                    </div>
                  )}

                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16 border-2 border-red-500/50">
                          <AvatarImage src="/placeholder.svg?height=64&width=64" alt={creator.alias} />
                          <AvatarFallback className="bg-red-950 text-red-200">{creator.initials}</AvatarFallback>
                        </Avatar>

                        {/* Platform icon */}
                        <div
                          className={`absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-gradient-to-br ${creator.platformColor} flex items-center justify-center`}
                        >
                          <creator.platformIcon className="h-3 w-3 text-white" />
                        </div>

                        {/* Animated ring for live creators */}
                        {creator.isLive && (
                          <motion.div
                            className="absolute -inset-1 rounded-full border-2 border-red-500/30"
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: 9999,
                              ease: "easeInOut",
                            }}
                          />
                        )}
                      </div>

                      <div>
                        <h4 className="text-xl font-bold group-hover:text-red-500 transition-colors duration-300 flex items-center">
                          {creator.alias}
                          {creator.isLive && (
                            <motion.div
                              className="ml-2"
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.7, 1, 0.7],
                              }}
                              transition={{
                                duration: 2,
                                repeat: 9999,
                                ease: "easeInOut",
                              }}
                            >
                              <Wifi className="h-4 w-4 text-red-500" />
                            </motion.div>
                          )}
                        </h4>
                        <p className="text-gray-400 text-sm">{creator.name}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-gray-300">{creator.followers} followers</span>
                      </div>

                      <p className="text-gray-300 text-sm italic mb-3">"{creator.tagline}"</p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {creator.platforms.map((platform) => (
                          <Badge
                            key={platform}
                            variant="outline"
                            className="bg-red-950/20 text-red-300 border-red-800/30 hover:bg-red-900/30"
                          >
                            {platform}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {creator.games.map((game) => (
                          <Badge key={game} className="bg-black/30 text-gray-300 border border-red-900/20">
                            <Gamepad className="h-3 w-3 mr-1" /> {game}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Hover/tap to reveal content */}
                    <motion.div
                      className="mt-4 pt-4 border-t border-red-900/20 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: hoveredCreator === creator.alias || isMobile ? "auto" : 0,
                        opacity: hoveredCreator === creator.alias || isMobile ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Next Stream:</span>
                        <span className="text-sm text-white font-bold">
                          {creator.isLive ? "Live Now!" : "Today, 8PM EST"}
                        </span>
                      </div>

                      <motion.button
                        className="mt-3 w-full py-2 bg-gradient-to-r from-red-600 to-red-700 rounded-md text-white text-sm font-bold"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {creator.isLive ? "Watch Stream" : "Subscribe"}
                      </motion.button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
