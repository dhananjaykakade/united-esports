"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Smartphone, Crosshair, Crown, Target, Trophy } from "lucide-react"
import { useState } from "react"

const games = [
  {
    name: "Valorant",
    icon: Crosshair,
    color: "from-red-600 to-red-800",
    description: "Tactical 5v5 character-based shooter",
    stats: {
      wins: 42,
      tournaments: 15,
      ranking: "Top 10 Regional",
    },
  },
  {
    name: "PUBG PC",
    icon: Target,
    color: "from-yellow-600 to-yellow-800",
    description: "Battle royale with strategic gameplay",
    stats: {
      wins: 28,
      tournaments: 12,
      ranking: "Top 20 National",
    },
  },
  {
    name: "BGMI",
    icon: Smartphone,
    color: "from-green-600 to-green-800",
    description: "Mobile battle royale experience",
    stats: {
      wins: 35,
      tournaments: 18,
      ranking: "Top 5 Regional",
    },
  },
  {
    name: "Apex Legends",
    icon: Gamepad2,
    color: "from-red-600 to-red-800",
    description: "Fast-paced battle royale with unique abilities",
    stats: {
      wins: 23,
      tournaments: 9,
      ranking: "Top 15 National",
    },
  },
  {
    name: "Clash Royale",
    icon: Crown,
    color: "from-blue-600 to-blue-800",
    description: "Strategic real-time card battles",
    stats: {
      wins: 31,
      tournaments: 14,
      ranking: "Top 25 Global",
    },
  },
]

export default function Teams() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [expandedGame, setExpandedGame] = useState<string | null>(null)

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

  const toggleExpand = (gameName: string) => {
    if (expandedGame === gameName) {
      setExpandedGame(null)
    } else {
      setExpandedGame(gameName)
    }
  }

  return (
    <section id="teams" className="py-20 bg-black relative scroll-mt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_70%)]"></div>

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
              Our <span className="text-red-500">Teams</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              UNITED Esports competes at the highest level across multiple titles, with dedicated rosters of elite
              players. Our teams are constantly evolving and expanding into new competitive scenes.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <motion.div
                key={game.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleExpand(game.name)}
                className="cursor-pointer"
              >
                <Card className="bg-black/50 border border-red-900/20 backdrop-blur-sm overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

                  <CardContent className="p-6 relative z-10">
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${game.color} flex items-center justify-center`}
                      >
                        <game.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="h-8 w-8 rounded-full bg-black/50 border border-red-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: 9999, ease: "linear" }}
                          className="h-5 w-5 rounded-full border-t-2 border-r-2 border-red-500"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
                      {game.name}
                    </h3>

                    <p className="text-gray-400">{game.description}</p>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expandedGame === game.name ? "auto" : 0,
                        opacity: expandedGame === game.name ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-red-900/20">
                        <h4 className="text-sm font-semibold text-red-400 mb-2">Team Stats</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Tournament Wins</span>
                            <div className="flex items-center">
                              <span className="text-white font-bold">{game.stats.wins}</span>
                              <Trophy className="h-3 w-3 text-yellow-500 ml-1" />
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Tournaments Played</span>
                            <span className="text-white font-bold">{game.stats.tournaments}</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Current Ranking</span>
                            <span className="text-white font-bold">{game.stats.ranking}</span>
                          </div>

                          <div className="mt-3">
                            <div className="h-2 bg-red-900/30 rounded-full">
                              <motion.div
                                className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${(game.stats.wins / game.stats.tournaments) * 100}%` }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                              />
                            </div>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">Win Rate</span>
                              <span className="text-xs text-red-400 font-bold">
                                {Math.round((game.stats.wins / game.stats.tournaments) * 100)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <div className="mt-3 text-center">
                      <motion.div
                        animate={{
                          rotate: expandedGame === game.name ? 180 : 0,
                        }}
                        className="inline-block text-red-500 text-xs"
                      >
                        {expandedGame === game.name ? "▲" : "▼"}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <Card className="bg-black/50 border border-red-900/20 backdrop-blur-sm overflow-hidden group hover:border-red-500/30 transition-all duration-300 h-full flex items-center justify-center">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                    <Gamepad2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
                    Expanding
                  </h3>
                  <p className="text-gray-400">New titles coming soon...</p>

                  <motion.div className="mt-4 w-full h-1 bg-red-900/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 to-red-700"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        repeat: 9999,
                        duration: 2,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
