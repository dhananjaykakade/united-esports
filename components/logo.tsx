"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  className?: string
  glowing?: boolean
  imageUrl?: string
  alt?: string
  zoomLevel?: number
}

export default function Logo({ 
  className, 
  glowing = false,
  imageUrl = "/UneLogo.png", // Default path - update with your actual logo path
  alt = "United Esports Logo",
  zoomLevel = 1.4, // Default zoom level - adjust as needed
}: LogoProps) {
  return (
    <div className={cn("relative rounded-full p-[2px] group", className)}>
      {/* Outer glow */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-br from-red-600 to-red-800 opacity-75 blur-md",
          glowing ? "animate-pulse" : "",
        )}
        initial={glowing ? { scale: 0.9 } : {}}
        animate={
          glowing
            ? {
                scale: [0.9, 1.1, 0.9],
                opacity: [0.7, 1, 0.7],
              }
            : {}
        }
        transition={
          glowing
            ? {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }
            : {}
        }
      />

      {/* Inner glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-800 opacity-90"
        initial={glowing ? { opacity: 0.7 } : {}}
        animate={glowing ? { opacity: [0.7, 1, 0.7] } : {}}
        transition={
          glowing
            ? {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }
            : {}
        }
      />

      {/* Logo content with image filling entire area and zoom effect */}
      <div className="relative flex items-center justify-center w-full h-full rounded-full bg-black overflow-hidden z-10">
        <motion.div
          className="absolute inset-0 w-full h-full overflow-hidden"
          initial={glowing ? { filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.7))" } : {}}
          animate={
            glowing
              ? {
                  filter: [
                    "drop-shadow(0 0 8px rgba(239, 68, 68, 0.7))",
                    "drop-shadow(0 0 16px rgba(239, 68, 68, 0.9))",
                    "drop-shadow(0 0 8px rgba(239, 68, 68, 0.7))",
                  ],
                }
              : {}
          }
          transition={
            glowing
              ? {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }
              : {}
          }
        >
          <div className="relative w-full h-full" style={{ transform: `scale(${zoomLevel})` }}>
            <Image
              src={imageUrl}
              alt={alt}
              fill
              sizes="100%"
              className="object-cover rounded-full pr-0.5"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}