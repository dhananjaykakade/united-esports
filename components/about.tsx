"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useInView } from "react-intersection-observer"
import { useMobile } from "@/hooks/use-mobile"
import { CheckCircle2, Trophy, Rocket, Flag } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

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

  const timelineEvents = [
    {
      year: "2021",
      title: "The Beginning",
      description: "UNITED Esports was founded with a vision to dominate the competitive gaming scene.",
      icon: Flag,
    },
    {
      year: "2022",
      title: "First Tournament Win",
      description: "Our Valorant team secured our first major tournament victory.",
      icon: Trophy,
    },
    {
      year: "2023",
      title: "Expansion",
      description: "Expanded into multiple game titles and signed our first content creators.",
      icon: Rocket,
    },
    {
      year: "2024",
      title: "Going Global",
      description: "Established international presence with players from across the globe.",
      icon: CheckCircle2,
    },
  ]

  return (
    <section id="about" className="py-20 bg-black relative scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black"></div>

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
              About <span className="text-red-500">UNITED</span> Esports
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              UNITED Esports is a premier gaming organization dedicated to excellence across multiple competitive
              titles. We bring together the most talented players, creators, and gaming enthusiasts to build a community
              that celebrates skill, strategy, and the love of gaming.
            </p>
            <motion.div
              className="mt-6 text-xl font-semibold text-red-500 italic"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              "Born from passion. Built to dominate."
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-center">Our Founders</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group">
                <Card className="bg-black/50 border border-red-900/20 backdrop-blur-sm overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16 border-2 border-red-500/50">
                          <AvatarImage src="/placeholder.svg?height=64&width=64" alt="DKJoD" />
                          <AvatarFallback className="bg-red-950 text-red-200">DK</AvatarFallback>
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
                        <h4 className="text-xl font-bold group-hover:text-red-500 transition-colors duration-300">
                          Dhananjay (DKJoD)
                        </h4>
                        <p className="text-gray-400">Owner & Founder</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-300">
                        Visionary leader with a passion for building a world-class esports organization. Known for
                        strategic gameplay and exceptional team management.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="h-2 bg-red-900/30 rounded-full flex-grow">
                          <motion.div
                            className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "90%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                        <span className="text-xs text-red-400">Leadership</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group">
                <Card className="bg-black/50 border border-red-900/20 backdrop-blur-sm overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16 border-2 border-red-500/50">
                          <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Legend" />
                          <AvatarFallback className="bg-red-950 text-red-200">RL</AvatarFallback>
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
                        <h4 className="text-xl font-bold group-hover:text-red-500 transition-colors duration-300">
                          Rohit (Legend)
                        </h4>
                        <p className="text-gray-400">Co-founder</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-300">
                        Creative force behind UNITED Esports' growth and community engagement. Brings versatility and
                        innovation to the organization's competitive approach.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="h-2 bg-red-900/30 rounded-full flex-grow">
                          <motion.div
                            className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "85%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                        <span className="text-xs text-red-400">Strategy</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <motion.div
                className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-red-900/30"
                initial={{ height: 0 }}
                animate={inView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 1 }}
              />

              {/* Timeline events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.year}
                    className={`relative flex ${isMobile ? "flex-row" : index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                  >
                    <motion.div
                      className={`flex-1 ${isMobile ? "ml-10" : "md:mx-8"}`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <Card className="bg-black/50 border border-red-900/20 backdrop-blur-sm overflow-hidden">
                        <CardContent className="p-4">
                          <h4 className="text-lg font-bold text-red-500">{event.title}</h4>
                          <p className="text-gray-300 mt-1">{event.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      className={`absolute ${isMobile ? "left-0" : "md:left-1/2"} -translate-x-1/2 flex items-center justify-center z-10`}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                        <event.icon className="h-4 w-4 text-white" />
                      </div>
                    </motion.div>

                    <div className={`${isMobile ? "hidden" : "hidden md:block"} flex-1 md:mx-8 flex items-center`}>
                      <motion.div
                        className="text-xl font-bold text-red-400"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        {event.year}
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
