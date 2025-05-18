"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, ChevronDown, ChevronUp, Gamepad, Target, Crosshair } from "lucide-react"
import { useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

const players = [
  {
    name: "Pratham",
    alias: "TopG",
    games: ["Valorant", "BGMI", "Minecraft"],
    tagline: "Device 0 Skill 100",
    initials: "PT",
    stats: {
      aim: 85,
      strategy: 70,
      teamwork: 90,
      experience: 75,
    },
    achievements: ["Regional MVP 2023", "Clutch Master Award"],
    mainGame: "Valorant",
    gameIcon: Crosshair,
  },
  {
    name: "Amol",
    alias: "Ryzen",
    games: ["Valorant", "PUBG PC", "BGMI", "Apex Legends"],
    tagline: "Ambani of community",
    initials: "AR",
    stats: {
      aim: 80,
      strategy: 95,
      teamwork: 85,
      experience: 90,
    },
    achievements: ["Strategy Mastermind 2023", "Top Fragger Award"],
    mainGame: "PUBG PC",
    gameIcon: Target,
  },
  {
    name: "Sumit",
    alias: "Masti",
    games: ["Valorant"],
    tagline: "Masti rukni nahi chaiye",
    initials: "SM",
    stats: {
      aim: 90,
      strategy: 75,
      teamwork: 80,
      experience: 70,
    },
    achievements: ["Rookie of the Year", "Clutch Player"],
    mainGame: "Valorant",
    gameIcon: Crosshair,
  },
  {
    name: "Dhananjay",
    alias: "DKJoD",
    games: ["Valorant", "PUBG PC", "BGMI", "Apex Legends"],
    tagline: "IGL for the reason",
    initials: "DK",
    stats: {
      aim: 75,
      strategy: 100,
      teamwork: 95,
      experience: 95,
    },
    achievements: ["Best IGL 2023", "Tournament MVP"],
    mainGame: "Apex Legends",
    gameIcon: Gamepad,
  },
  {
    name: "Rohit",
    alias: "Legend",
    games: ["BGMI", "Minecraft", "Clash Royale", "Pokémon GO"],
    tagline: "Pr bhai me toh game khelne aya tha",
    initials: "RL",
    stats: {
      aim: 70,
      strategy: 90,
      teamwork: 85,
      experience: 85,
    },
    achievements: ["Versatility Award", "Community Leader"],
    mainGame: "BGMI",
    gameIcon: Target,
  },
  {
    name: "Ayush",
    alias: "Nerd",
    games: ["Valorant", "Minecraft", "Roblox"],
    tagline: "Only Gaming 24/7",
    initials: "AB",
    stats: {
      aim: 95,
      strategy: 65,
      teamwork: 75,
      experience: 80,
    },
    achievements: ["Sharpshooter Award", "Headshot King"],
    mainGame: "Valorant",
    gameIcon: Crosshair,
  },
  {
    name: "Siddhesh",
    alias: "Fhantom",
    games: ["BGMI"],
    tagline: "Petiking",
    initials: "SF",
    stats: {
      aim: 85,
      strategy: 80,
      teamwork: 70,
      experience: 75,
    },
    achievements: ["Rising Star Award", "Clutch Specialist"],
    mainGame: "BGMI",
    gameIcon: Target,
  },
]

export default function Players() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [expandedPlayer, setExpandedPlayer] = useState<string | null>(null)
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

  const toggleExpand = (alias: string) => {
    if (expandedPlayer === alias) {
      setExpandedPlayer(null)
    } else {
      setExpandedPlayer(alias)
    }
  }

  return (
    <section id="players" className="py-20 bg-black relative scroll-mt-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:14px_14px]"></div>

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
              Players & <span className="text-red-500">Legends</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Meet the talented individuals who represent UNITED Esports across various competitive titles.
              {isMobile
                ? " Tap on a player card to see their stats."
                : " Hover and click on a player card to see their stats."}
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player) => (
              <motion.div
                key={player.alias}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
                onClick={() => toggleExpand(player.alias)}
              >
                <Card className="bg-black/50 border border-red-900/20 backdrop-blur-sm overflow-hidden group relative h-full flex flex-col">
                  {/* Background game icon */}
                  <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
                    <player.gameIcon className="h-32 w-32" />
                  </div>

                  {/* Power-up animation on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  <CardContent className="p-6 relative z-10 flex-grow">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16 border-2 border-red-500/50">
                          <AvatarImage src="/placeholder.svg?height=64&width=64" alt={player.alias} />
                          <AvatarFallback className="bg-red-950 text-red-200">{player.initials}</AvatarFallback>
                        </Avatar>
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
                      </div>
                      <div>
                        <h4 className="text-xl font-bold group-hover:text-red-500 transition-colors duration-300 flex items-center">
                          {player.alias}
                          <player.gameIcon className="h-4 w-4 ml-2 text-gray-400" />
                        </h4>
                        <p className="text-gray-400 text-sm">{player.name}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 my-4">
                      {player.games.map((game) => (
                        <Badge
                          key={game}
                          variant="outline"
                          className="bg-red-950/20 text-red-300 border-red-800/30 hover:bg-red-900/30"
                        >
                          {game}
                        </Badge>
                      ))}
                    </div>

                    <AnimatePresence>
                      {expandedPlayer === player.alias && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 space-y-3">
                            <h5 className="text-sm font-semibold text-red-400">Player Stats</h5>

                            {/* Stat bars */}
                            <div className="space-y-2">
                              {Object.entries(player.stats).map(([stat, value]) => (
                                <div key={stat} className="space-y-1">
                                  <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-400 capitalize">{stat}</span>
                                    <span className="text-xs font-bold text-white">{value}/100</span>
                                  </div>
                                  <div className="h-2 bg-red-900/30 rounded-full overflow-hidden">
                                    <motion.div
                                      className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full"
                                      initial={{ width: 0 }}
                                      animate={{ width: `${value}%` }}
                                      transition={{ duration: 0.8, delay: 0.1 }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Achievements */}
                            <div>
                              <h5 className="text-sm font-semibold text-red-400 mb-1">Achievements</h5>
                              <ul className="space-y-1">
                                {player.achievements.map((achievement, i) => (
                                  <li key={i} className="text-xs text-gray-300 flex items-center">
                                    <span className="text-red-500 mr-1">•</span> {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>

                  <CardFooter className="border-t border-red-900/10 pt-4 pb-4 px-6 relative z-10">
                    <div className="flex items-start gap-2 w-full">
                      <Quote className="h-4 w-4 text-red-500 flex-shrink-0 mt-1" />
                      <div className="flex-grow">
                        <p className="text-gray-300 italic text-sm">{player.tagline}</p>
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedPlayer === player.alias ? 180 : 0,
                        }}
                        className="text-red-500"
                      >
                        {expandedPlayer === player.alias ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </motion.div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
